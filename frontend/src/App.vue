<template>
  <div
    class="container d-flex align-items-center justify-content-center"
    v-if="isLoading"
  >
    <PageSpinner title="Loading My Journey"></PageSpinner>
  </div>
  <transition enter-active-class="animate__animated animate__fadeInLeft" v-else>
    <router-view />
  </transition>
</template>

<script>
import moment from "moment";

import PageSpinner from "@/components/PageSpinner.vue";

export default {
  name: "App",
  components: {
    PageSpinner,
  },
  data() {
    return {
      sessionStartDate: undefined,
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoadingFlag;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchStatistics");
    this.sessionStartDate = moment.utc();

    let currStats = structuredClone(this.$store.getters.getStatistics);
    let currUTCDate = moment().utc().format("YYYY-MM-DD");
    // Update total visitors count
    currStats.visitors_cnt++;
    // Update current day visitor count
    currStats.current_day_cnt[currUTCDate]++;

    window.addEventListener("beforeunload", () => {
      let timeSpent = moment.utc().diff(this.sessionStartDate, "seconds");
      // Update Avg session time of user
      currStats.avg_session_seconds += parseFloat(
        (
          (currStats.avg_session_seconds + timeSpent) /
          currStats.visitors_cnt
        ).toFixed(2)
      );

      this.$store.commit("setStatistics", currStats);
      this.$store.dispatch("updateStatistics");
    });
  },

  beforeUnmount() {
    window.removeEventListener("beforeunload", () => {
      console.log("removed unload event");
    });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: black;
}

.lead {
  color: slategray;
}

hr {
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  border: 2px solid slategray;
}

.vr {
  color: slategrey;
}
</style>
