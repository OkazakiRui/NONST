import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import "ress";

// baseURL setting
axios.defaults.baseURL = `https://firestore.googleapis.com/v1/projects/${process.env.VUE_APP_FIREBASE_PROJECT_ID}/databases/(default)/documents`;
// autoSignin を実行
store.dispatch("autoSignin");
createApp(App).use(store).use(router).mount("#app");
