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
  attempt: 3,
  filter: {
    webp(listener, options) {
      if (listener.src && options.supportWebp) {
        var extension = listener.src.split('.').pop()
        if (extension == 'jpg' || extension == 'png') {
          var file =
            listener.src.substr(0, listener.src.lastIndexOf('.')) + '.webp'
          listener.src = file
        } else {
          return
        }
      } else {
        return
      }
    }
  }
})
