// グローバル変数
const state = {
  message: "",
};
// 値を読み取る
const getters = {
  getMessage: (state) => state.message,
};
// グローバル変数に処理を加える
const mutations = {
  updateMessage(state, newMessage) {
    state.message = newMessage;
  },
};
// 非同期処理
const actions = {
  updateMessage({ commit }, newMessage) {
    commit("updataMessage", newMessage);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
