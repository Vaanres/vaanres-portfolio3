<template>
  <footer class="row align-items-center justify-content-center my-5">
    <div class="col-12 mb-3 d-flex align-items-center">
      <div class="socials mx-auto d-flex">
        <a
          class="social-link px-3 transition__default"
          aria-label="See me on Twitter"
          title="See me on Twitter"
          target="_blank"
          href="#"
        >
          <span class="d-block"> <font-awesome-icon :icon="iconTwitter"/></span>
        </a>
        <a
          class="social-link px-3 transition__default"
          aria-label="See me on Facebook"
          title="See me on Facebook"
          target="_blank"
          href="#"
        >
          <span class="d-block"><font-awesome-icon :icon="iconFacebook"/></span>
        </a>

        <a
          class="social-link px-3 transition__default"
          aria-label="See me on LinkedIn"
          title="See me on LinkedIn"
          target="_blank"
          href="#"
        >
          <span class="d-block">
            <font-awesome-icon :icon="iconLinkedin"
          /></span>
        </a>

        <a
          class="social-link px-3 transition__default"
          aria-label="See me on Behance"
          title="See me on Behance"
          target="_blank"
          href="#"
        >
          <span class="d-block"><font-awesome-icon :icon="iconBehance"/></span>
        </a>
      </div>
    </div>
    <div class="col-12">
      <div class="d-flex flex-column justify-content-center contact-info">
        <p class="mb-0 text-center text-secondary">
          <span style="font-weight:500">Van Nguyen</span> —
          <a
            href="mailto:vaanres@gmail.com"
            aria-label="Send an email to Van"
            title="Send an email to Van"
            >Vaanres@gmail.com</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
  faFacebookMessenger,
  faBehance,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Footer',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      tooltip: { delay: { show: 300, hide: 100 } },
      iconMessenger: faFacebookMessenger,
      iconFacebook: faFacebookF,
      iconBehance: faBehance,
      iconTwitter: faTwitter,
      iconLinkedin: faLinkedinIn
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/main';
footer {
  a {
    color: $gray-500;
    transition: all 0.25s ease-in-out;

    &:hover {
      color: $body-color;
    }
  }

  .contact-info {
    font-size: 0.8rem;
  }
}
</style>
