<template>
  <div class="footer-pb">
    <app-header text="検索結果" />
    <div class="search">
      <card
        green="true"
        class="search__card"
        v-for="(post, index) in posts"
        :key="index"
        :name="post.fields.name.stringValue"
        :age="post.fields.age.stringValue"
        :time1="post.fields.time1.stringValue"
        :time2="post.fields.time2.stringValue"
        :message="post.fields.message.stringValue"
        :shop="post.fields.shop.stringValue"
        :icon="post.fields.icon.stringValue"
      />
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
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
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
