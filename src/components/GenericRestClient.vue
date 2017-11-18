<template><div class="generic-rest-client">

  <section class="section">
    <div class="container content">

      <h1>API Explorer</h1>

      <b-field label="url">
        <b-input v-model="url"></b-input>
      </b-field>

      <b-dropdown v-model="method">
        <button class="button is-primary" slot="trigger">
          <span>method</span>
          <b-icon icon="random"></b-icon>
        </button>

        <b-dropdown-item :value="'GET'">GET</b-dropdown-item>
        <b-dropdown-item :value="'PUT'">PUT</b-dropdown-item>
        <b-dropdown-item :value="'POST'">POST</b-dropdown-item>
        <b-dropdown-item :value="'DELETE'">DELETE</b-dropdown-item>
      </b-dropdown>

      <b-dropdown v-model="mimeType">
        <button class="button is-info" slot="trigger">
          <span>mime</span>
          <b-icon icon="envelope"></b-icon>
        </button>

        <b-dropdown-item :value="'JSON'">JSON</b-dropdown-item>
        <b-dropdown-item :value="'CSV'">CSV</b-dropdown-item>
      </b-dropdown>

      <a class="button"
        @click="onClick"
        :class="{
          'is-danger': fail,
          'is-info': busy,
          'is-success': success,
          'is-loading': busy
        }">
          {{method}} {{mimeType}} &nbsp;
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </a>

      <b-field class="inline">
        <b-input placeholder="eg"
          type="search"
          icon="search"
          v-model="attribute"
          :disabled="fail || !success"
          >
        </b-input>
        <p class="control">
          <button class="button is-warning"
            :disabled="fail || !success"
            @click="onProcess"
            >
            <span class="icon">
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </span>
            <span>process</span>
          </button>
        </p>
      </b-field>

      <a class="button is-primary-alt"
        @click="onAnalyze"
        :disabled="!processed.length"
        >
          analyze &nbsp;
          <i class="fa fa-fighter-jet" aria-hidden="true"></i>
      </a>

      <a class="button"
        :class="{
          'is-dark': proxied
        }"
        style="min-width:100px"
        @click="proxied = !proxied">
        <span v-if="proxied">proxied</span>
        <span v-if="!proxied">proxy</span>
      </a>

      <br><br>

      <b-field grouped group-multiline>
        <div v-for="(c, i) in columns" :key="i" class="control">
          <b-checkbox v-model="c.visible">
            {{ c.title }}
          </b-checkbox>
        </div>
      </b-field>

      <b-table :data="processed"
        :mobile-cards="false"
        :detailed="analyzed.length ? true : false"
        :paginated="true"
        :per-page="10"
        :pagination-simple="false"
        :default-sort-direction="'asc'"
        default-sort="columns[0]"
        >

        <template scope="props">

          <b-table-column v-for="(c, i) in columns" :key="i"
            :label="c.title"
            :visible="c.visible"
            >
            {{ props.row[c.field] }}
          </b-table-column>

        </template>

        <template scope="props" slot="detail">
          <div v-for="(c, i) in columns" :key="i" v-if="c.visible">
            <div v-for="(a, i) in analyzed"
              :key="i"
              v-if="a[c.field].value === props.row[c.field]"
              >
              <div v-if="a[c.field].type !== 'none'">
                <div v-if="a[c.field].type === 'name'" class="content">
                  <h1>
                    {{ props.row[c.field] }} &nbsp;
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </h1>
                </div>
                <div v-if="a[c.field].type === 'map'">
                  {{ props.row[c.field] }} &nbsp;
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  <br>
                  <gmap-map
                    :center="{
                      lat: a['lat'].value,
                      lng: a['lng'].value
                    }"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 100%; height: 500px"
                    >
                    <gmap-marker :position="{
                        lat: a['lat'].value,
                        lng: a['lng'].value
                      }"
                      >
                    </gmap-marker>
                  </gmap-map>
                </div>
              </div>
              <!-- <pre style="margin:5px;padding:5px">{{JSON.stringify(a, null, 2)}}</pre> -->
            </div>
          </div>
        </template>

        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon
                  icon="sentiment_very_dissatisfied"
                  size="is-large">
                </b-icon>
              </p>
              <p>Nothing here.</p>
            </div>
          </section>
        </template>

      </b-table>

      <!-- DEBUG -->
        <pre style="padding:15px;margin-top:25px;">response={{
          JSON.stringify(response, null, 2)  
        }}</pre>
        <pre style="padding:15px;margin-top:25px;">processed={{
          JSON.stringify(processed, null, 2)  
        }}</pre>
        <pre style="padding:15px;margin-top:25px;">analyzed={{
          JSON.stringify(analyzed, null, 2)  
        }}</pre>
        <pre style="padding:15px;margin-top:25px;">error={{JSON.stringify(error, null, 2)}}</pre>
        <pre style="padding:15px;margin-top:25px;">method={{method}}</pre>
        <pre style="padding:15px;margin-top:25px;">url={{url}}</pre>
        <!-- <pre style="padding:15px;margin-top:25px;">query={{query}}</pre> -->
      <!-- DEBUG -->

    </div>
  </section>

</div></template>

<script>
  import csvjson from 'csvjson'
  import ndjsonStream from 'can-ndjson-stream'
  import api from '../api/eg-api'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'generic-rest-client',
    data () {
      return {
        url: `https://data.cityofnewyork.us/api/views/kku6-nxdu/rows.csv?accessType=DOWNLOAD`,
        method: 'GET',
        mimeType: 'JSON',
        proxied: false,
        fail: false,
        error: null,
        response: {},
        attribute: ``,
        success: false,
        processed: [],
        analyzed: [],
        columns: [],
        busy: false
      }
    },
    computed: {
      ...mapGetters([

      ])
    },
    methods: {
      ...mapActions([

      ]),
      async onAnalyze () {
        this.analyzed = this.processed.map(p => {
          return { ...p }
        })
        this.analyzed = this.analyzed.map(p => {
          for (let key in p) {
            p[key] = {
              field: key,
              value: p[key],
              type: 'none'
            }
          }
          return p
        })
        this.analyzed = this.analyzed.map(p => {
          for (let key in p) {
            if (key === 'nam') {
              p[key].type = 'name'
            }
            if (key === 'lat') {
              p[key].type = 'map'
            }
            if (key === 'lng') {
              p[key].type = 'map'
            }
          }
          return p
        })
      },
      async onProcess () {
        let example
        this.processed = []
        this.columns = []
        this.analyzed = []
        if (this.attribute.length) {
          example = this.response.body[this.attribute][0]
        } else {
          example = this.response.body[0]
        }
        for (let key in example) {
          this.columns.push({
            field: key,
            title: key,
            visible: false
          })
        }
        this.columns[0].visible = true
        if (this.attribute.length) {
          this.processed = this.response.body[this.attribute]
        } else {
          this.processed = this.response.body
        }
      },
      async onClick () {
        this.busy = true
        this.error = null
        this.fail = false
        this.processed = []
        this.response = {}
        this.analyzed = []
        this.columns = []
        if (this.proxied) {
          this.response = {
            body: []
          }
          await fetch(`http://localhost:9002/v2/proxy/${this.mimeType.toLowerCase()}/${encodeURIComponent(this.url)}`)
            .then(response => ndjsonStream(response.body))
            .then(stream => {
              let read
              let reader = stream.getReader()
              reader
                .read()
                .then(read = (result) => {
                  this.success = true
                  if (result.done) {
                    this.error = null
                    this.fail = false
                    this.busy = false
                    return
                  }
                  // console.log(result)
                  this.response.body.push(result.value)
                  reader.read().then(read)
                })
            })
        } else {
          await api
            .get(this.url)
            .then(response => {
              this.response = response
              console.log(this.response)
              if (this.mimeType === 'CSV') {
                console.log(`using csv convert`)
                this.response.body = csvjson.toObject(this.response.body)
              }
              console.log(`done`)
              this.fail = false
              this.error = null
              this.success = true
              this.busy = false
            })
            .catch(e => {
              this.response = {}
              this.fail = true
              this.error = e
              this.success = true
              this.busy = false
            })
        }
      },
      async fetch () {
        this.busy = true
        await Promise.resolve()
        this.busy = false
      }
    },
    async created () {
      // await this.onClick()
      // await this.onProcess()
      // await this.onAnalyze()
    },
    mounted () {
      console.log('* Mounted GenericRestClient!')
    }
  }
</script>

<style scoped lang="sass">
  .generic-rest-client .inline
    display: inline-flex
</style>
