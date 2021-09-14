<template>
  <div>
    <app-header text="新規登録" />
    <div class="inputs">
      <input-text
        text="example@example.com"
        title="メールアドレス"
        :iconPath="iconPath.mail"
        class="inputText"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="パスワード"
        :iconPath="iconPath.password"
        type="password"
        class="inputText"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="パスワードを再入力"
        :iconPath="iconPath.password"
        type="password"
        class="inputText"
      />
    </div>
    <Button1
      :blue="press"
      :dontPress="!press"
      @my-click="toCreateAccount"
      class="button"
      text="新規登録"
    />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import InputText from "../components/InputText.vue";
import Button1 from "../components/Button1.vue";
export default {
  components: {
    AppHeader,
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
    toCreateAccount() {
      this.$router.push({ path: "/CreateAccount" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/sign.scss";
</style>
