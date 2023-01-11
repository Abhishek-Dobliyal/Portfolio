<template>
  <div class="container text-center mt-4">
    <div class="row g-1">
      <span class="lead greet">{{ subTitle }}</span>
      <span ref="name" class="display-3 name">{{ title }}</span>
      <div class="container py-2" v-if="showTypeWriterEffect">
        <span class="lead" style="color: slategrey">I am</span>
        <vue-writer
          :array="typewriterText"
          class="type-writer-text"
          :typeSpeed="75"
          :eraseSpeed="50"
        ></vue-writer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    showTypeWriterEffect: Boolean,
    typewriterText: Array,
    subTitle: String,
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
    };
  },
  mounted() {
    setInterval(() => {
      let gradients = this.linearGradients;
      let keys = Object.keys(gradients);
      let randomGradient = gradients[keys[(keys.length * Math.random()) << 0]];
      if (this.$refs.name) {
        this.$refs.name.style["background"] = randomGradient;
        this.$refs.name.style["-webkit-background-clip"] = "text";
        this.$refs.name.style["-webkit-text-fill-color"] = "transparent";
      }
    }, 850);
  },
};
</script>

<style scoped>
.greet {
  color: slategray;
}
.type-writer-text {
  color: whitesmoke;
}
.name {
  color: aquamarine;
}
</style>
