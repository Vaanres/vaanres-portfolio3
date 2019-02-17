// https://github.com/hilongjw/vue-lazyload
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  preLoad: 2,
  attempt: 3
})
