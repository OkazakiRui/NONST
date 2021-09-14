import axios from "axios";

const instance = axios.create({
  baseURL: `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com/users`,
});

export default instance;
