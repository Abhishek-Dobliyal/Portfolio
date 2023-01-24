<template>
  <div class="container">
    <div class="card bg-transparent m-1 p-3 rounded-4">
      <img
        :src="require(`@/assets/img/${projectImg}`)"
        class="card-img-top border border-2 border-secondary rounded-3 shadow-lg"
        alt="No Image"
      />
      <div class="card-body">
        <h5 class="card-title" :style="`color: ${projectTitleColor}`">
          {{ projectTitle }}
        </h5>
        <p class="card-text">
          {{ projectDescription }}
        </p>
      </div>
    </div>
    <ListGroup :listItems="projectInfo"></ListGroup>
    <div
      class="container d-flex justify-content-around align-content-center my-2"
    >
      <a :href="projectLink" target="_blank"
        ><i
          class="fa-solid fa-eye fa-2x"
          :style="`color: ${projectTitleColor}`"
        ></i
      ></a>
      <a :href="projectGithub" target="_blank"
        ><i class="fa-brands fa-github fa-2x" style="color: white"></i
      ></a>
    </div>
  </div>
</template>

<script>
import ListGroup from "@/components/ListGroup.vue";

export default {
  name: "ProjectCard",
  components: {
    ListGroup,
  },
  props: {
    projectImg: String,
    projectDescription: String,
    projectLink: String,
    projectGithub: String,
    projectTitle: String,
    projectTitleColor: String,
    projectInfo: Object,
  },
  methods: {},
};
</script>

<style scoped>
.card-text {
  color: whitesmoke;
}
</style>
