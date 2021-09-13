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
      <div class="home__speak" v-if="selected == 1">
        <button class="m-0 home__30minutes home__30minutes--speak"></button>
        <button2
          text="<span style='font-size:1.8rem;font-weight:bold;color:white;'>相談相手</span>を募集する"
        />
      </div>
      <div class="home__listen" v-if="selected == 2">
        <button class="m-0 home__30minutes home__30minutes--listen"></button>
        <button2
          colorGreen="true"
          text="<span style='font-size:1.8rem;font-weight:bold;color:white;'>相談相手</span>を募集する"
        />
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
