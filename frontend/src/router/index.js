import { createRouter, createWebHistory } from "vue-router";
import * as Vue from "vue";
import store from "@/store";

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

  if (store.getters.getLoadingFlag) {
    return;
  }

  let currStats = structuredClone(store.getters.getStatistics);
  // Update tab-wise stats
  if (to.name != "home") {
    currStats["tab_stats"][to.name]++;
  }

  store.commit("setStatistics", currStats);
});

export default router;
