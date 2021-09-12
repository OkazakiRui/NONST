import { createRouter, createWebHistory } from "vue-router";
import Start from "../views/Start.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Home from "../views/Home.vue";
import Matching from "../views/Matching.vue";

import Test from "../views/Test.vue";
const routes = [
  {
    path: "/Start",
    name: "Start",
    component: Start,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Matching",
    name: "Matching",
    component: Matching,
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
