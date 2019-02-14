import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'

var icons = []
fontawesome.library.add(...icons)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
