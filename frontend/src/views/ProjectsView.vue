<template>
  <div class="container">
    <Header title="Projects" subTitle="My hands-on"></Header>
    <div class="container my-3">
      <p class="lead py-2">
        {{ introLine }}
      </p>
    </div>
    <hr />
    <div class="container text-center my-3">
      <div class="row justify-content-center py-1 g-3">
        <div class="col col-md-8">
          <ProjectCard
            :projectDescription="projectDetails.neuralStyle.desc"
            projectImg="neural-style.png"
            projectTitle="Neural Style"
            projectTitleColor="#4fb5c2"
            :projectInfo="projectDetails.neuralStyle.info"
            projectLink="https://neural-style.netlify.app/"
            projectGithub="https://www.github.com/Abhishek-Dobliyal/NeuralStyle"
          ></ProjectCard>
        </div>
        <hr />
        <div class="col col-md-8">
          <ProjectCard
            :projectDescription="projectDetails.calculationPad.desc"
            projectImg="calculation-pad.png"
            projectTitle="Calculation Pad"
            projectTitleColor="#4fc298"
            :projectInfo="projectDetails.calculationPad.info"
            projectLink="https://calculation-pad.onrender.com/"
            projectGithub="https://www.github.com/Abhishek-Dobliyal/Calculation-Pad"
          ></ProjectCard>
        </div>
        <hr />
        <div class="col col-md-8">
          <ProjectCard
            :projectDescription="projectDetails.falcon.desc"
            projectImg="falcon.png"
            projectTitle="Falcon"
            projectTitleColor="#e66079"
            :projectInfo="projectDetails.falcon.info"
            projectLink="https://falcon-ubso.onrender.com/"
            projectGithub="https://www.github.com/Abhishek-Dobliyal/Falcon"
          ></ProjectCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectsView",
  components: {
    Header,
    ProjectCard,
  },
  data() {
    return {
      introLine: "",
      projectDetails: {
        calculationPad: {},
        neuralStyle: {},
        falcon: {},
      },
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getProjectsIntroLine;
    let projectDetails = this.$store.getters.getProjectDetails;
    this.projectDetails.calculationPad = projectDetails.calculationPad;
    this.projectDetails.neuralStyle = projectDetails.neuralStyle;
    this.projectDetails.falcon = projectDetails.falcon;
    console.log(this.projectDetails);
  },
};
</script>

<style></style>
