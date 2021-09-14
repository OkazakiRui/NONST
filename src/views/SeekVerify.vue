<template>
  <div class="footer-pb">
    <app-header text="内容確認" />
    <div class="seekVerify">
      <div class="contents seekVerify__date">
        <p>9/12（日）</p>
      </div>
      <card class="seekVerify__card" />
      <button1 class="seek__btn" text="募集する" />
      <button1 class="seek__backBtn" text="戻る" />
    </div>
    <app-footer selected="1" />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import Button1 from "../components/Button1.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    Button1,
    Card,
  },
  data() {
    return {
      selected: 1,
    };
  },
  methods: {
    btn1Click() {
      this.selected = 1;
    },
    btn2Click() {
      this.selected = 2;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/seekpage.scss";
</style>
