<template>
  <div class="container">
    <div class="ratings container">
        <i class="fa fa-star checked" v-for="rating in ratings" :key="rating"></i>
    </div>
  </div>
</template>

<script>
export default {
    name: "SkillsRatings",
    props: {
        ratings: Number
    }
}
</script>

<style scoped>
    .checked {
        color: goldenrod;
    }
</style>