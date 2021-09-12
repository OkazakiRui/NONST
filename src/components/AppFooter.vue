<template>
  <footer>
    <div class="footer m-0 f-bet">
      <app-footer-button
        :selected="1 == selected"
        icon="1"
        text="ホーム"
        iconPath="./img/footer__matching.svg#home"
      />
      <app-footer-button
        :selected="2 == selected"
        icon="2"
        text="マッチング"
        iconPath="./img/footer__matching.svg"
      />
      <app-footer-button
        :selected="3 == selected"
        icon="3"
        text="通知"
        iconPath="./img/footer__notification.svg"
      />
      <app-footer-button
        :selected="4 == selected"
        icon="4"
        text="マイページ"
        iconPath="./img/footer__mypage.svg"
      />
    </div>
  </footer>
</template>

<script>
import AppFooterButton from "./AppFooterButton.vue";
export default {
  components: { AppFooterButton },
  methods: {
    click() {
      this.$emit("my-click");
    },
  },
  props: {
    text: {
      type: String,
      default: "text is not defined",
    },
    selected: {
      type: Number,
      default: -1,
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  height: 80px;
  width: 100%;
  z-index: 1000;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -2px 0 #50505050;
}
.footer {
  width: 343px;
}
</style>
