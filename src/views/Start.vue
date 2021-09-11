<template>
  <div class="start">
    <h1 class="m-0 start__logo">
      <img src="../../public/img/logo.svg" alt="NONSTのロゴ" />
    </h1>
    <div class="start__btns">
      <Button1 class="m-0" text="新規登録" @my-click="signup" />
      <Button1 class="m-0" text="ログイン" @my-click="signin" />
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
    signup() {
      console.log("click");
    },
    signin() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/start.scss";
</style>
