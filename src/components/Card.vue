<template>
  <button>
    <div>
      <img :src="icon" />
      <p class="name">{{ name }}</p>
      <p class="age">【{{ age }}】</p>
    </div>
    <div>
      <p class="shop">{{ shop }}</p>
      <p class="time">{{ time }}</p>
      <p class="text">{{ text }}</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "not defined",
    },
    age: {
      type: String,
      default: "30代",
    },
    shop: {
      type: String,
      default: "鳥貴族　天神橋三丁目店",
    },
    time: {
      type: String,
      default: "18:00 〜 20:00",
    },
    text: {
      type: String,
      default: "よろしくお願いします！",
    },
    icon: {
      type: String,
      default: "./img/userIcon.svg",
    },
  },
};
</script>

<style lang="scss" scoped></style>
