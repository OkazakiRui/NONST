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
        const now = new Date();
        // 有効期限が切れる時間を代入
        const expiryTimeMs = now.getTime() + response.data.expiresIn * 1000;

        // localStorage に保存
        localStorage.setItem("idToken", response.data.idToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("expiryTimeMs", expiryTimeMs);
        commit("updateIdToken", response.data.idToken);

        // 有効期限の時間が来ると一回実行
        setTimeout(() => {
          // トークンをリフレッシュする関数
          dispatch("refreshIdToken", response.data.refreshToken);
        }, response.data.expiresIn * 1000);
        router.push({ path: "/CreateAccount" });
      });
  },
  signin({ commit, dispatch }, authData) {
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
        localStorage.setItem("idToken", response.data.idToken);
        commit("updateIdToken", response.data.idToken);
        setTimeout(() => {
          dispatch("refreshIdToken", response.data.refreshToken);
        }, response.data.expiresIn * 1000);
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
        // localStorage.setItem("idToken", response.data.id_token);
        commit("updateIdToken", response.data.id_token);
        // 有効期限の時間が来るたびに自動で延長
        setTimeout(() => {
          dispatch("refreshIdToken", response.data.refresh_token);
        }, response.data.expires_in * 1000);
      });
  },
  autoSignin({ commit, dispatch }) {
    const idToken = localStorage.getItem("idToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const expiryTimeMs = localStorage.getItem("expiryTimeMs");
    if (!idToken) return;
    const now = new Date();
    // 有効期限が切れているかを判別
    // 切れているとtrue
    const isExpired = now.getTime() >= expiryTimeMs;

    if (isExpired) {
      dispatch("refreshIdToken", refreshToken);
    } else {
      const expiresInMs = expiryTimeMs - now.getTime();
      // 残り時間秒後にTokenを更新する
      setTimeout(() => {
        dispatch("refreshIdToken", refreshToken);
      }, expiresInMs);

      commit("updateIdToken", idToken);
    }
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
