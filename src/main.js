
import Vue from "vue";
import App from "./App.vue";
import icon from "@/components";
Vue.use(icon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
