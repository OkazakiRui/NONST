<template>
  <div>
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "NO TITLE",
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  background-color: #cbe7ff;
  width: 100%;
  padding: 4px 0;
  padding-left: 32px;
  margin-bottom: 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #757575;
}
</style>
