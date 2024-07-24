import { createRouter, createWebHistory } from "vue-router";
import * as Vue from "vue";
import store from "@/store";
import moment from "moment";

import AboutMeView from "../views/AboutMeView.vue";
import HomeView from "../views/HomeView.vue";
import WorkExperienceView from "../views/WorkExperienceView.vue";
import SkillsView from "../views/SkillsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProfilesView from "../views/ProfilesView.vue";
import StatsView from "../views/StatsView.vue";

const DEFAULT_TITLE = "Portfolio";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-me",
    name: "about",
    component: AboutMeView,
  },
  {
    path: "/work-experience",
    name: "experience",
    component: WorkExperienceView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/profiles",
    name: "profiles",
    component: ProfilesView,
  },
  {
    path: "/statistics",
    name: "statistics",
    component: StatsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from_) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ?? DEFAULT_TITLE;
  });

  let currStats = structuredClone(store.getters.getStatistics);
  let currUTCDate = moment().utc().format("YYYY-MM-DD");

  if (Object.keys(currStats).length == 0) {
    await store.dispatch("fetchStatistics");
    currStats = structuredClone(store.getters.getStatistics);

    // Update total visitors count
    if (from_.name === undefined && to.name == "home") {
      currStats["visitors_cnt"]++;
      // Update current day visitor count
      currStats["current_day_cnt"][currUTCDate]++;
    }

    store.commit("setStatistics", currStats);
    return;
  }
  // Update tab-wise stats
  if (to.name != "home") {
    currStats["tab_stats"][to.name]++;
  }
  // Update maximum visits
  if (currStats["max_visits"].cnt < currStats["current_day_cnt"][currUTCDate]) {
    currStats["max_visits"].cnt = currStats["current_day_cnt"][currUTCDate];
    currStats["max_visits"].date = currUTCDate;
  }

  store.commit("setStatistics", currStats);
  store.dispatch("updateStatistics");
});

export default router;
