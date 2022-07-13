<template>
  <div class="container">
    <Header subTitle="Closer look at my" title="Work Experience"></Header>
    <div class="container my-3 py-2">
      <p class="lead">
        {{ introLine }}
      </p>
    </div>
    <hr>
    <div class="row justify-content-center align-content-center gx-5">
      <div class="col">
        <ListGroup
          listHeading="Ex - Software Engineer Intern @Uber"
          :listItems="uberDetails"
          class="mt-4"
          ref="uberExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
      <div class="col">
        <ListGroup
          listHeading="Former - Research Intern @Samsung (SRIB)"
          :listItems="samsungDetails"
          class="mt-4"
          ref="samsungExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListGroup from "@/components/ListGroup.vue";

export default {
  name: "WorkExperienceView",
  components: {
    Header,
    ListGroup,
  },
  data() {
    return {
      introLine: "",
      uberDetails: {},
      samsungDetails: {},
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getWorkExperienceIntroLine;
    this.uberDetails = this.$store.getters.getUberInternDetails;
    this.samsungDetails = this.$store.getters.getSamsungInternDetails;

    let listGroupHeadingUber = this.$refs.uberExperience.$refs.listGroupHeading;
    listGroupHeadingUber.style["background-color"] = "#3942a3";
    listGroupHeadingUber.style["color"] = "whitesmoke";

    let listGroupHeadingSamsung =
      this.$refs.samsungExperience.$refs.listGroupHeading;
    listGroupHeadingSamsung.style["background-color"] = "#2f8499";
    listGroupHeadingSamsung.style["color"] = "whitesmoke";
  },
};
</script>
