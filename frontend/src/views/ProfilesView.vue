<template>
  <div class="container">
    <Header subTitle="Explore my" title="Profiles"></Header>
    <div class="container my-3 py-2">
      <p class="lead">
        {{ introLine }}
      </p>
    </div>
    <hr />
    <div class="row p-2 gy-3">
      <div class="col-md-6 text-center">
        <ProfileCard
          icon="leetcode.png"
          title="Leetcode"
          :data="leetcode.stats"
          :url="leetcode.profileUrl"
        ></ProfileCard>
        <ProfileCard
          icon="github.png"
          title="Github"
          :data="github.stats"
          :url="github.profileUrl"
        ></ProfileCard>
      </div>
      <div class="col-md-6 text-center">
        <ProfileCard
          icon="hackerrank.png"
          title="HackerRank"
          :data="hackerrank.stats"
          :url="hackerrank.profileUrl"
        ></ProfileCard>
        <ProfileCard
          icon="code.jpeg"
          title="CodeStudio"
          :data="codestudio.stats"
          :url="codestudio.profileUrl"
        ></ProfileCard>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "ProfilesView",
  components: {
    Header,
    ProfileCard,
  },
  data() {
    return {
      introLine: "",
      leetcode: {
        profileUrl: "https://leetcode.com/1nnOcent/",
        stats: {},
      },
      github: {
        profileUrl: "https://github.com/Abhishek-Dobliyal",
        stats: {},
      },
      hackerrank: {
        profileUrl: "https://www.hackerrank.com/abhishek_1512",
        stats: {},
      },
      codestudio: {
        profileUrl:
          "https://www.codingninjas.com/codestudio/profile/403a5dcc-77eb-41fb-90de-9b2d46c73de6",
        stats: {},
      },
    };
  },
  methods: {
    async fetchStats(action, platform, delay = 2000) {
      await this.$store.dispatch(action);
      setTimeout(() => {
        this[platform].stats = this.$store.getters.getProfileStats[platform];
      }, delay);
    },
  },
  mounted() {
    this.introLine = this.$store.getters.getProfilesIntroLine;
    // Fetch LC Stats
    this.fetchStats("fetchLeetcodeStats", "leetcode", 2300);
    // Fetch Github Stats
    this.fetchStats("fetchGithubStats", "github");
    // Fetch Codestudio Stats
    this.fetchStats("fetchCodestudioStats", "codestudio", 2900);
    // Fetch Hackerrank Stats
    this.fetchStats("fetchHackerrankStats", "hackerrank", 3000);
  },
};
</script>
