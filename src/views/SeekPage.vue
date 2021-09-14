<template>
  <div class="footer-pb">
    <div class="seek" v-if="page == 1">
      <app-header text="募集ページ" />
      <div class="seek__dayTime">
        <title-bar title="日時指定" />
        <div class="seek__day f-alibet contents">
          <p>9/12（日）</p>
          <button>日時変更する</button>
        </div>
        <div class="seek__inputs contents f-cen shadow">
          <input type="time" value="00:00" step="00:30:00" />
          <p>〜</p>
          <input type="time" value="00:00" step="00:30:00" />
        </div>
        <p class="seek__comment contents">
          ※2時間を超える場合、追加料金が発生します。
        </p>
      </div>
      <title-bar title="お店指定" />
      <div class="seek__shopSelect">
        <button class="contents shadow">店名検索</button>
        <button class="contents seek__shopSelectBtn">
          Nonstと提携しているお店から探す
        </button>
      </div>
      <title-bar title="募集メッセージ" />
      <div class="seek__message">
        <textarea
          class="contents shadow"
          placeholder="【例】会社であった出来事を聞いてもらいたいです。（20~30文字）"
        ></textarea>
      </div>
      <button1 @my-click="verify" class="seek__btn" text="確認する" />
      <button1 class="seek__backBtn" text="戻る" />
    </div>
    <seek-verify v-if="page == 2" />
    <app-footer selected="1" />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import TitleBar from "../components/TitleBar.vue";
import Button1 from "../components/Button1.vue";
import SeekVerify from "../components/SeekVerify.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    TitleBar,
    Button1,
    SeekVerify,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    verify() {
      this.page = 2;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/seekpage.scss";
</style>
