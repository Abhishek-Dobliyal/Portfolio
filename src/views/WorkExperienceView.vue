<template>
  <div class="container overflow-hidden">
    <Header subTitle="Closer look at my" title="Work Experience"></Header>
    <div class="container my-3 py-2">
      <p class="lead">
        {{ introLine }}
      </p>
    </div>
    <hr />
    <div class="row justify-content-start align-content-center gx-5">
      <div class="col-md-6">
        <ListGroup
          listHeading="Software Engineer Intern @Zuma (YC'21)"
          :listItems="zumaDetails"
          class="mt-4"
          ref="zumaExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
      <div class="col-md-6">
        <ListGroup
          listHeading="Software Engineer Intern @Uber"
          :listItems="uberDetails"
          class="mt-4"
          ref="uberExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
      <div class="col-md-6">
        <ListGroup
          listHeading="Research Intern @Samsung (SRIB)"
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
      zuma: {},
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getWorkExperienceIntroLine;
    this.uberDetails = this.$store.getters.getUberInternDetails;
    this.samsungDetails = this.$store.getters.getSamsungInternDetails;
    this.zumaDetails = this.$store.getters.getZumaInternDetails;

    let listGroupHeadingUber = this.$refs.uberExperience.$refs.listGroupHeading;
    listGroupHeadingUber.style["background-color"] = "#3942a3";
    listGroupHeadingUber.style["color"] = "whitesmoke";

    let listGroupHeadingSamsung =
      this.$refs.samsungExperience.$refs.listGroupHeading;
    listGroupHeadingSamsung.style["background-color"] = "#2f8499";
    listGroupHeadingSamsung.style["color"] = "whitesmoke";

    let listGroupHeadingZuma = this.$refs.zumaExperience.$refs.listGroupHeading;
    listGroupHeadingZuma.style["background-color"] = "#c9824b";
    listGroupHeadingZuma.style["color"] = "whitesmoke";
  },
};
</script>
