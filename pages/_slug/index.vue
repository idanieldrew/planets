<template>
  <div>
    <div class="container">
      {{ post.title }}
      {{ post.body }}
      <img class="object-cover" src="@/static/Images/MainHero.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: [],
    };
  },

  methods: {
    async FetchPost() {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      );
      this.post = response.data;
    },
  },

  mounted() {
    this.FetchPost();
  },
};
</script>