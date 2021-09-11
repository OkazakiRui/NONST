<template>
  <div>
    <img v-if="iconPath" :src="iconPath" alt="" />
    <input :class="{ icon: iconPath }" type="text" :placeholder="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "text is not defined",
    },
    iconPath: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
img {
  position: absolute;
  z-index: -1;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
}

input {
  width: 340px;
  height: 30px;
  font-size: 1.2rem;
  padding-left: 2px;

  border-bottom: 1px solid gray;
}
input.icon {
  padding-left: 40px;
}
</style>
