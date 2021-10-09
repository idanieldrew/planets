<template>
  <div>
    <Main-Hero/>
    <div class="mt-10 container mx-auto w-1/2">
      <img class="rounded-2xl" :src="image" alt="">
      <div>
        <h1>{{ title }}</h1>
      </div>

      <div>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MainHero from "@/components/Hero/MainHero.vue";

export default {
  name: "Single",
  components: {
    MainHero
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
  }
}
</script>

<style scoped>

</style>
