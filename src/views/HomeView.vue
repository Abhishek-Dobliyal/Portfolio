<template>
  <div class="container mt-xxl-5">
    <Header
      :showTypeWriterEffect="true"
      :typewriterText="typewriterText"
      title="Abhishek Dobliyal"
      subTitle="Greetings from"
    ></Header>
    <div class="container my-2 py-1 overflow-hidden">
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
            infoCardIconColor="#70cf8a"
            infoCardBody="Work Experience"
            :showIcon="true"
            @click="displayExperience"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-gears"
            infoCardIconColor="#a3e3dc"
            infoCardBody="Technical Skills"
            :showIcon="true"
            @click="displaySkills"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-laptop-code"
            infoCardIconColor="#5fadde"
            infoCardBody="Projects"
            :showIcon="true"
            @click="displayProjects"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-image-portrait"
            infoCardIconColor="#bf5e9b"
            infoCardBody="Resume"
            :showIcon="true"
            @click="displayResume"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardIcon="fa-solid fa-chart-pie"
            infoCardIconColor="#eb607a"
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
        "a Software Engineer @Uber",
        "an Ex - Sofware Engineer Intern @Zuma (YC'21)",
        "an Ex - Software Engineer Intern @Uber",
        "a Ex - Research Intern @Samsung (SRIB)",
        "exploring Data & Backend",
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
