<template>
  <div>
    <Navbar />
    <nuxt-child />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>