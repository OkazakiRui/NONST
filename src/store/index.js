import { createStore } from "vuex";

import idToken from "./modules/idToken";

export default createStore({
  modules: {
    idToken,
  },
});
