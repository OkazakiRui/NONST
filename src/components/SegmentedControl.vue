<template>
  <div class="segmentedControl">
    <div class="m-0 f-bet btns">
      <button @click="btn1Click" :class="{ selected: selected == 1 }">
        {{ buttonText1 }}
      </button>
      <button @click="btn2Click" :class="{ selected: selected == 2 }">
        {{ buttonText2 }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText1: {
      type: String,
      default: "text is not defined",
    },
    buttonText2: {
      type: String,
      default: "text is not defined",
    },
    selected: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    btn1Click() {
      this.$emit("btn1-click");
    },
    btn2Click() {
      this.$emit("btn2-click");
    },
  },
};
</script>

<style lang="scss" scoped>
div.segmentedControl {
  position: fixed;
  box-shadow: 0px 2px 0 #50505050;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  top: 64px;
  .btns {
    width: 255px;
  }
  button {
    letter-spacing: 0.2rem;
    width: 100px;
    font-size: 1.2rem;
    padding: 8px 0;
    color: #757575;
    &.selected {
      color: #333;
      position: relative;

      &::before {
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        border-radius: 2px;
        position: absolute;
        background-color: blue;
      }
    }
  }
}
</style>
