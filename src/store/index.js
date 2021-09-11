import { createStore } from "vuex";

export default createStore({
  // グローバル変数
  state: {
    message: "",
  },
  // 値を読み取る
  getters: {
    getMessage: (state) => state.message,
  },
  // 値を変更する
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  // 非同期処理
  actions: {
    updateMessage({ commit }, newMessage) {
      commit("updataMessage", newMessage);
    },
  },
  modules: {},

  // action =>  mutations => actions
});
