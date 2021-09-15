
<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="value"
      class="input-with-select"
    >
      <el-button type="primary" slot="append" @click="dialogVisible = true">
        <icon-library v-model="value" />
      </el-button>
    </el-input>
    <el-dialog title="选择图标" :visible.sync="dialogVisible" width="60%">
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
              <template >
                <iconlibrary class="icon" :value="`${item.type} ${iconChi} 40`"/>
              </template>
            </article>
          </section>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import iconlibrary from "../icon-library";
import iconList from "./iconList";
export default {
  name: "icon-select",
  components: {
    iconlibrary
  },
  props: {
    value: {}
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
    };
  },
  methods: {
    handleClick(val) {
      this.$emit("input", val);
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
  transition: width 2s, background-color 1s;
}
</style>
