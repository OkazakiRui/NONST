<template>
  <div class="footer-pb segmented-pt">
    <app-header text="マッチング" />
    <segmented-control
      @btn1-click="btn1Click"
      @btn2-click="btn2Click"
      buttonText1="相談する"
      buttonText2="相談を聞く"
      :selected="selected"
    />
    <app-footer selected="1" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import SegmentedControl from "../components/SegmentedControl.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    SegmentedControl,
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
