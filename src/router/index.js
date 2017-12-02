import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RESTClient from '@/components/RESTClient'
import GenericRestClient from '@/components/GenericRestClient'
import GenericRestClientV2 from '@/components/GenericRestClientV2'
import GeoClient from '@/components/GeoClient'
import MapboxGeoClient from '@/components/MapboxGeoClient'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mapbox-geo-client',
      name: 'MapboxGeoClient',
      component: MapboxGeoClient
    },
    {
      path: '/geo-client',
      name: 'GeoClient',
      component: GeoClient
    },
    {
      path: '/generic-rest-client-v2',
      name: 'GenericRestClientV2',
      component: GenericRestClientV2
    },
    {
      path: '/generic-rest-client',
      name: 'GenericRestClient',
      component: GenericRestClient
    },
    {
      path: '/rest-client',
      name: 'RESTClient',
      component: RESTClient
    },
    // {
    //   path: '/some-resources',
    //   name: 'SomeResources',
    //   component: SomeResources
    // },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
