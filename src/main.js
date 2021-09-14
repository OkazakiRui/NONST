import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// import axios from "axios";
import store from "./store";

// ress 読み込み
import "ress";

createApp(App).use(store).use(router).mount("#app");
