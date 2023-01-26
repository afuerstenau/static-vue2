<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const kundendaten = ref(null);
onMounted(() => {
  axios
    .get(
      "https://meintest.green-planet-energy.de/p1?method=bestaetigeVertrag&token=TestAFU123",
      {
        crossDomain: true,
        withCredentials: false,
      }
    )
    .then((response) => {
      console.log(response);
      console.log(kundendaten);
    });
});
</script>

<script>
export default {
  name: "HomeView",
  props: ["token", "kundendaten"],
};
</script>

<template>
  <div class="home">
    Das Token ist {{ token }} Kundendaten: {{ kundendaten }}
  </div>
</template>
