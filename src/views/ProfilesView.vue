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
    async call(actionName) {
      let resp = await this.$store.dispatch(actionName);
      return resp.data;
    },

    async resolvePromises(promises) {
      let resolved = await promises;
      return resolved;
    },
  },
  mounted() {
    this.introLine = this.$store.getters.getProfilesIntroLine;

    this.call("fetchLeetcodeStats").then((stats) => {
      this.leetcode.stats.solved = stats.totalSolved || "N/A";
      this.leetcode.stats.acceptance = stats.acceptanceRate + " %" || "N/A";
      this.leetcode.stats.ranking = stats.ranking || "N/A";
    });

    this.call("fetchGithubStats").then((stats) => {
      this.github.stats.username = stats.login || "N/A";
      this.github.stats.followers = stats.followers || "N/A";
      this.github.stats.repositories = stats.public_repos || "N/A";
    });

    this.call("fetchCodestudioStats").then((stats) => {
      this.codestudio.stats.score = stats.data.current_level.score || "N/A";
      this.codestudio.stats.title = stats.data.current_level.name || "N/A";
      this.codestudio.stats.level = stats.data.current_level.level || "N/A";
    });

    let resolved = this.resolvePromises(
      this.$store.dispatch("fetchHackerrankStats")
    );
    resolved.then((res) => {
      let [badges, certificates] = res;

      let numBadges = 0,
        numCertificates = 0; // Badges and Certificates currently acquired

      if (badges.status != "fulfilled") {
        numBadges = "N/A";
      }
      if (certificates.status != "fulfilled") {
        numCertificates = "N/A";
      }
      if (badges.status == "fulfilled" && certificates.status == "fulfilled") {
        for (let obj of badges.value.data.models) {
          // Badges earned
          numBadges += obj.current_points > 0;
        }
        for (let obj of certificates.value.data.data) {
          // Certificates acquired
          numCertificates += obj.attributes.alloted_at !== null;
        }
      }

      this.hackerrank.stats.username = "abhishek_1512";
      this.hackerrank.stats.badges = numBadges;
      this.hackerrank.stats.certificates = numCertificates;
    });
  },
};
</script>
