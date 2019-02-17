<template>
  <div>
    <div class="container">
      <Header />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import '~assets/styles/core';
//@import '~assets/styles/main';

body {
  background: $gray-100;
}
</style>
