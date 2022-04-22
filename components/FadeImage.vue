<template>
  <img
    v-bind:class="'fade-image ' + classes"
    v-bind:src="src"
    v-bind:srcset="srcset"
    v-bind:alt="alt"
    v-bind:height="height"
    v-bind:width="width"
    v-on:load="onLoaded"
    v-bind:style="loaded && 'opacity:1;'"
  />
</template>

<script>
export default {
  data: () => {
    return {
      loaded: false,
    };
  },
  props: {
    classes: String,
    src: String,
    srcset: String,
    alt: String,
    width: Number,
    height: Number,
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-image {
  transition: opacity 0.15s ease-in-out;
  opacity: 0;
}
</style>
