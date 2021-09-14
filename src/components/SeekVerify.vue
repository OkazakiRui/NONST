<template>
  <div>
    <app-header text="内容確認" />
    <div class="seekVerify">
      <div class="contents seekVerify__date">
        <p>9/12（日）</p>
      </div>
      <card
        class="seekVerify__card"
        :name="name"
        :age="age"
        :time1="time1"
        :time2="time2"
        :message="message"
        :shop="shop"
        :icon="icon"
      />
      <button1 @my-click="btn1click" class="seek__btn" text="募集する" />
      <button1
        @my-click="btn2click"
        class="seek__backBtn"
        text="募集内容を変更する"
      />
    </div>
  </div>
</template>
<script>
import AppHeader from "./AppHeader.vue";
import Button1 from "./Button1.vue";
import Card from "./Card.vue";
export default {
  props: {
    name: {
      type: String,
      default: "名無し",
    },
    age: {
      type: String,
      default: "30代",
    },
    time1: {
      type: String,
      default: "00:00",
    },
    time2: {
      type: String,
      default: "00:00",
    },
    message: {
      type: String,
      default: "よろしくお願いします！",
    },
    shop: {
      type: String,
      default: "鳥貴族　天神橋三丁目店",
    },
    icon: {
      type: String,
      default: "./img/userIcon.svg",
    },
  },
  components: {
    AppHeader,
    Button1,
    Card,
  },
  methods: {
    btn1click() {
      this.$emit("verify-click");
    },
    btn2click() {
      this.$emit("back-click");
    },
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
