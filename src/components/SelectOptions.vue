<template>
  <div class="m-0">
    <lebel>
      <p>
        {{ title }}
        <select required :value="modelValue" @change="changeValue">
          <option disabled selected value="">{{ text }}</option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
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
      default: "",
    },
    text: {
      type: String,
      default: "text is not defined",
    },
    options: {
      type: [Array],
      required: true,
    },
    title: {
      type: String,
      default: "text is not defined",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    changeValue(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("my-change");
    },
    change() {
      this.$emit("my-change");
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  width: min-content;
  font-size: 1.4rem;
}
select {
  width: 320px;
  height: 26px;
  font-size: 1.4rem;
  padding-left: 4px;
  margin-top: 4px;
  letter-spacing: 0.1rem;
  border-bottom: 1px solid gray;
  &:invalid {
    color: #757575;
  }
}
</style>
