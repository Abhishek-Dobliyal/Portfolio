<template>
  <div class="bg-dark rounded-2 p-2 text-center mx-auto m-3 card">
    <span class="lead text-white my-2">{{ title }}</span>
    <div class="container">
      <a :href="url">
        <img
          :src="require(`@/assets/img/${icon}`)"
          alt=""
          width="64"
          height="64"
          class="img-fluid rounded-2"
        />
      </a>
    </div>
    <div class="container my-2">
      <ul class="list-unstyled my-2">
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
export default {
  name: "ProfileCard",
  props: {
    icon: String,
    title: String,
    data: Object,
    url: String,
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
  border: 1px solid slategraycard;
}

li {
  list-style: none;
}
</style>
