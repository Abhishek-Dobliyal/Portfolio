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
          listHeading="Software Engineer @Uber"
          :listItems="uberFteDetails"
          class="mt-4"
          ref="uberFteExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
      <div class="col-md-6">
        <ListGroup
          listHeading="SWE @Zuma (YC'21)"
          :listItems="zumaDetails"
          class="mt-4"
          ref="zumaExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
      <div class="col-md-6">
        <ListGroup
          listHeading="SWE Intern @Uber"
          :listItems="uberInternDetails"
          class="mt-4"
          ref="uberInternExperience"
          :showHeading="true"
        ></ListGroup>
      </div>
      <div class="col-md-6">
        <ListGroup
          listHeading="Research Intern @Samsung"
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
      uberInternDetails: {},
      samsungDetails: {},
      zumaDetails: {},
      uberFteDetails: {}
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getWorkExperienceIntroLine;
    this.uberInternDetails = this.$store.getters.getUberInternDetails;
    this.samsungDetails = this.$store.getters.getSamsungInternDetails;
    this.zumaDetails = this.$store.getters.getZumaInternDetails;
    this.uberFteDetails = this.$store.getters.getUberFTEDetails;

    let listGroupHeadingUberIntern = this.$refs.uberInternExperience.$refs.listGroupHeading;
    listGroupHeadingUberIntern.style["background-color"] = "#3942a3";
    listGroupHeadingUberIntern.style["color"] = "whitesmoke";

    let listGroupHeadingUberFte = this.$refs.uberFteExperience.$refs.listGroupHeading;
    listGroupHeadingUberFte.style["background-color"] = "#70bd66";
    listGroupHeadingUberFte.style["color"] = "whitesmoke";

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
