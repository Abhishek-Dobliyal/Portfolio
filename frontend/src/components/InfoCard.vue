<template>
  <div class="container">
    <div class="row text-center justify-content-center">
      <button class="btn p-4 rounded-3 bg-dark">
        <i
          :class="`${infoCardIcon} fa-4x`"
          :style="`color: ${infoCardIconColor}`"
          v-if="showIcon"
        ></i>
        <img
          :src="require(`@/assets/img/${imageName}`)"
          class="rounded-3"
          alt="No Image"
          width="64"
          height="64"
          v-else
        />
      </button>
      <span class="mt-2"> {{ infoCardBody }} </span>
      <SkillsRatings v-if="!showIcon" :ratings="ratings"></SkillsRatings>
    </div>
  </div>
</template>

<script>
import SkillsRatings from "@/components/SkillRatings.vue";

export default {
  name: "InfoCard",
  props: {
    infoCardIcon: String,
    infoCardBody: String,
    infoCardIconColor: String,
    showIcon: Boolean,
    imageName: String,
    ratings: Number,
  },

  components: {
    SkillsRatings,
  },
};
</script>

<style scoped>
span {
  color: aliceblue;
}

.btn {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
}
.btn:hover {
  top: -10px;
  border: 1px solid slategray;
}
</style>
