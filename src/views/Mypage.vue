<template>
  <div class="footer-pb">
    <app-header text="マイページ" />
    <div class="mypage f-ali">
      <div class="mypage__userImgWrap f-ali">
        <img class="mypage__userImg" :src="userImg" />
        <button class="mypage__userImgButton" @click="userIconEdit">
          プロフィール写真を変更
        </button>
        <input
          class="mypage__userImgInput"
          id="userIconInput"
          type="file"
          accept="image/*"
        />
      </div>

      <div class="f-alibet mypage__details">
        <h4 class="mypage__userName">{{ userName }}</h4>
        <p class="mypage__userAgeAndLive">{{ userAge + "・" + userLive }}</p>
      </div>

      <div class="mypage__userMessage">
        <label>
          <h4 class="mypage__title">ひとこと</h4>
          <textarea :placeholder="userMessage"></textarea>
        </label>
      </div>
    </div>
    <app-footer selected="4" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  data() {
    return {
      userName: "sample 太郎",
      userAge: "30代",
      userLive: "兵庫県",
      userMessage:
        "35歳の限界社畜です。上司がうざすぎてはじめました。よろしくおねいがします。",
      userImg: "./img/userIcon.svg",
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    userIconEdit() {
      document.getElementById("userIconInput").click();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/mypage.scss";
</style>
