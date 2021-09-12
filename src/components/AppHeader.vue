<template>
  <header>
    <div class="header f-cenbet">
      <button @click="click"></button>
      <h2>{{ text }}</h2>
      <button @click="click"></button>
    </div>
  </header>
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
header {
  width: 100%;
  position: relative;
  height: 64px;
}
.header {
  height: 64px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: #fff;
  box-shadow: 0px 2px 0 #50505050;
  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
  }
}
</style>
