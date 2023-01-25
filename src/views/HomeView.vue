<template>
  <div class="home">Das Token ist {{ token }}</div>
</template>

<script>
export default {
  name: "HomeView",
  props: ["token"],
};
</script>
