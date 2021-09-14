<template>
  <div class="start">
    <h1 class="m-0 start__logo">
      <img src="../../public/img/logo.svg" alt="NONSTのロゴ" />
    </h1>
    <div class="start__btns">
      <Button1 blue="true" text="新規登録" @my-click="toSignup" />
      <Button1 text="ログイン" @my-click="toSignin" />
    </div>
  </div>
</template>

<script>
import Button1 from "../components/Button1.vue";
export default {
  components: {
    Button1,
  },
  methods: {
    toSignup() {
      this.$router.push({ path: "/Signup" });
    },
    toSignin() {
      this.$router.push({ path: "/Signin" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/start.scss";
</style>
