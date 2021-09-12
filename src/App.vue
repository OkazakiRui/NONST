<template>
  <router-view />
  <Link v-if="false" />
</template>

<script>
import Link from "./components/Link";
export default {
  components: {
    Link,
  },
};
</script>

<style lang="scss">
@import "./scss/variables";
@import "./scss/common";
</style>
