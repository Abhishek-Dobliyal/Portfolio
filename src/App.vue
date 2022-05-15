<template>
  <transition
  enter-active-class="animate__animated animate__fadeInLeft"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: black;
}

.lead {
  color: slategray;
}

hr {
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  border: 2px solid slategray;
}

.vr {
  color: slategrey;
}
</style>
