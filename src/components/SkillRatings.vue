<template>
  <div class="d-inline-flex justify-content-center align-items-center my-2">
    <i class="fa fa-star checked" v-for="rating in ratings" :key="rating"></i>
  </div>
</template>

<script>
export default {
  name: "SkillsRatings",
  props: {
    ratings: Number,
  },
};
</script>

<style scoped>
.checked {
  color: goldenrod;
}
</style>
