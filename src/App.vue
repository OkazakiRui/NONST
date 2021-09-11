<template>
  <router-view />
  <Link />
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
