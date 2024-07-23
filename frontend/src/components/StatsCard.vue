<template>
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="bg-dark rounded-2 p-2 text-center mx-auto m-3 card">
        <span class="display-3" :style="`color: ${textColor}`">{{ data }}</span>
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
  },
};
</script>
