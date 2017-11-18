// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Buefy from 'buefy'
import * as VueGoogleMaps from 'vue2-google-maps'
import mapboxgl from 'mapbox-gl'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBsv3vHOsYUyrmZPU1rKEYkG_ZrXiTIVSM',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

window.mapboxgl = mapboxgl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
