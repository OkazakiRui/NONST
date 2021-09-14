<template>
  <div class="footer-pb segmented-pt">
    <app-header text="ホーム" />
    <segmented-control
      @btn1-click="btn1Click"
      @btn2-click="btn2Click"
      buttonText1="相談する"
      buttonText2="相談を聞く"
      :selected="selected"
    />
    <div class="home">
      <!-- 話す -->
      <div class="home__speak" v-if="selected == 1">
        <img
          src="../../public/img/home__speak@2x.jpg"
          class="m-0 home__30minutes"
        />
        <button2
          @my-click="toSeekPage"
          text="<span style='font-size:1.8rem;font-weight:bold;color:white;'>相談相手</span>を募集する"
        />
      </div>
      <!-- 話を聞く -->
      <div class="home__listen" v-if="selected == 2">
        <img
          src="../../public/img/home__listen@2x.jpg"
          class="m-0 home__30minutes"
        />
        <button2
          @my-click="toSearchPage"
          colorGreen="true"
          text="<span style='font-size:1.8rem;font-weight:bold;color:white;'>今日</span>相談を聞く"
        />

        <div class="f-bet m-0 home__btns">
          <button2
            @my-click="toSearchPage"
            colorGreen="true"
            half="true"
            text="<span style='font-size:1.8rem;font-weight:bold;color:white;'>明日</span>聞く"
          />
          <button2
            @my-click="toSearchPage"
            colorGreen="true"
            half="true"
            text="<span style='font-size:1.8rem;font-weight:bold;color:white;'>カレンダー</span>から"
          />
        </div>
      </div>
    </div>
    <app-footer selected="1" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import SegmentedControl from "../components/SegmentedControl.vue";
import Button2 from "../components/Button2.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    SegmentedControl,
    Button2,
  },
  data() {
    return {
      selected: 1,
    };
  },
  methods: {
    toSeekPage() {
      this.$router.push({
        path: "/SeekPage",
      });
    },
    btn1Click() {
      this.selected = 1;
    },
    btn2Click() {
      this.selected = 2;
    },
    toSearchPage() {
      this.$router.push({
        path: "/Search",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/home.scss";
</style>
