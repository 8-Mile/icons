
import Vue from "vue";
import App from "./App.vue";
import taoIcon from "@/components";
import "element-ui/lib/theme-chalk/index.css";
import { Dialog, Input, Tabs, TabPane, Button } from "element-ui";
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Button);
Vue.use(taoIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
