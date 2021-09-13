<template>
  <div class="footer-pb">
    <app-header text="募集ページ" />
    <div class="seek">
      <title-bar title="日時指定" />
      <title-bar title="お店指定" />
      <title-bar title="募集メッセージ" />
    </div>
    <app-footer selected="1" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import TitleBar from "../components/TitleBar.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    TitleBar,
  },
  data() {
    return {
      selected: 1,
    };
  },
  methods: {
    btn1Click() {
      this.selected = 1;
    },
    btn2Click() {
      this.selected = 2;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/home.scss";
</style>
