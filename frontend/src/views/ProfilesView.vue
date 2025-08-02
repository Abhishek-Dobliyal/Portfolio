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
      <div class="row-md-6 text-center">
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
        <ProfileCard
          icon="chess.png"
          title="Chess.com"
          :data="chess.stats"
          :url="chess.profileUrl"
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
      chess: {
        profileUrl: "https://www.chess.com/member/1nn0c3nt",
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
    this.fetchStats("fetchLeetcodeStats", "leetcode", 1000);
    this.fetchStats("fetchGithubStats", "github");
    this.fetchStats("fetchChessStats", "chess", 1500);
  },
};
</script>
