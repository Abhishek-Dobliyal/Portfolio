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
        <div class="col">
          <StatsCard
            subTitle="Visitors Count"
            textColor="seagreen"
            :data="visitors_cnt"
            title="Total"
          >
          </StatsCard>
        </div>
        <div class="col">
          <StatsCard
            subTitle="Most Viewed Tab"
            textColor="yellow"
            :data="mostViewedTab.cnt"
            :title="mostViewedTab.name"
          >
          </StatsCard>
        </div>
        <div class="col">
          <StatsCard
            subTitle="Peak Day Count"
            textColor="orange"
            :data="max_visits.cnt"
            :title="max_visits.date"
          >
          </StatsCard>
        </div>
        <div class="col">
          <StatsCard
            subTitle="Today (UTC)"
            textColor="cyan"
            :data="current_day_cnt"
            title="Visitors Count"
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
      max_visits: {},
      visitors_cnt: 0,
      mostViewedTab: { name: "", cnt: 0 },
      current_day_cnt: 0,
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
    // TODO: add watcher to update the stats in real-time rather than visiting homepage
    this.introLine = this.$store.getters.getStatisticsIntroLine;
    let stats = this.$store.getters.getStatistics;
    let currUTCDate = moment().utc().format("YYYY-MM-DD");

    this.max_visits = stats.max_visits;
    this.visitors_cnt = stats.visitors_cnt;
    this.current_day_cnt = stats.current_day_cnt[currUTCDate];

    for (const tab in stats.tab_stats) {
      if (this.mostViewedTab.cnt < stats.tab_stats[tab]) {
        this.mostViewedTab.name = this.mapper[tab];
        this.mostViewedTab.cnt = stats.tab_stats[tab];
      }
    }
  },
};
</script>
