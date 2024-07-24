<template>
  <div class="container text-center p-4">
    <div class="row justify-content-center align-items-center">
      <span class="lead py-2 my-3"> Connect With Me </span>

      <div class="col col-md-1 px-0">
        <a
          href="mailto: abhishek.dobliyal1512@gmail.com"
          @click="updateContacted"
          ><i class="fa-solid fa-envelope fa-2x" style="color: #bf8175"></i
        ></a>
      </div>
      <div class="col col-md-1 px-0">
        <a
          href="https://linkedin.com/in/abhishekdobliyal"
          @click="updateContacted"
          target="_blank"
          ><i class="fa-brands fa-linkedin fa-2x" style="color: #3e7eed"></i
        ></a>
      </div>
      <div class="col col-md-1 px-0">
        <a
          href="https://github.com/Abhishek-Dobliyal"
          @click="updateContacted"
          target="_blank"
          ><i class="fa-brands fa-github fa-2x" style="color: whitesmoke"></i
        ></a>
      </div>
      <div class="col col-md-1 px-0">
        <a
          href="https://t.me/lnn0c3ent"
          @click="updateContacted"
          target="_blank"
          ><i class="fa-brands fa-telegram fa-2x" style="color: #5aa3d1"></i
        ></a>
      </div>
      <div class="col col-md-1 px-0">
        <a
          href="https://www.hackerrank.com/abhishek_1512"
          @click="updateContacted"
          target="_blank"
          ><i class="fa-brands fa-hackerrank fa-2x" style="color: #5da854"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      hasConnected: false
    };
  },
  methods: {
    updateContacted() {
      let currStats = structuredClone(this.$store.getters.getStatistics);
      if (Object.keys(currStats).length == 0 || this.hasConnected) {
        return;
      }

      this.hasConnected = true;
      currStats.connect_attempt_cnt++;
      this.$store.commit("setStatistics", currStats);
    },
  },
};
</script>

<style></style>
