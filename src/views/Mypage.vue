<template>
  <div class="footer-pb">
    <app-header text="マイページ" />
    <app-footer selected="4" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {},
};
</script>
