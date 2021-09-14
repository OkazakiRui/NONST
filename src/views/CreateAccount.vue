<template>
  <div>
    <app-header text="アカウント登録" />
    <div class="inputs">
      <input-text
        text="とくめい たろう"
        title="名前"
        class="inputText"
        v-model="user.name"
        @my-change="inputUpdate"
      />
      <select-options
        text="年齢を選択してください"
        title="年齢"
        :options="ages"
        class="inputText"
        v-model="user.age"
        @my-change="inputUpdate"
      />
      <select-options
        text="都道府県を選択してください"
        title="所在地"
        :options="lives"
        class="inputText"
        v-model="user.live"
        @my-change="inputUpdate"
      />
    </div>
    <Button1
      :blue="press"
      :dontPress="!press"
      class="button"
      @my-click="toHome"
      text="アカウント作成"
    />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import InputText from "../components/InputText.vue";
import SelectOptions from "../components/SelectOptions.vue";
import Button1 from "../components/Button1.vue";
export default {
  components: {
    AppHeader,
    InputText,
    SelectOptions,
    Button1,
  },
  data() {
    return {
      user: {
        name: "",
        age: "",
        live: "",
      },
      iconPath: {
        mail: "./img/mail.svg",
        password: "./img/password.svg",
      },
      press: false,
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
  methods: {
    toHome() {
      if (this.press) {
        this.$router.push({ path: "/" });
      }
    },
    inputUpdate() {
      if (this.user.name && this.user.age && this.user.live) this.press = true;
      else this.press = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/sign.scss";
</style>
