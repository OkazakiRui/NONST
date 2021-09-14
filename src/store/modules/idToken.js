import axios from "../../axios-auth";
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
  signup({ commit }, authData) {
    axios
      .post(`/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_APIKEY}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((response) => {
        commit("updateIdToken", response.data.idToken);
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
