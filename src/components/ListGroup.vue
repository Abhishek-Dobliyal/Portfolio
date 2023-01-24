<template>
  <div class="container ">
    <ul class="list-group rounded-3 shadow-lg py-2">
      <li
        class="list-group-item list-heading text-center"
        ref="listGroupHeading"
        v-if="showHeading"
      >
        {{ listHeading }}
      </li>
      <li
        v-for="value in listItems"
        :key="value"
        class="list-group-item p-3 text-center"
      >
        <span class="bullet">•</span> {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListGroup",
  props: {
    listHeading: String,
    listItems: Object,
    showHeading: Boolean,
  },
};
</script>

<style scoped>
li {
  list-style-type: disc !important;
  background-color: rgb(24, 22, 22);
  color: rgb(181, 171, 171);
}
.list-heading {
  background-color: #3867e8;
  color: whitesmoke;
}
.bullet {
  color: whitesmoke;
}
</style>
