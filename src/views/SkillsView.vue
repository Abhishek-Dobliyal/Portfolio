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
          <InfoCard
            infoCardBody="Python"
            imageName="python.png"
            :ratings="5"
            @click="open('https://python.org')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="GoLang"
            imageName="go.png"
            :ratings="4"
            @click="open('https://go.dev/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="JavaScript"
            imageName="js.png"
            :ratings="4"
            @click="
              open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
            "
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="TypeScript"
            imageName="ts.png"
            :ratings="3"
            @click="open('https://www.typescriptlang.org/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="SQL"
            imageName="sql.png"
            :ratings="3"
            @click="open('https://www.mysql.com/')"
          ></InfoCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="container text-center my-4">
      <span class="lead row-heading">Frameworks</span>
      <div class="row my-3 g-3">
        <div class="col">
          <InfoCard
            infoCardBody="VueJS"
            imageName="vuejs.png"
            :ratings="4"
            @click="open('https://vuejs.org/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Flask"
            imageName="flask.png"
            :ratings="4"
            @click="open('https://flask.palletsprojects.com/en/2.3.x/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Bootstrap"
            imageName="bootstrap.png"
            :ratings="4"
            @click="open('https://getbootstrap.com/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="FastAPI"
            imageName="fastapi.svg"
            :ratings="3"
            @click="open('https://fastapi.tiangolo.com/lo/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="TailwindCSS"
            imageName="tailwind.png"
            :ratings="3"
            @click="open('https://tailwindui.com/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Streamlit"
            imageName="streamlit.webp"
            :ratings="4"
            @click="open('https://streamlit.io/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Keras"
            imageName="keras.png"
            :ratings="3"
            @click="open('https://keras.io/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="GoFiber"
            imageName="fiber.png"
            :ratings="3"
            @click="open('https://gofiber.io/')"
          ></InfoCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="container text-center my-4">
      <span class="lead row-heading">Databases & Additional</span>
      <div class="row my-3 g-3">
        <div class="col">
          <InfoCard
            infoCardBody="MySQL"
            imageName="mysql.png"
            :ratings="3"
            @click="open('https://www.mysql.com/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="MongoDB"
            imageName="mongodb.svg"
            :ratings="3"
            @click="open('https://www.mongodb.com/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="CSS"
            imageName="css.png"
            :ratings="3"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Git"
            imageName="git.png"
            :ratings="4"
            @click="open('https://git-scm.com/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="VueX"
            imageName="vuex.png"
            :ratings="4"
            @click="open('https://vuex.vuejs.org/')"
          ></InfoCard>
        </div>
        <div class="col">
          <InfoCard
            infoCardBody="Custom Tkinter"
            imageName="tkinter.png"
            :ratings="4"
          ></InfoCard>
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

  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.row-heading {
  color: slategrey;
}
</style>
