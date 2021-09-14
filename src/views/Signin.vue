<template>
  <div>
    <app-header text="ログイン" />
    <div class="inputs">
      <input-text
        text="example@example.com"
        title="メールアドレス"
        :errorMessage="errorMessage.email"
        :iconPath="iconPath.email"
        class="inputText"
        v-model="user.email"
        @my-change="inputUpdate"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="パスワード"
        :errorMessage="errorMessage.password"
        :iconPath="iconPath.password"
        type="password"
        class="inputText"
        v-model="user.password"
        @my-change="inputUpdate"
      />
    </div>
    <Button1
      :blue="press"
      :dontPress="!press"
      @my-click="signin"
      class="button"
      text="ログイン"
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
      user: {
        email: "",
        password: "",
      },
      errorMessage: {
        email: "",
        password: "",
      },
      errorMessageList: {
        email: "※無効なメールアドレスです。",
        password: "※半角英数字8文字以上にしてください。",
      },
      iconPath: {
        email: "./img/email.svg",
        password: "./img/password.svg",
      },
      press: false,
    };
  },
  methods: {
    signin() {
      if (this.press) {
        this.$store.dispatch("signin", {
          email: this.user.email,
          password: this.user.password,
        });
      }
    },
    inputUpdate() {
      const emailReg =
        /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
      const passwordReg = /^([a-zA-Z0-9]{8,})$/;
      if (this.user.email && this.user.password) {
        if (this.user.email.match(emailReg)) this.errorMessage.email = "";
        else this.errorMessage.email = this.errorMessageList.email;

        if (this.user.password.match(passwordReg))
          this.errorMessage.password = "";
        else this.errorMessage.password = this.errorMessageList.password;

        if (
          this.errorMessage.email == false &&
          this.errorMessage.password == false
        )
          this.press = true;
        else this.press = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/sign.scss";
</style>
