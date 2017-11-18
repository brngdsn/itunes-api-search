<template><div class="generic-rest-client-v2">

  <section class="section">
    <div class="container content">

      <h1>API Explorer v2</h1>

      <div class="columns">
        <div class="column is-half">

          <!-- URL -->
          <b-field label="url">
            <b-input v-model="url"></b-input>
          </b-field>

          <!-- QUERY -->
          <b-field label="query">
            <b-input v-model="query"></b-input>
          </b-field>

          <!-- METHOD -->
          <b-dropdown v-model="method">
            <button class="button is-primary" slot="trigger">
              <span>method</span>
              <b-icon icon="globe"></b-icon>
            </button>

            <b-dropdown-item :value="'GET'">GET</b-dropdown-item>
            <b-dropdown-item :value="'PUT'">PUT</b-dropdown-item>
            <b-dropdown-item :value="'POST'">POST</b-dropdown-item>
            <b-dropdown-item :value="'DELETE'">DELETE</b-dropdown-item>
          </b-dropdown>

          <!-- MIME -->
          <b-dropdown v-model="mimeType">
            <button class="button is-info" slot="trigger">
              <span>mime</span>
              <b-icon icon="envelope"></b-icon>
            </button>

            <b-dropdown-item :value="'JSON'">JSON</b-dropdown-item>
            <b-dropdown-item :value="'CSV'">CSV</b-dropdown-item>
          </b-dropdown>

          <!-- FETCH -->
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

          <br>
          <br>

          <!-- PROCESS -->
          <b-field class="inline">
            <b-input placeholder="records"
              type="search"
              icon="search"
              v-model="attribute"
              >
            </b-input>
            <p class="control">
              <button class="button is-warning"
                :disabled="fail"
                @click="onProcess"
                >
                <span class="icon">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                </span>
                <span>process</span>
              </button>
            </p>
          </b-field>

          <br><br>

          <!-- FIELD TOGGLES -->
          <b-field grouped group-multiline>
            <div v-for="(c, i) in columns" :key="i" class="control">
              <b-checkbox v-model="c.visible">
                {{ c.title }}
              </b-checkbox>
            </div>
          </b-field>

          <!-- TABLE -->
          <b-table :data="processed" :mobile-cards="false">

            <template scope="props">

              <b-table-column v-for="(c, i) in columns" :key="i"
                :label="c.title"
                :visible="c.visible"
                >
                {{ props.row[c.field] }}
              </b-table-column>

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
            <pre style="padding:15px;margin-top:25px;">error={{JSON.stringify(error, null, 2)}}</pre>
            <pre style="padding:15px;margin-top:25px;">method={{method}}</pre>
            <pre style="padding:15px;margin-top:25px;">url={{url}}</pre>
            <pre style="padding:15px;margin-top:25px;">query={{query}}</pre>
          <!-- DEBUG -->
        
        </div>

        <div class="column is-half">

          ok

        </div>

      </div>

    </div>
  </section>

</div></template>

<script>
  import api from '../api/eg-api'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'generic-rest-client-v2',
    data () {
      return {
        url: 'https://paleobiodb.org/data1.2/colls/list.json',
        query: '?base_name=Cetacea&interval=Miocene&show=ref,loc,stratext',
        method: 'GET',
        mimeType: 'JSON',
        fail: false,
        error: null,
        response: {
          'url': 'https://paleobiodb.org/data1.2/colls/list.json?base_name=Cetacea&interval=Miocene&show=ref,loc,stratext',
          'ok': true,
          'status': 200,
          'statusText': 'OK',
          'headers': {
            'map': {
              'content-type': [
                'application/json; charset=utf-8'
              ]
            }
          },
          'body': {
            'elapsed_time': 0.00238,
            'records': [
              {
                'oid': 'col:11601',
                'sfm': 'Jewett Sand',
                'lng': -118.848335,
                'lat': 35.492779,
                'nam': 'Pyramid Hill Sand Member grit zone',
                'aka': 'LACMVP Loc. 1603, 1626, 1627; UCMP Loc. V-7032',
                'noc': 3,
                'oei': 'Aquitanian',
                'eag': 23.03,
                'lag': 20.44,
                'rid': 'ref:10315',
                'ref': 'F. M. Anderson. 1911. The Neocene deposits of Kern River, California, and the Temblor Basin. Proceedings of the Califonia Academy of Sciences 3:73-148',
                'cc2': 'US',
                'stp': 'California',
                'cny': 'Kern',
                'prc': '__',
                'gsc': 'local area',
                'ggc': 'low hills in a northwest southeast trending belt between the Sierra Nevada and the area of the city of Bakersfield; LACM 1626 is in the \'center of SE1/4 of Sect 15, T 28 S, R 29 E\' (Howard 1969: basis of coordinate)',
                'smb': 'Pyramid Hill Sand',
                'ssc': 'bed',
                'scm': 'grit zone; age assignments vary; age for this collection originally listed as Chattian after Scheirer and Magoon, 2007; updated to Aquitanian after discussion in Shimada et al. 2014'
              },
              {
                'oid': 'col:12120',
                'sfm': 'Claremont Shale',
                'lng': -121.819725,
                'lat': 37.503887,
                'nam': 'Alameda Creek',
                'aka': 'V-3936',
                'noc': 1,
                'oei': 'Serravallian',
                'eag': 13.82,
                'lag': 11.62,
                'rid': 'ref:4176',
                'ref': 'J. M. Rensberger. 1969. A new iniid cetacean from the Miocene of California. University of California Publications in Geological Sciences 82:1-34',
                'cc2': 'US',
                'stp': 'California',
                'cny': 'Alameda',
                'prc': '__',
                'gsc': 'outcrop',
                'ggc': 'Alameda Creek, 8 mi southeast of Sunol, Alameda County, California. In bank of the creek, practically at the forks of Alameda and Calaveras creeks, in blocks tubled down presumably from above the creek floor. SE1/4 NW1/4, sec 13, T. 5 S, R. 1 E., La Costa Valley quadrangle, ed. of 1953.',
                'sgr': 'Monterey',
                'ssc': 'formation'
              }
            ]
          }
        },
        attribute: 'records',
        success: true,
        processed: [],
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
      async onProcess () {
        let example
        this.processed = []
        this.columns = []
        if (this.attribute.length) {
          example = this.response.body[this.attribute][0]
        } else {
          example = this.response.body[0]
        }
        for (var key in example) {
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
        this.processed = []
        await api
          .get(this.url + this.query)
          .then(response => {
            this.response = response
            this.fail = false
            this.error = null
          })
          .catch(e => {
            this.response = {}
            this.fail = true
            this.error = e
          })
        this.busy = false
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
      console.log('* Mounted GenericRestClient!')
    }
  }
</script>

<style scoped lang="sass">
  .generic-rest-client-v2 .inline
    display: inline-flex
</style>
