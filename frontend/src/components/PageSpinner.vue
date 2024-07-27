<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center vh-100 gap-3"
  >
    <div class="row">
      <div class="spinner-border spinner-size text-light" role="status"></div>
    </div>
    <div class="row">
      <span class="lead fs-3" ref="spinner">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageSpinner",
  props: {
    title: String,
  },
  data() {
    return {
      linearGradients: {
        roseana: "-webkit-linear-gradient(100deg, #ffafbd, ##ffc3a0)",
        blueSky: "-webkit-linear-gradient(100deg, #2193b0, #6dd5ed)",
        socialive: "-webkit-linear-gradient(100deg, #06beb6, #48b1bf)",
        almost: "-webkit-linear-gradient(100deg, #ddd6f3, #faaca8)",
        pinky: "-webkit-linear-gradient(100deg, #dd5e89, #f7bb97)",
        tranquil: "-webkit-linear-gradient(100deg, #eecda3, #ef629f)",
        endlessRiver: "-webkit-linear-gradient(100deg, #43cea2, #185a9d)",
        loveNight: "-webkit-linear-gradient(100deg, #4ca1af, #c4e0e5)",
        shoomHaze: "-webkit-linear-gradient(100deg, #5c258d, #4389a2)",
        bora: "-webkit-linear-gradient(100deg, #2bc0e4, #eaecc6)",
        juicyOrange: "-webkit-linear-gradient(100deg, #ff8008, #ffc837)",
        roseWater: "-webkit-linear-gradient(100deg, #e55d87, #5fc3e4)",
      },
      interval: undefined,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      let keys = Object.keys(this.linearGradients);
      let randomGradient =
        this.linearGradients[keys[(keys.length * Math.random()) << 0]];
      if (this.$refs.spinner) {
        this.$refs.spinner.style["background"] = randomGradient;
        this.$refs.spinner.style["-webkit-background-clip"] = "text";
        this.$refs.spinner.style["-webkit-text-fill-color"] = "transparent";
      }
    }, 600);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.spinner-size {
  width: 4rem;
  height: 4rem;
}
</style>
