import { createRouter, createWebHistory } from "vue-router";
import Start from "../views/Start.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Home from "../views/Home.vue";
import Matching from "../views/Matching.vue";
import Notification from "../views/Notification.vue";
import Mypage from "../views/Mypage.vue";
import SeekPage from "../views/SeekPage.vue";
import Search from "../views/Search.vue";
import ChangePassword from "../views/ChangePassword.vue";
import ChangeMailaddress from "../views/ChangeMailaddress.vue";

import store from "../store";

import Test from "../views/Test.vue";
const routes = [
  {
    path: "/Start",
    name: "Start",
    component: Start,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: CreateAccount,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/Matching",
    name: "Matching",
    component: Matching,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/Notification",
    name: "Notification",
    component: Notification,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/Mypage",
    name: "Mypage",
    component: Mypage,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/SeekPage",
    name: "SeekPage",
    component: SeekPage,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/ChangePassword",
    name: "ChangePassword",
    component: ChangePassword,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/ChangeMailaddress",
    name: "ChangeMailaddress",
    component: ChangeMailaddress,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next("start");
      }
    },
  },
  {
    path: "/Test",
    name: "Test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
