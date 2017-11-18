<template><div class="mapbox-geo-client">

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <b-field>
            <p class="control">
                <button class="button">
                    lat
                </button>
            </p>
            <b-input v-model="mapOptions.center[0]"
              placeholder="(e.g., 1)"
              type="number"
              >
            </b-input>
            <p class="control">
                <button class="button">
                    lng
                </button>
            </p>
            <b-input v-model="mapOptions.center[1]"
              placeholder="(e.g., 1)"
              type="number"
              >
            </b-input>
            <p class="control">
              <button class="button is-primary">Go</button>
            </p>
          </b-field>
        </div>
        <div class="column is-two-thirds">
          <mapbox :access-token="accessToken"
              :map-options="mapOptions"
              @map-data="onMapData"
            >
          </mapbox>
        </div>
      </div>
    </div>
  </section>

</div></template>

<script>
  import Mapbox from 'mapbox-gl-vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'mapbox-geo-client',
    components: {
      Mapbox
    },
    data () {
      return {
        mapOptions: {
          style: 'mapbox://styles/mapbox/light-v9',
          center: [-96, 37.8],
          zoom: 3
        },
        coordinates: {
          lat: 1,
          lng: 1
        },
        accessToken: 'pk.eyJ1IjoiYnJuZ2RzbiIsImEiOiJjajl2Z3JybzEwYjNzMndsZ2Vqazl5dnR5In0.tolRIeOiC2189gAqpLi9nQ',
        busy: false
      }
    },
    computed: {
      ...mapGetters([
        // some state
      ])
    },
    methods: {
      ...mapActions([
        // some action
      ]),
      onMapData (event, data) {
        console.log(data.coord)
      },
      async fetch () {
        this.busy = true
        await Promise.resolve()
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted MapboxGeoClient!')
    }
  }
</script>

<style scoped>
  .mapbox-geo-client {

  }
  #map {
    height: 500px;
    width: 100%;
  }
</style>
