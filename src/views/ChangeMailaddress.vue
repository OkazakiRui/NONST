<template>
  <div class="footer-pb">
    <app-header text="メールアドレス変更" />
    <div class="inputs">
      <input-text
        text="example@example.com"
        title="現在のメールアドレス"
        :iconPath="iconPath.mail"
        type="email"
        class="inputText"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="新しいメールアドレス"
        :iconPath="iconPath.mail"
        type="email"
        class="inputText"
      />
      <input-text
        text="半角英数字で8文字以上"
        title="新しいメールアドレスを再入力"
        :iconPath="iconPath.mail"
        type="email"
        class="inputText"
      />
    </div>
    <Button1
      :blue="press"
      :dontPress="!press"
      @my-click="mailaddressUpdate"
      class="button"
      text="メールアドレスを変更する"
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
      },
      press: true,
    };
  },
  methods: {
    mailaddressUpdate() {
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
