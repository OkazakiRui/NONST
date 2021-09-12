<template>
  <button class="m-0" @click="click">
    <figure>
      <img src="" alt="" />
    </figure>
    <div>
      <div>
        <h4>{{ name }}</h4>
        <p>{{ time }}</p>
      </div>
      <p>{{ text }}</p>
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
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 74px;
}
</style>
