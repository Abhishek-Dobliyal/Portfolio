<template>
  <div class="container">
    <Header
      :showTypeWriterEffect="true"
      :typewriterText="typewriterText"
      title="Abhishek Dobliyal"
      subTitle="Greetings from"
    ></Header>
    <div class="container my-3 py-2">
      <div
        class="row text-center justify-content-center align-content-center g-4 my-3 pb-2"
      >
        <div class="col">
          <InfoCard
            infoCardIcon="fa fa-circle-info"
            infoCardIconColor="#5b86e5"
            infoCardBody="About Me"
            :showIcon="true"
            @click="displayAboutMe"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa fa-briefcase"
            infoCardIconColor="#2eaba3"
            infoCardBody="Work Experience"
            :showIcon="true"
            @click="displayExperience"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-gears"
            infoCardIconColor="#b32e70"
            infoCardBody="Technical Skills"
            :showIcon="true"
            @click="displaySkills"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa fa-list-check"
            infoCardIconColor="#bf962c"
            infoCardBody="Projects"
            :showIcon="true"
            @click="displayProjects"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-image-portrait"
            infoCardIconColor="#b53ea7"
            infoCardBody="Resume"
            :showIcon="true"
            @click="displayResume"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-chart-pie"
            infoCardIconColor="#a5d164"
            infoCardBody="Profiles"
            :showIcon="true"
            @click="displayProfiles"
          ></InfoCard>
        </div>
      </div>
      <hr />
      <div class="container">
        <Contact></Contact>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import InfoCard from "@/components/InfoCard.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    InfoCard,
    Contact,
  },
  data() {
    return {
      typewriterText: [
        "an Upcoming Software Engineer @Uber",
        "an Ex - Software Engineer Intern @Uber",
        "a Former - Research Intern @Samsung",
        "a Technology Enthusiast",
      ],
    };
  },
  methods: {
    displayAboutMe() {
      this.$router.push("/about-me");
    },
    displayExperience() {
      this.$router.push("/work-experience");
    },
    displaySkills() {
      this.$router.push("/skills");
    },
    displayProjects() {
      this.$router.push("/projects");
    },
    displayResume() {
      let resumeLink = this.$store.getters.getLinkResume;
      window.open(resumeLink);
    },
    displayProfiles() {
      this.$router.push("/profiles");
    },
  },
};
</script>
