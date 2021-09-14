<template>
  <div class="footer-pb">
    <app-header text="パスワード変更" />
    <div class="inputs">
      <input-text
        text="半角英数字で8文字以上"
        title="現在のパスワード"
        :iconPath="iconPath.password"
        type="password"
        class="inputText"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="新しいパスワード"
        :iconPath="iconPath.password"
        type="password"
        class="inputText"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="新しいパスワードを再入力"
        :iconPath="iconPath.password"
        type="password"
        class="inputText"
      />
    </div>
    <Button1
      :blue="press"
      :dontPress="!press"
      @my-click="passwordUpdate"
      class="button"
      text="パスワードを変更する"
    />
    <Button1 @my-click="toMypage" class="button" text="マイページに戻る" />
    <app-footer selected="4" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import InputText from "../components/InputText.vue";
import Button1 from "../components/Button1.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    InputText,
    Button1,
  },
  data() {
    return {
      iconPath: {
        mail: "./img/mail.svg",
        password: "./img/password.svg",
      },
      press: true,
    };
  },
  methods: {
    passwordUpdate() {
      this.$router.push({ path: "/Mypage" });
    },
    toMypage() {
      this.$router.push({ path: "/Mypage" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/change.scss";
</style>
