<template>
  <div class="page-wrapper">
    <Nav />
    <div>
      <div class="inner">
        <div class="page-content">
          <Nuxt />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss">
.page-wrapper {
  position: relative;
  min-height: 100vh;
  margin: 0 auto;

  .page-content {
    width: 100%;
    min-height: 100vh;

    .inner {
      margin: 0 auto;
    }
  }
}
</style>
