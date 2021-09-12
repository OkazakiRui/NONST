<template>
  <button class="m-0" @click="click">
    <p>{{ date }}</p>
    <h4>{{ title }}</h4>
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
    title: {
      type: String,
      default: "title is not defined",
    },
    date: {
      type: String,
      default: "2021/09/06",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  text-align: left;
  width: calc(100% - 32px);
  height: 92px;
  border-bottom: 1px solid #757575;
  margin: 16px;
}
p,
h4 {
  font-size: 1.6rem;
}
p {
  color: #757575;
}
h4 {
  margin-top: 16px;
  margin-bottom: 32px;
}
</style>
