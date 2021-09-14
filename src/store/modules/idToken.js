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
  signup({ dispatch }, authData) {
    axios
      .post(`/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_APIKEY}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((response) => {
        dispatch("setAuthData", {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        });
        router.push({ path: "/CreateAccount" });
      });
  },
  signin({ dispatch }, authData) {
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
        dispatch("setAuthData", {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        });
        router.push({ path: "/" });
      });
  },
  logout({ commit }) {
    commit("updateIdToken", null);
    localStorage.removeItem("idToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expiryTimeMs");
    router.push({
      path: "/start",
    });
  },
  // トークンをリフレッシュする関数
  async refreshIdToken({ dispatch }, refreshToken) {
    axiosRefresh
      .post(`/token?key=${process.env.VUE_APP_FIREBASE_APIKEY}`, {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      })
      .then((response) => {
        dispatch("setAuthData", {
          idToken: response.data.id_token,
          expiresIn: response.data.expires_in,
          refreshToken: response.data.refresh_token,
        });
      });
  },
  async autoSignin({ commit, dispatch }) {
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
  setAuthData({ commit, dispatch }, authData) {
    const now = new Date();
    // 有効期限が切れる時間を代入
    const expiryTimeMs = now.getTime() + authData.expiresIn * 1000;

    // localStorage に保存
    localStorage.setItem("idToken", authData.idToken);
    localStorage.setItem("refreshToken", authData.refreshToken);
    localStorage.setItem("expiryTimeMs", expiryTimeMs);
    commit("updateIdToken", authData.idToken);

    // 有効期限の時間が来ると一回実行
    setTimeout(() => {
      // トークンをリフレッシュする関数
      dispatch("refreshIdToken", authData.refreshToken);
    }, authData.expiresIn * 1000);
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
