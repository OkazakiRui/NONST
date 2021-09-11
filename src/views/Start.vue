<template>
  <div>
    <test text="新規登録" @my-click="test" />
  </div>
</template>

<script>
import test from "../components/Button.vue";
export default {
  components: {
    test,
  },
  methods: {
    test() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/start.scss";
</style>
