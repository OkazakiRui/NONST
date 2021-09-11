<template>
  <div>
    <input type="text" name="" id="" :placeholder="text" />
  </div>
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
input {
  width: 340px;
  height: 50px;
  font-size: 1.2rem;

  border-bottom: 1px solid gray;
}
</style>
