<template>
  <div class="footer-pb">
    <app-header text="マイページ" />

    <div class="mypage f-ali" v-if="load">
      <div class="mypage__userImgWrap f-ali">
        <img class="mypage__userImg" :src="user.img" />
        <button class="mypage__userImgButton" @click="userIconEdit">
          プロフィール写真を変更
        </button>
        <input
          class="mypage__userImgInput"
          id="userIconInput"
          type="file"
          accept="image/*"
          @change="profileUpdate"
        />
      </div>

      <div class="f-alibet mypage__details">
        <h4 class="mypage__userName">{{ user.name }}</h4>
        <p class="mypage__userAgeAndLive">{{ user.age + "・" + user.live }}</p>
      </div>

      <div class="mypage__userMessage">
        <label>
          <h4 class="mypage__title">ひとこと</h4>
          <textarea
            class="mypage__textarea editArrow"
            :placeholder="user.message"
            v-model="input.message"
            @change="profileUpdate"
          ></textarea>
        </label>
      </div>

      <div class="mypage__userProfile">
        <h4 class="mypage__title">プロフィール</h4>
        <label class="f-alibet mypage__input">
          <p>名前</p>
          <input
            type="text"
            class="editArrow"
            :placeholder="user.name"
            @change="profileUpdate"
            v-model="input.name"
          />
        </label>
        <label class="f-alibet mypage__input">
          <p>年齢</p>
          <select
            class="editArrow"
            :value="user.age"
            required
            v-model="user.age"
            @change="profileUpdate"
          >
            <option v-for="(age, index) in ages" :key="index" :value="age">
              {{ age }}
            </option>
          </select>
        </label>
        <label class="f-alibet mypage__input">
          <p>所在地</p>
          <select
            class="editArrow"
            :value="user.live"
            required
            v-model="user.live"
            @change="profileUpdate"
          >
            <option disabled selected></option>
            <option v-for="(live, index) in lives" :key="index" :value="live">
              {{ live }}
            </option>
          </select>
        </label>
        <button @click="toChangePassword" class="mypage__button editArrow">
          パスワードを変更する
        </button>
        <button @click="toChangeMailaddress" class="mypage__button editArrow">
          メールアドレスを変更する
        </button>
      </div>

      <div class="mypage__logout">
        <button @click="userLogout" class="mypage__logoutBtn">
          ログアウト
        </button>
      </div>
    </div>
    <app-footer selected="4" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import axios from "../axios-db";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    userIconEdit() {
      document.getElementById("userIconInput").click();
    },
    toChangePassword() {
      this.$router.push({
        path: "/ChangePassword",
      });
    },
    toChangeMailaddress() {
      this.$router.push({
        path: "/ChangeMailaddress",
      });
    },
    userLogout() {
      this.$store.dispatch("logout");
    },
    profileUpdate(e) {
      if (this.input.name) this.user.name = this.input.name;
      if (this.input.message) this.user.message = this.input.message;

      if (e.target.files) {
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          this.user.img = reader.result;
          axios.put(`/${localStorage.getItem("localId")}.json`, {
            name: this.user.name,
            age: this.user.age,
            live: this.user.live,
            message: this.user.message,
            img: this.user.img,
          });
        };
      } else {
        axios.put(`/${localStorage.getItem("localId")}.json`, {
          name: this.user.name,
          age: this.user.age,
          live: this.user.live,
          message: this.user.message,
          img: this.user.img,
        });
      }
    },
  },
  created() {
    axios.get(`/${localStorage.getItem("localId")}.json`).then((response) => {
      Object.keys(response.data).forEach((key) => {
        this.user[key] = response.data[key];
      });
      this.load = true;
    });
  },
  data() {
    return {
      user: {
        name: "",
        age: "",
        live: "",
        message: "はじめまして！よろしくお願いします！",
        img: "./img/userIcon.svg",
      },
      input: {
        name: "",
        message: "",
      },
      load: false,
      ages: [
        "10代",
        "20代",
        "30代",
        "40代",
        "50代",
        "60代",
        "70代",
        "80代",
        "90代",
        "100歳以上",
      ],
      lives: [
        "北海道",
        "青森県",
        "岩手県",
        "宮城県",
        "秋田県",
        "山形県",
        "福島県",
        "茨城県",
        "栃木県",
        "群馬県",
        "埼玉県",
        "千葉県",
        "東京都",
        "神奈川県",
        "新潟県",
        "富山県",
        "石川県",
        "福井県",
        "山梨県",
        "長野県",
        "岐阜県",
        "静岡県",
        "愛知県",
        "三重県",
        "滋賀県",
        "京都府",
        "大阪府",
        "兵庫県",
        "奈良県",
        "和歌山県",
        "鳥取県",
        "島根県",
        "岡山県",
        "広島県",
        "山口県",
        "徳島県",
        "香川県",
        "愛媛県",
        "高知県",
        "福岡県",
        "佐賀県",
        "長崎県",
        "熊本県",
        "大分県",
        "宮崎県",
        "鹿児島県",
        "沖縄県",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/mypage.scss";
</style>
