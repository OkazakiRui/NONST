<template>
  <div class="footer-pb segmented-pt">
    <app-header text="マッチング" />
    <segmented-control
      @btn1-click="btn1Click"
      @btn2-click="btn2Click"
      buttonText1="マッチング中"
      buttonText2="履歴"
      :selected="selected"
    />
    <div class="matching-talks">
      <matching-talk
        name="ナナテスカトリ"
        text="マッチングありがとうございます！"
      />
      <matching-talk
        name="おーちゃんねる"
        text="マッチングありがとうございます！"
      />
    </div>
    <app-footer selected="2" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import SegmentedControl from "../components/SegmentedControl.vue";
import MatchingTalk from "../components/MatchingTalk.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    SegmentedControl,
    MatchingTalk,
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
