<template>
  <!-- Scroll To Element Using Hash -->
  <a
    v-if="link.url.substr(0, 1) === '#'"
    v-scroll-to="{ el: link.url, offset: -50 }"
    :class="classes"
    >{{ link.title }}</a
  >

  <!-- Internal link -->
  <nuxt-link
    v-else-if="link.target != '_blank'"
    :to="link.url"
    :target="link.target"
    :class="classes"
    >{{ link.title }}</nuxt-link
  >

  <!-- External link -->
  <a v-else :class="classes" :href="link.url" :target="link.target">{{
    link.title
  }}</a>
</template>

<script>
export default {
  props: {
    link: Object,
    classes: String,
  },
};
</script>
