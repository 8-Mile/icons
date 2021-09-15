const vueFiles = require.context("./", true, /\.vue$/);
export default {
  install(Vue) {
    vueFiles.keys().forEach(key => {
      const component = vueFiles(key).default;
      Vue.component(component.name, component);
    });
  }
};
