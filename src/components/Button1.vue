<template>
  <button
    :class="{ 'm-0': true, blue: blue, dontPress: dontPress }"
    @click="click"
  >
    {{ text }}
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
    text: {
      type: String,
      default: "text is not defined",
    },
    blue: {
      type: Boolean,
      default: false,
    },
    dontPress: {
      type: Boolean,
      default: false,
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
button.blue {
  border: none;
  background: #58b4ff;
  color: white;
}
button.dontPress {
  border: none;
  background: #c7c7c7;
  color: white;
}
</style>
