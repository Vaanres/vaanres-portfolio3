<template>
  <b-navbar
    class="main-navbar px-0 mb-2 mt-5 mb-sm-5 flex-column flex-sm-row align-items-stretch"
    toggleable="sm"
    variant="faded"
    type="light"
  >
    <!-- <b-navbar-toggle target="nav_collapse" right></b-navbar-toggle> -->
    <b-navbar-brand class="d-flex justify-content-center p-0" href="/">
      <b-media
        no-body
        vertical-align="center"
        class="d-inline-flex align-items-center mb-5 mb-sm-0"
      >
        <b-media-aside>
          <img
            src="images/svg/Logo.svg"
            class="img-fluid mr-3"
            loading="lazy"
            alt="Van Nguyen — UX/UI Designer"
          />
        </b-media-aside>

        <b-media-body class="text-uppercase">
          <p class="m-0 font-weight-bold">Title</p>
          <p class="m-0 font-weight-light text-secondary">SubTitle</p>
        </b-media-body>
      </b-media>
    </b-navbar-brand>

    <b-navbar-nav
      class="flex-row align-items-center justify-content-center ml-sm-auto"
    >
      <li v-for="(linkItem, index) in links" :key="index" class="nav-item p-0">
        <nuxt-link
          class="nav-link text-center text-uppercase py-3 py-sm-0 px-0 px-sm-3"
          :to="linkItem.path"
          active-class="active"
          exact
          >{{ linkItem.name }}</nuxt-link
        >
      </li>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        {
          name: 'Work',
          path: '/'
        },
        {
          name: 'About',
          path: 'about'
        },
        {
          name: 'Contact',
          path: 'contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.main-navbar {
  p,
  a {
    font-size: 0.9rem;
  }

  .nav-item {
    display: flex;
    width: 100%;
    .nav-link {
      width: 100%;
      font-weight: 400;
      color: $secondary;
      transition: all 0.2s ease-in-out;

      &.active {
        color: $primary;

        &:after {
          background: $primary;
          width: 100%;
        }
      }

      &:not(.active):hover {
        color: $body-color;
      }

      &:after {
        top: 1rem;
        content: '';
        display: block;
        width: 0;
        height: 2px;
        border-radius: 2px;
        background: $body-color;
        transition: all 0.2s ease-in-out;
        position: relative;
        top: 1rem;
        @include media-breakpoint-up(sm) {
          top: 0.2rem;
        }
      }

      @media (pointer: fine) {
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
