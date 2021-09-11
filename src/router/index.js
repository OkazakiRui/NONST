import { createRouter, createWebHistory } from "vue-router";
import Start from "../views/Start.vue";
import Signup from "../views/Signup.vue";

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
