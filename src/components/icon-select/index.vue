<template>
  <div>
    <el-input
      placeholder="请选择图标"
      v-model="value"
      class="input-with-select"
    >
      <el-button type="primary" slot="append" @click="dialogVisible = true">
        <slot>
          <icon-library v-model="value" />
        </slot>
      </el-button>
    </el-input>
    <div class="v-modal" v-show="dialogVisible"></div>
    <div
      class="el-dialog__wrapper"
      style="z-index: 9999"
      v-show="dialogVisible"
    >
      <div class="el-dialog">
        <div class="el-dialog__header">
          <span class="el-dialog__title">选择图标</span
          ><button
            type="button"
            aria-label="Close"
            class="el-dialog__headerbtn"
            @click="dialogVisible = false"
          >
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <el-tabs v-model="activeName" tab-position="left">
          <el-tab-pane
            v-for="(item, index) in iconData"
            :key="index"
            :label="item.title"
            :name="item.title"
          >
            <section class="main">
              <article
                v-for="(iconChi, index2) in item.icon"
                :key="index2"
                @click="handleClick(`${item.type} ${iconChi}`)"
                class="item"
              >
                <template>
                  <icon-library
                    class="icon"
                    :value="`${item.type} ${iconChi} 40`"
                  />
                </template>
              </article>
            </section>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- <el-dialog
      title="选择图标"
      :visible.sync="dialogVisible"
      width="60%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
      :append-to-body="true"
      :modal="false"
    >
      <el-tabs v-model="activeName" tab-position="left">
        <el-tab-pane
          v-for="(item, index) in iconData"
          :key="index"
          :label="item.title"
          :name="item.title"
        >
          <section class="main">
            <article
              v-for="(iconChi, index2) in item.icon"
              :key="index2"
              @click="handleClick(`${item.type} ${iconChi}`)"
              class="item"
            >
              <template>
                <icon-library
                  class="icon"
                  :value="`${item.type} ${iconChi} 40`"
                />
              </template>
            </article>
          </section>
        </el-tab-pane>
      </el-tabs>
    </el-dialog> -->
  </div>
</template>

<script>
import iconlibrary from "../icon-library";
import iconList from "./iconList";
export default {
  name: "icon-select",
  components: {
    iconlibrary,
  },
  props: {
    value: "",
  },
  data() {
    const iconData = iconList.map((item) => {
      item.type = "iconfont";
      return item;
    });

    return {
      dialogVisible: false,
      activeName: "通用",
      iconData,
      iconVal: "iconfont icon-search",
    };
  },
  methods: {
    handleClick(val) {
      this.$emit("input", val);
      this.iconVal = val;
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
.icon {
  width: 3em;
  height: 3em;
}
.main {
  display: flex;
  flex-flow: row wrap;
  height: 50vh;
  overflow-y: scroll;
}
.item {
  padding: 1rem;
}
.item:hover {
  cursor: pointer;
  background-color: #409eff;
  color: #fff;
  border-radius: 5px;
  transition: width 2s, background-color 1s;
}
.el-dialog__header {
  border-bottom: #ccc solid 1px;
}
.el-dialog {
  margin-top: 5vh;
  width: 60%;
}
</style>
