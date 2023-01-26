<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
var kundendaten = ref(null);
onMounted(() => {
  axios
    .get(
      "https://meintest.greenpeace-energy.de/p1?method=bestaetigeVertrag&token=TestAFU123",
      {
        crossDomain: true,
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
    .then((response) => {
      console.log(response);
      kundendaten = response.data;
      console.log(kundendaten);
    });
});
</script>

<script>
export default {
  name: "HomeView",
  props: ["token"],
};
</script>

<template>
  <div class="home">
    Das Token ist {{ token }} Kundendaten: {{ kundendaten }}
  </div>
</template>
