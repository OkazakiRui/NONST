<template>
  <button class="m-0" @click="click">{{ text }}</button>
</template>

<script>
export default {
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
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 240px;
  height: 60px;
  border-radius: 30px;
  letter-spacing: 0.2rem;
  font-size: 1.4rem;

  border: 1px solid gray;
}
</style>
