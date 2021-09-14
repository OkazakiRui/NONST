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
        <img src="../../public/img/card__time.svg" />{{ time1 }} 〜 {{ time2 }}
      </p>
      <p class="text">{{ message }}</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "名無し",
    },
    age: {
      type: String,
      default: "30代",
    },
    time1: {
      type: String,
      default: "00:00",
    },
    time2: {
      type: String,
      default: "00:00",
    },
    message: {
      type: String,
      default: "よろしくお願いします！",
    },
    shop: {
      type: String,
      default: "鳥貴族　天神橋三丁目店",
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
