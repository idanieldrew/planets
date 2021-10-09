<template>
  <div class="bg-transparent w-full h-full px-5 py-5">
    <div
      class="
        w-auto
        h-auto
        rounded-lg
        border-2 border-black
        bg-gray-300
        text-black
      "
    >
      <div class="flex justify-center mt-2">
        <img class="w-11/12 rounded-full" :src="planetImage" loading="lazy" :alt="planetTitle"/>
      </div>

      <div class="px-3 py-5 font-extrabold">
        <nuxt-link :to="slug">
          {{ planetTitle }}
        </nuxt-link>
      </div>
      <div class="px-3 py-5 font-mono text-pink-900">{{ description }}...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planetTitle: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    planetImage: {
      required: true,
    },

    planetDescription: {
      type: String,
      required: true,
    },
  },

  computed: {
    description() {
      return this.planetDescription.substr(0, 150);
    },
  },
};
</script>
