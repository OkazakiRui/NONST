const state = {
  APIKEY: process.env.VUE_APP_FIREBASE_APIKEY,
};
const getters = {
  APIKEY: (state) => state.APIKEY,
};
export default {
  state,
  getters,
};
