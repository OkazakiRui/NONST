<template>
  <div>
    <app-header text="アカウント登録" />
    <div class="inputs">
      <input-text text="example@example.com" title="名前" class="inputText" />
      <input-text text="半角英数字で8文字以上" title="年齢" class="inputText" />
      <input-text
        text="半角英数字で8文字以上"
        title="所在地"
        class="inputText"
      />
    </div>
    <Button1 class="button" text="新規登録" />
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
