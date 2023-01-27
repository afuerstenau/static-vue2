<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
const kundendaten = ref(null);
onBeforeMount(() => {
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
      kundendaten.value = response.data;
      console.log(kundendaten);
    });
});
</script>

<template>
  <div class="home">Das Token ist Kundendaten: {{ kundendaten }}</div>
  kundendaten
</template>
