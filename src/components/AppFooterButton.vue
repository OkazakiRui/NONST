<template>
  <button @click="click" :class="{ 'f-ali': true, selected: selected }">
    <footer-icons :icon="icon" :class="{ selected: selected }" />
    {{ text }}
  </button>
</template>

<script>
import FooterIcons from "./AppFooterIcons.vue";
export default {
  methods: {
    click() {
      this.$emit("my-click");
    },
  },
  components: {
    FooterIcons,
  },
  props: {
    text: {
      type: String,
      default: "text is not defined",
    },
    iconPath: {
      type: String,
      default: null,
    },
    icon: {
      type: Number,
      default: -1,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  flex-direction: column;
  font-size: 10px;
  width: 70px;
  height: 80px;
  font-weight: bold;
  padding-top: 8px;
  color: #757575;
  svg {
    margin-bottom: 4px;
    stroke: #757575;
  }
  svg.selected {
    stroke: #58b4fd;
  }
  &.selected {
    color: #58b4fd;
  }
}
</style>
