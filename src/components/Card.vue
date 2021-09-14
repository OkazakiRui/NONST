<template>
  <button :class="{ 'm-0': true, shadow: true, green: green }">
    <div class="f-ali">
      <img class="icon" :src="icon" />
      <p class="name">
        {{ name }}
      </p>
      <p class="age">【{{ age }}】</p>
    </div>
    <div>
      <p class="shop f-ali">
        <img src="../../public/img/card__fork.svg" />{{ shop }}
      </p>
      <p class="time f-ali">
        <img src="../../public/img/card__time.svg" />{{ time }}
      </p>
      <p class="text">{{ text }}</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "サンプル 太郎",
    },
    age: {
      type: String,
      default: "30代",
    },
    shop: {
      type: String,
      default: "鳥貴族　天神橋三丁目店",
    },
    time: {
      type: String,
      default: "18:00 〜 20:00",
    },
    text: {
      type: String,
      default: "よろしくお願いします！",
    },
    icon: {
      type: String,
      default: "./img/userIcon.svg",
    },
    green: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: space-between;
  width: 340px;
  height: 207px;
  padding: 32px 24px;
  font-size: 1.4rem;
  border-radius: 13px;
  background-color: #e2f0fc;
  &.green {
    background-color: #ecfce2;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 190px;
  }
  .icon {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
  }
  .name {
    width: 88px;
  }
  p {
    color: #757575;
  }
  .shop,
  .time {
    img {
      margin-right: 8px;
    }
  }
  .text {
    height: 80px;
    overflow: hidden;
    text-align: left;
  }
}
</style>
