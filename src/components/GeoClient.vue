<template><div class="geo-client">

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
            <b-input v-model="coordinates.lat"
              placeholder="(e.g., 1)"
              type="number"
              >
            </b-input>
            <p class="control">
                <button class="button">
                    lng
                </button>
            </p>
            <b-input v-model="coordinates.lng"
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
          <gmap-map
            :center="coordinates"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 500px"
          >
          
          </gmap-map>
        </div>
      </div>
    </div>
  </section>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'geo-client',
    data () {
      return {
        coordinates: {
          lat: 10,
          lng: 10
        },
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
      console.log('* Mounted GeoClient!')
    }
  }
</script>

<style scoped>
  .geo-client {

  }
</style>
