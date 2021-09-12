<template>
  <div class="footer-pb">
    <div>a</div>
    <test selected="1" @my-click="test" />
  </div>
</template>

<script>
import test from "../components/AppFooter.vue";
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
