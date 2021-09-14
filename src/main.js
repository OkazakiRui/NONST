import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = `https://firestore.googleapis.com/v1/projects/${process.env.VUE_APP_FIREBASE_PROJECT_ID}/databases/(default)/documents`;

// ress 読み込み
import "ress";

createApp(App).use(store).use(router).mount("#app");
