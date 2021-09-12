<template>
  <button class="m-0 f-alibet" @click="click">
    <img :src="userImg" :alt="name + 'さんのプロフィール画像'" />
    <div class="chants">
      <div class="f-alibet">
        <h4>{{ name }}</h4>
        <p>{{ time }}</p>
      </div>
      <p class="talk">{{ text }}</p>
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("my-click");
    },
  },
  props: {
    name: {
      type: String,
      default: "name is not defined",
    },
    text: {
      type: String,
      default: "text is not defined",
    },
    time: {
      type: String,
      default: "12:00",
    },
    userImg: {
      type: String,
      default: "./img/userIcon.svg",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  text-align: left;
  width: 100%;
  height: 74px;
  padding: 12px 16px;
}
h4 {
  font-size: 1.6rem;
}
img {
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
.chants {
  margin-left: 16px;
  width: 100%;
}
.talk {
  font-size: 1.2rem;
}
</style>
