<template>
  <div class="row">
    <div class="col-12">
      <div class="hero p-4 p-md-5 mb-3 rounded-lg">
        <p class="hero__content text-white mb-0 font-weight-light">
          Bootstrap is an open source toolkit for developing with HTML, CSS, and
          JS. Quickly prototype your ideas or build your entire app with our
          Sass variables and mixins, responsive grid system, extensive prebuilt
          components, and powerful plugins built on jQuery.
        </p>
      </div>
    </div>
    <div class="col-12 mb-5">
      <Portfolio />
    </div>
  </div>
</template>

<script>
import Portfolio from '../components/Portfolio'
export default {
  name: 'Index',
  components: {
    Portfolio
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.hero {
  background: $primary;
  background: repeating-linear-gradient(
    45deg,
    darken($primary, 2%),
    darken($primary, 2%) 2px,
    $primary 2px,
    $primary 10px
  );

  transition: all cubic-bezier(0.19, 1, 0.22, 1);

  &__content {
    font-size: 1.2rem;
    line-height: 1.7;
    @include media-breakpoint-up(sm) {
      font-size: 1.5rem;
    }
  }
}
</style>
