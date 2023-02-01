<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
const kundendaten = ref(null);
console.log("token" + this.props);
onBeforeMount(() => {
  axios
    .get(
      "https://meintest.greenpeace-energy.de/p1?method=bestaetigeVertrag&token=" +
        this.props.token,
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

<script>
export default {
  name: "HomeView",
  props: ["token"],
};
</script>

<template>
  <div class="home">
    Das Token {{ token }} ist Kundendaten: {{ kundendaten }}
  </div>
  kundendaten
</template>
