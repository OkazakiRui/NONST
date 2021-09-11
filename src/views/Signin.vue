<template>
  <div>
    <app-header text="ログイン" />
    <div class="inputs">
      <input-text
        text="メールアドレス"
        :iconPath="iconPath.mail"
        class="inputText"
      />
      <input-text
        text="パスワード"
        :iconPath="iconPath.password"
        class="inputText"
      />
    </div>
    <Button1 class="button" text="ログイン" />
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/sign.scss";
</style>
