<template>
  <div class="m-0">
    <lebel>
      <p>
        {{ title }}
        <input :class="{ icon: iconPath }" :type="type" :placeholder="text" />
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
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
p {
  width: min-content;
  font-size: 1.2rem;
}
img {
  position: absolute;
  z-index: -1;
  left: 4px;
  bottom: 4px;
}
input {
  width: 320px;
  height: 26px;
  font-size: 1.2rem;
  padding-left: 4px;
  margin-top: 4px;
  letter-spacing: 0.1rem;
  border-bottom: 1px solid gray;
}
input.icon {
  padding-left: 32px;
}
</style>
