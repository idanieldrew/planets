<template>
  <div>
    <Main-Hero />
    <div class="app grid grid-cols-3 container text-center mx-auto my-10">
      <div v-for="planet in allPlanets" :key="planet.id">
        <Planet
          :planetTitle="planet.title"
          :planetImage="planet.image"
          :slug="planet.slug"
          :planetDescription="planet.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainHero from "@/components/Hero/MainHero.vue";
import Planet from "@/components/Planet/Planet.vue";
export default {
  middleware: ["log"],
  components: {
    MainHero,
    Planet,
  },
  loading: true,

  methods: {
    ...mapActions("post", ["fetchPlanets"]),
  },

  mounted() {
    this.fetchPlanets();
  },

  computed: {
    // this.$store.getters(['data.allPlanets'])
    ...mapGetters("post", ["allPlanets"]),
  },
};
</script>
