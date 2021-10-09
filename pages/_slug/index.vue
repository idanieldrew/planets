<template>
  <div>
    <Single :title="allPlanets.title" :description="allPlanets.description"
            :image="allPlanets.image"/>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
import Single from "../../components/Planet/Single";

export default {
  components: {
    Single
  },
  methods: {
    ...mapActions("post", ["fetchPlanet"]),
  },

  mounted() {
    this.fetchPlanet(this.$route.params.slug)
  },

  computed: {
    ...mapGetters("post", ["allPlanets"]),
  },
};
</script>
