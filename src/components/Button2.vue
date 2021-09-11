<template>
  <button @click="click">{{ text }}</button>
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
  width: 340px;
  height: 50px;
  border-radius: 25px;
  font-size: 1.8rem;

  border: 1px solid gray;
}
</style>
