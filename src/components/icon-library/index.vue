<template>
  <div>
    <i
      :class="icon.class"
      :style="{ fontSize: `${icon.size}px` }"
      aria-hidden="true"
    ></i>
  </div>
</template>

<script>
import "@/assets/iconfont-icon/iconfont.css";
// import "@/assets/iconfont-icon/iconfont.js";
export default {
  name: "icon-library",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    icon: {
      get() {
        const temp = this.value.split(" ");
        if (["iconfont"].includes(temp[0])) {
          const type = {
            iconfont: [`iconfont ${temp[1]}`],
          };
          return {
            type: temp[0],
            size: temp[2],
            class: type[temp[0]],
          };
        }else{
          return {
            type: 'iconfont',
            size: '14',
            class: 'iconfont icon-search'
          }
        }
      },
      set(val) {
      },
    },
  },
};
</script>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
