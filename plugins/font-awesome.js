import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'

import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'

import faBehance from '@fortawesome/fontawesome-free-brands/faBehance'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'

var icons = [
  faArrowUp,
  faArrowDown,
  faExternalLinkAlt,
  faBehance,
  faTwitter,
  faLinkedinIn
]
fontawesome.library.add(...icons)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
