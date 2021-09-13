<template>
  <div class="m-0">
    <lebel>
      <p>
        {{ title }}
        <select required>
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
