<template>
  <div class="container-fluid">
    <Header />
    <nuxt />
    <Footer />
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
@import '~assets/styles/main';
</style>
