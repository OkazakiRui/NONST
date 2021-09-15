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
          <input type="time" v-model="time1" step="00:30:00" />
          <p>〜</p>
          <input type="time" v-model="time2" step="00:30:00" />
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
          v-model="message"
        ></textarea>
      </div>
      <button1 @my-click="toVerify" class="seek__btn" text="内容を確認する" />
      <button1 @my-click="toHome" class="seek__backBtn" text="ホームに戻る" />
    </div>

    <!-- 確認 -->
    <seek-verify
      @back-click="back"
      @verify-click="verify"
      v-if="page == 2"
      :name="name"
      :age="age"
      :time1="time1"
      :time2="time2"
      :message="message"
      :shop="shop"
      :icon="icon"
    />

    <!-- 完了 -->
    <div v-if="page == 3">
      <app-header text="募集完了" />
      <button @click="toHome" class="m-0 mt64">
        <img src="../../public/img/seek__verify.svg" />
      </button>
    </div>
    <app-footer selected="1" />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import TitleBar from "../components/TitleBar.vue";
import Button1 from "../components/Button1.vue";
import SeekVerify from "../components/SeekVerify.vue";
import axios from "axios";
import axiosDB from "../axios-db";
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
      name: "",
      age: "",
      time1: "00:00",
      time2: "00:00",
      message: "",
      shop: "鳥貴族　天神橋三丁目店",
      icon: "./img/userIcon.svg",
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
    back() {
      this.page = 1;
    },
    toVerify() {
      this.page = 2;
    },
    verify() {
      axios
        .post(
          "/posts",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              age: {
                stringValue: this.age,
              },
              time1: {
                stringValue: this.time1,
              },
              time2: {
                stringValue: this.time2,
              },
              message: {
                stringValue: this.message,
              },
              shop: {
                stringValue: this.shop,
              },
              icon: {
                stringValue: this.icon,
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${this.idToken}`,
            },
          }
        )
        .then(() => {
          // 処理が終わったら
          this.name = "";
          this.age = "";
          this.time1 = "00:00";
          this.time2 = "00:00";
          this.message = "";
          this.shop = "鳥貴族　天神橋三丁目店";
          this.icon = "./img/userIcon.svg";
          this.page = 3;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    axiosDB.get(`/${localStorage.getItem("localId")}.json`).then((response) => {
      Object.keys(response.data).forEach((key) => {
        if (key == "message") {
          return;
        } else if (key == "img") {
          this.icon = response.data.img;
        } else {
          this[key] = response.data[key];
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/seekpage.scss";
</style>
