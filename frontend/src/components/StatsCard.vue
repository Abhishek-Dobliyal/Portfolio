<template>
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="bg-dark rounded-2 p-2 text-center mx-auto m-3 card">
        <span class="display-3" :style="`color: ${textColor}`">{{
          displayDataComputed
        }}</span>
        <span class="text-white my-2">{{ title }}</span>
        <span
          class="lead text-white my-1"
          v-if="(subTitle ?? '').length > 0"
          :style="`color: ${subTitleColor}`"
          >{{ subTitle }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatsCard",
  props: {
    title: String,
    textColor: String,
    data: Number || String,
    subTitle: String,
    subTitleColor: String,
    animationSpeed: Number,
  },
  data() {
    return {
      displayData: 0,
      interval: null,
      speed: this.animationSpeed ?? 150,
    };
  },
  computed: {
    displayDataComputed() {
      if (this.displayData >= this.data) {
        clearInterval(this.interval);
      }

      if (Number.isInteger(this.displayData)) {
        return this.displayData;
      }
      return this.displayData.toFixed(2);
    },
  },
  mounted() {
    let steps = this.data / 10;
    steps = steps == 0 ? 1 : steps;
    steps = Number.isInteger(this.data) ? Math.floor(steps) : steps;
    this.interval = setInterval(() => {
      if (this.displayData < this.data) {
        this.displayData += steps;
      }
    }, this.speed);
  },
};
</script>
