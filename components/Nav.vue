<template>
  <nav>
    <div class="logo">
      <a v-if="currentRoute == 'index'" v-scroll-to="'#top'">
        <!-- <img :src="" alt="" /> -->
      </a>
      <nuxt-link v-if="currentRoute != 'index'" to="/">
        <!-- <img :src="" alt="" /> -->
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { currentRoute: null };
  },

  mounted() {
    this.currentRoute = this.$route.name;
  },
  methods: {},
  watch: {
    $route(to, from) {
      this.currentRoute = to.name;
    },
  },
};
</script>
