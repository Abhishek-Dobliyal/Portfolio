import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueWriter from "vue-writer";

createApp(App).use(store).use(VueWriter).use(router).mount("#app");
