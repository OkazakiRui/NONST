<template>
  <div class="m-0">
    <lebel>
      <p>
        {{ title }}
        <input
          :class="{ icon: iconPath }"
          :type="type"
          :placeholder="text"
          :value="modelValue"
          @input="changeValue"
        />
      </p>
      <img v-if="iconPath" :src="iconPath" />
    </lebel>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: "text is not defined",
    },
    title: {
      type: String,
      default: "text is not defined",
    },
    iconPath: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    changeValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
p {
  width: min-content;
  font-size: 1.4rem;
}
img {
  position: absolute;
  z-index: -1;
  left: 4px;
  bottom: 4px;
  height: 22px;
}
input {
  width: 320px;
  height: 26px;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  border-bottom: 1px solid gray;
  margin-top: 8px;
  padding-left: 4px;
  padding-bottom: 4px;
}
input.icon {
  padding-left: 36px;
}
</style>
