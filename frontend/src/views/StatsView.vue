<template>
  <div class="container">
    <Header title="Statistics" subTitle="Decoding the"></Header>
    <div class="container my-3 py-1">
      <p class="lead intro-line">{{ this.introLine }}</p>
    </div>
    <hr />
    <div class="container my-2 py-1 overflow-hidden">
      <div
        class="row text-center justify-content-center align-content-center g-4 my-3 pb-2"
      >
        <div class="col col-md-6">
          <StatsCard
            subTitle="Visitors"
            textColor="seagreen"
            :data="visitors_cnt"
            title="Total"
            :animationSpeed="45"
          >
          </StatsCard>
        </div>
        <div class="col col-md-6">
          <StatsCard
            subTitle="Most Viewed"
            textColor="pink"
            :data="mostViewedTab.cnt"
            :title="mostViewedTab.name"
            :animationSpeed="60"
          >
          </StatsCard>
        </div>
        <div class="col col-md-6">
          <StatsCard
            subTitle="Peak Day"
            textColor="orange"
            :data="max_visits.cnt"
            :title="max_visits.date"
            :animationSpeed="60"
          >
          </StatsCard>
        </div>
        <div class="col col-md-6">
          <StatsCard
            subTitle="Today (UTC)"
            textColor="cyan"
            :data="current_day_cnt"
            title="Visitors"
            :animationSpeed="100"
          >
          </StatsCard>
        </div>
        <div class="col col-md-6">
          <StatsCard
            subTitle="Connection"
            textColor="violet"
            :data="connect_attempt_cnt"
            title="Attempted"
            :animationSpeed="130"
          >
          </StatsCard>
        </div>
        <div class="col col-md-6">
          <StatsCard
            subTitle="Avg. Session"
            textColor="salmon"
            :data="avg_session_secs"
            title="Seconds"
            :animationSpeed="55"
          >
          </StatsCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import StatsCard from "@/components/StatsCard.vue";

import moment from "moment";

export default {
  name: "StatsView",
  components: {
    Header,
    StatsCard,
  },
  data() {
    return {
      introLine: "",
      max_visits: { date: moment.utc().format("YYYY-MM-DD"), cnt: 0 },
      visitors_cnt: 0,
      mostViewedTab: { name: "", cnt: 0 },
      current_day_cnt: 0,
      connect_attempt_cnt: 0,
      avg_session_secs: 0,
      mapper: {
        skills: "Technical Skills",
        profiles: "Profiles",
        about: "About Me",
        projects: "Projects",
        experience: "Work Experience",
        statistics: "Statistics",
      },
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getStatisticsIntroLine;

    let stats = this.$store.getters.getStatistics;
    let currUTCDate = moment().utc().format("YYYY-MM-DD");

    this.max_visits = stats.max_visits;
    this.visitors_cnt = stats.visitors_cnt;
    this.connect_attempt_cnt = stats.connect_attempt_cnt;
    this.current_day_cnt = stats.current_day_cnt[currUTCDate];
    this.avg_session_secs = stats.avg_session_seconds;

    for (const tab in stats.tab_stats) {
      if (this.mostViewedTab.cnt < stats.tab_stats[tab]) {
        this.mostViewedTab.name = this.mapper[tab];
        this.mostViewedTab.cnt = stats.tab_stats[tab];
      }
    }
  },
};
</script>
