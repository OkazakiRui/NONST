<template>
  <div class="footer-pb">
    <app-header text="検索結果" />
    <div class="search">
      <card green="true" class="search__card" />
    </div>
    <app-footer selected="1" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import Card from "../components/Card.vue";
import axios from "axios";
export default {
  components: {
    AppHeader,
    AppFooter,
    Card,
  },
  created() {
    axios
      .get("/posts", {
        headers: {
          Authorization: `Bearer ${this.idToken}`,
        },
      })
      .then((respons) => {
        this.posts = respons.data.documents;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/search.scss";
</style>
