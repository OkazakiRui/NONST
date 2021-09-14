import axios from "../../axios-auth";

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
