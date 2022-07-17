<template>
  <div class="container">
    <Header subTitle="My array of" title="Technical Skills"></Header>
    <div class="container my-3">
      <p class="lead py-2">
        {{ introLine }}
      </p>
    </div>
    <hr />
    <div class="container text-center my-4">
      <span class="lead row-heading">Programming Languages</span>
      <div class="row my-3 g-3">
        <div class="col">
          <InfoCard infoCardBody="Python" imageName="python.png" :ratings="5"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="GoLang" imageName="go.png" :ratings="4"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="JavaScript" imageName="js.png" :ratings="3"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="SQL" imageName="sql.png" :ratings="3"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="Java" imageName="java.png" :ratings="3"></InfoCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="container text-center my-4">
      <span class="lead row-heading">Frameworks</span>
      <div class="row my-3 g-3">
        <div class="col">
          <InfoCard infoCardBody="VueJS" imageName="vuejs.png" :ratings="4"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="Flask" imageName="flask.png" :ratings="4"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="FastAPI" imageName="fastapi.svg" :ratings="3"></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Bootstrap"
            imageName="bootstrap.png"
            :ratings="4"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Streamlit"
            imageName="streamlit.webp"
            :ratings="4"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="Keras" imageName="keras.png" :ratings="3"></InfoCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="container text-center my-4">
      <span class="lead row-heading">Databases/Additional</span>
      <div class="row my-3 g-3">
        <div class="col">
          <InfoCard infoCardBody="MySQL" imageName="mysql.png" :ratings="3"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="MongoDB" imageName="mongodb.webp" :ratings="3"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="PysonDB" imageName="pysondb.png" :ratings="4"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="HTML" imageName="html.png" :ratings="4"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="CSS" imageName="css.png" :ratings="3"></InfoCard>
        </div>
        <div class="col">
          <InfoCard infoCardBody="Git/Github" imageName="github.png" :ratings="4"></InfoCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import Header from "@/components/Header.vue";

export default {
  name: "SkillsView",
  components: {
    InfoCard,
    Header,
  },
  data() {
    return {
      introLine: "",
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getSkillsIntroLine;
  },
};
</script>

<style scoped>
.row-heading {
  color: slategrey;
}
</style>
