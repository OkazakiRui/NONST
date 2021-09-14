<template>
  <div>
    <app-header text="内容確認" />
    <div class="seekVerify">
      <div class="contents seekVerify__date">
        <p>9/12（日）</p>
      </div>
      <card class="seekVerify__card" />
      <button1 class="seek__btn" text="募集する" />
      <button1 class="seek__backBtn" text="戻る" />
    </div>
  </div>
</template>
<script>
import AppHeader from "./AppHeader.vue";
import Button1 from "./Button1.vue";
import Card from "./Card.vue";
export default {
  components: {
    AppHeader,
    Button1,
    Card,
  },
  data() {
    return {
      selected: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/seekpage.scss";
</style>
