import { createStore } from "vuex";

import count from "./modules/count";
import message from "./modules/message";

export default createStore({
  modules: {
    count,
    message,
  },

  // action =>  mutations => actions
});
