<template>
  <div class="container">
    <Header title="About Me" subTitle="A little"></Header>
    <div class="container my-3 py-1">
      <p class="lead intro-line">{{ this.introLine }}</p>
    </div>
    <hr>
    <ListGroup
      :listItems="bulletItems"
      listHeading="Explore More About Me"
      :showHeading="true"
      class="my-4"
    ></ListGroup>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListGroup from "@/components/ListGroup.vue";

export default {
  name: "AboutMeView",
  components: {
    Header,
    ListGroup,
  },
  data() {
    return {
      introLine: "",
      bulletItems: {},
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getAboutMeIntroLine;
    this.bulletItems = this.$store.getters.getAboutMeListPoints;
  },
};
</script>

<style scoped>
.intro-line {
  color: slategray;
}

</style>
