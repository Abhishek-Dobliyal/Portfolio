<template>
  <div class="container">
    <Header subTitle="Explore my" title="Profiles"></Header>
    <div class="container my-3 py-2">
      <p class="lead">
        {{ introLine }}
      </p>
    </div>
    <hr>
    <div class="row gx-5 gy-3 p-3">
      <div class="col text-center">
        <ProfileCard
          icon="leetcode.png"
          title="Leetcode"
          :data="this.$store.getters.getLeetcodeProfile"
          :url="leetcodeUrl"
        ></ProfileCard>
        <ProfileCard
          icon="github.png"
          title="Github"
          :data="this.$store.getters.getLeetcodeProfile"
        ></ProfileCard>
      </div>
      <div class="col text-center mt-3">
        <ProfileCard
          icon="hackerrank.png"
          title="Hackerrank"
          :data="this.$store.getters.getLeetcodeProfile"
          :url="leetcodeUrl"
        ></ProfileCard>
        <ProfileCard
          icon="code.jpeg"
          title="CodeStudio"
          :data="this.$store.getters.getLeetcodeProfile"
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
      leetcodeUrl: "https://google.com",
      hackerrankUrl: "",
      githubUrl: "",
      codeStudioUrl: "",
    };
  },
  mounted() {
    this.introLine = this.$store.getters.getProfilesIntroLine;
  },
};
</script>
