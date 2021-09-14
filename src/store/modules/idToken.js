import axios from "../../axios-auth";
import axiosRefresh from "../../axios-refresh";
import router from "../../router";

const state = {
  idToken: null,
};
const mutations = {
  updateIdToken(state, idToken) {
    state.idToken = idToken;
  },
};
const actions = {
  signup({ commit, dispatch }, authData) {
    axios
      .post(`/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_APIKEY}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((response) => {
        commit("updateIdToken", response.data.idToken);
        // 有効期限の時間が来ると一回実行
        setTimeout(() => {
          // トークンをリフレッシュする関数
          dispatch("refreshIdToken", response.data.refreshToken);
        }, response.data.expiresIn * 1000);
        router.push({ path: "/CreateAccount" });
      });
  },
  signin({ commit }, authData) {
    axios
      .post(
        `/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_APIKEY}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        commit("updateIdToken", response.data.idToken);
        router.push({ path: "/" });
      });
  },
  // トークンをリフレッシュする関数
  refreshIdToken({ commit, dispatch }, refreshToken) {
    axiosRefresh
      .post(`/token?key=${process.env.VUE_APP_FIREBASE_APIKEY}`, {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      })
      .then((response) => {
        commit("updateIdToken", response.data.id_token);
        // 有効期限の時間が来るたびに自動で延長
        setTimeout(() => {
          dispatch("refreshIdToken", response.data.refresh_token);
        }, response.data.expires_in * 1000);
      });
  },
};
const getters = {
  idToken: (state) => state.idToken,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
