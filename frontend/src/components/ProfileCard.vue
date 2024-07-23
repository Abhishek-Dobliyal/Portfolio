<template>
  <div
    class="bg-dark rounded-2 p-2 text-center mx-auto m-3 card"
    @click="openProfile"
  >
    <span class="lead text-white my-2">{{ title }}</span>
    <div class="container">
      <img
        :src="require(`@/assets/img/${icon}`)"
        alt=""
        width="64"
        height="64"
        class="img-fluid rounded-2"
      />
    </div>
    <div class="container my-2">
      <Spinner v-if="isLoading"></Spinner>
      <ul class="list-unstyled my-2" v-else>
        <li
          class="text-white bg-dark m-1"
          v-for="(val, key) in data"
          :key="key"
        >
          {{ key[0].toUpperCase() + key.slice(1) }}:
          <span class="lead"> {{ val }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";

export default {
  name: "ProfileCard",
  components: {
    Spinner,
  },
  props: {
    icon: String,
    title: String,
    data: Object,
    url: String,
  },
  computed: {
    isLoading() {
      return Object.keys(this.data).length == 0;
    },
  },
  methods: {
    openProfile() {
      window.open(this.url, "_blank");
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
}
.card:hover {
  top: -5px;
  border: 1px solid slategray;
  cursor: pointer;
}

li {
  list-style: none;
}
</style>
