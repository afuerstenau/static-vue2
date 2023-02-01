<script>
import Kundendatenservice from "@/services/Kundendatenservice.js";
export default {
  name: "HomeView",
  props: ["token"],
  data() {
    return {
      kundendaten: null,
    };
  },
  created() {
    Kundendatenservice.getKundendaten(this.token)
      .then((response) => {
        this.kundendaten = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div v-if="kundendaten" class="home">
    Das Token {{ token }} ist Kundendaten: {{ this.kundendaten }}
  </div>
  kundendaten
</template>
