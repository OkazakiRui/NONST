import { createStore } from "vuex";

import APIKEY from "./modules/APIKEY";
import idToken from "./modules/idToken";

export default createStore({
  modules: {
    APIKEY,
    idToken,
  },
});
