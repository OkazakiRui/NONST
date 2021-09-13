<template>
  <button
    :class="{ 'm-0': true, color: colorGreen, half: half }"
    @click="click"
    v-html="text"
  ></button>
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
    colorGreen: {
      type: Boolean,
      default: false,
    },
    half: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 300px;
  height: 64px;
  border-radius: 21px;
  background-color: #58b4ff;
  color: white;
  font-size: 1.4rem;
  margin-top: 56px;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 77px;
    height: 74px;
    position: absolute;
    left: -16px;
    bottom: 50%;
    background: url(../../public/img/home__speak--btnDecoration.svg) no-repeat;
  }
}
.color {
  background-color: #00cb5e;
  &::after {
    background: url(../../public/img/home__listen--btnDecoration.svg) no-repeat;
  }
}
.half {
  width: 142px;
  margin-top: 16px;
  &::after {
    content: "";
    display: none;
  }
}
</style>
