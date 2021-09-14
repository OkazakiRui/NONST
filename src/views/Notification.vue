<template>
  <div class="footer-pb">
    <app-header text="通知" />
    <div>
      <notice title="NONSTがリリースされました。" />
      <notice @my-click="toMypage" title="プロフィールを設定してください" />
      <notice
        @my-click="toMatching"
        title="ばりしゃちくさんとマッチングしました。"
      />
      <notice
        @my-click="toMatching"
        title="オフロスキーさんとマッチングしました。"
      />
    </div>
    <app-footer selected="3" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import Notice from "../components/Notice.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    Notice,
  },
  methods: {
    toMatching() {
      this.$router.push({ path: "/Matching" });
    },
    toMypage() {
      this.$router.push({ path: "/Mypage" });
    },
  },
};
</script>
