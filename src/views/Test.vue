<template>
  <div>
    <test text="メールアドレス" @my-click="test" />
  </div>
</template>

<script>
import test from "../components/InputText.vue";
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
