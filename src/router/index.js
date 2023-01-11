import { createRouter, createWebHistory } from "vue-router";
import * as Vue from "vue";
import AboutMeView from "../views/AboutMeView.vue";
import HomeView from "../views/HomeView.vue";
import WorkExperienceView from "../views/WorkExperienceView.vue"
import SkillsView from "../views/SkillsView.vue"
import ProjectsView from "../views/ProjectsView.vue"
import ProfilesView from "../views/ProfilesView.vue"

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, _) => {
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
