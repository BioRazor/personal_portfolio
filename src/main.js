import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "@/i18n";

// Vuesax
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  // options here
});
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFileExcel,
  faFilePowerpoint,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faPython,
  faJs,
  faVuejs,
  faBootstrap,
  faTrello,
  faWindows
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faPython,
  faJs,
  faVuejs,
  faBootstrap,
  faTrello,
  faFileExcel,
  faFilePowerpoint,
  faTools,
  faWindows
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
