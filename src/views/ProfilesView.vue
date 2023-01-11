<template>
  <div class="container">
    <Header subTitle="Explore my" title="Profiles"></Header>
    <div class="container my-3 py-2">
      <p class="lead">
        {{ introLine }}
      </p>
    </div>
    <hr />
    <div class="row p-2">
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
          :data="leetcode.stats"
        ></ProfileCard>
      </div>
      <div class="col-md-6 text-center">
        <ProfileCard
          icon="hackerrank.png"
          title="Hackerrank"
          :data="leetcode.stats"
          :url="leetcodeUrl"
        ></ProfileCard>
        <ProfileCard
          icon="code.jpeg"
          title="CodeStudio"
          :data="leetcode.stats"
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
        profileUrl: "",
        stats: null,
        isLaoding: true,
      },
      hackerrank: {
        profileUrl: "",
        stats: {},
        isLoading: true,
      },
    };
  },
  async mounted() {
    this.introLine = this.$store.getters.getProfilesIntroLine;
    let lcStats = {};
    let leetcodeStats = await this.$store.dispatch("fetchLeetcodeStats");
    let stats = await leetcodeStats.json();
    lcStats.solved = stats.totalSolved;
    lcStats.ranking = stats.ranking;
    lcStats.acceptance = stats.acceptanceRate;
    this.leetcode.stats = lcStats;
  },
};
</script>
