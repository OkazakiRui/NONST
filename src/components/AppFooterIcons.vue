<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
  >
    <g
      v-if="icon == 1"
      id="グループ_113"
      data-name="グループ 113"
      transform="translate(0 -0.448)"
    >
      <rect
        id="長方形_44"
        data-name="長方形 44"
        width="30"
        height="30"
        transform="translate(0 0.448)"
        fill="none"
        stroke="none"
      />
      <g
        id="Icon_feather-home"
        data-name="Icon feather-home"
        transform="translate(5.25 3.539)"
      >
        <path
          id="パス_10"
          data-name="パス 10"
          d="M4.5,10.875,14.625,3,24.75,10.875V23.25A2.25,2.25,0,0,1,22.5,25.5H6.75A2.25,2.25,0,0,1,4.5,23.25Z"
          transform="translate(-4.5 -3)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="パス_11"
          data-name="パス 11"
          d="M13.5,29.25V18h6.75V29.25"
          transform="translate(-6.75 -6.75)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </g>
    <g
      v-if="icon == 2"
      id="グループ_114"
      data-name="グループ 114"
      transform="translate(0 -0.448)"
    >
      <rect
        id="長方形_48"
        data-name="長方形 48"
        width="30"
        height="30"
        transform="translate(0 0.448)"
        fill="none"
        stroke="none"
      />
      <path
        id="Icon_feather-message-circle"
        data-name="Icon feather-message-circle"
        d="M24.75,14.062a9.428,9.428,0,0,1-1.013,4.275,9.562,9.562,0,0,1-8.55,5.288,9.427,9.427,0,0,1-4.275-1.012L4.5,24.75l2.138-6.413a9.427,9.427,0,0,1-1.013-4.275,9.562,9.562,0,0,1,5.288-8.55A9.427,9.427,0,0,1,15.188,4.5h.562a9.54,9.54,0,0,1,9,9Z"
        transform="translate(0.375 0.164)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
    </g>
    <g
      v-if="icon == 3"
      id="グループ_116"
      data-name="グループ 116"
      transform="translate(0 -0.448)"
    >
      <rect
        id="長方形_45"
        data-name="長方形 45"
        width="30"
        height="30"
        transform="translate(0 0.448)"
        fill="none"
        stroke="none"
      />
      <g
        id="Icon_feather-bell"
        data-name="Icon feather-bell"
        transform="translate(5.25 3.539)"
      >
        <path
          id="パス_12"
          data-name="パス 12"
          d="M21.375,9.75a6.75,6.75,0,1,0-13.5,0c0,7.875-3.375,10.125-3.375,10.125H24.75s-3.375-2.25-3.375-10.125"
          transform="translate(-4.5 -3)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="パス_13"
          data-name="パス 13"
          d="M19.3,31.5a2.25,2.25,0,0,1-3.893,0"
          transform="translate(-7.226 -10.125)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </g>
    <g
      v-if="icon == 4"
      id="グループ_117"
      data-name="グループ 117"
      transform="translate(0 -0.448)"
    >
      <rect
        id="長方形_46"
        data-name="長方形 46"
        width="30"
        height="30"
        transform="translate(0 0.448)"
        fill="none"
        stroke="none"
      />
      <g
        id="Icon_feather-user"
        data-name="Icon feather-user"
        transform="translate(6 5.04)"
      >
        <path
          id="パス_14"
          data-name="パス 14"
          d="M24,29.25V27a4.5,4.5,0,0,0-4.5-4.5h-9A4.5,4.5,0,0,0,6,27v2.25"
          transform="translate(-6 -9)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="パス_15"
          data-name="パス 15"
          d="M21,9a4.5,4.5,0,1,1-4.5-4.5A4.5,4.5,0,0,1,21,9Z"
          transform="translate(-7.5 -4.5)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: Number,
      default: -1,
    },
  },
};
</script>
