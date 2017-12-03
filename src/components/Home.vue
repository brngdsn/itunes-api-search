<template><div class="home">

  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">

        <div class="columns is-vcentered">
          <div class="column is-one-third is-left">
            <p class="title">iTunes <strong>API</strong></p>
            <p class="subtitle">Search Audio and Video</p>
          </div>

          <div class="column">

              <div>
                <div class="field is-grouped">
                  <div class="control has-icons-left is-expanded">
                    <input type="text"
                      v-model="term"
                      value=""
                      class="input is-flat required" 
                      placeholder="artist name"
                      required=""
                      aria-required="true"
                    >
                    <span class="icon is-small is-left">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                  <div class="control">
                    <input type="submit"
                      value="Search"
                      class="button is-outlined"
                      @click="onSearch"
                      :class="{
                        'is-danger': !success,
                        'is-info': busy,
                        'is-white': success,
                        'is-loading': busy
                      }"
                    >
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container content">

      <div class="columns">

        <div class="column is-one-third">
          <itunes-result v-for="(result, i) in getResults(1)"
            :key="i"
            :result="result"
          />
        </div>

        <div class="column is-one-third">
          <itunes-result v-for="(result, i) in getResults(2)"
            :key="i"
            :result="result"
          />
        </div>

        <div class="column is-one-third">
          <itunes-result v-for="(result, i) in getResults(3)"
            :key="i"
            :result="result"
          />
        </div>
      </div>

    </div>
  </section>

  <section class="hero is-light is-large">
    <div class="hero-body">
      <footer class="footer" style="height:100%;">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              by <strong><a href="http://brngdsn.github.com">brngdsn</a></strong>
              <br>
              <!-- The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>. -->
            </p>
          </div>
        </div>
      </footer>
    </div>
  </section>

</div></template>

<script>
  import ItunesResult from '@/components/ItunesResult'
  import api from '../api/eg-api'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'home',
    components: {
      ItunesResult
    },
    data () {
      return {
        term: `kaskade`,
        response: null,
        success: true,
        busy: false
      }
    },
    computed: {
      ...mapGetters([
        //
      ])
    },
    methods: {
      ...mapActions([
        //
      ]),
      getResults (position) {
        let results = []
        if (this.response) {
          results = JSON.parse(this.response.body).results
          switch (position) {
            case 1:
              results = results.filter((r, i) => {
                if ((i + 1) === 1) {
                  return true
                } else {
                  return ((i + 1) % 3 === 0)
                }
              })
              break
            case 2:
              results = results.filter((r, i) => {
                return ((i + 1) % 3 === 1)
              })
              break
            case 3:
              results = results.filter((r, i) => {
                return ((i + 1) % 3 === 2)
              })
              break
            default: results = []
          }
        } else {
          results = []
        }
        return results
      },
      async onSearch () {
        let encodedTerm = encodeURIComponent(this.term)
        this.busy = true
        await api.get(`https://itunes.apple.com/search?term=${encodedTerm}`)
          .then((response) => {
            this.response = response
            this.busy = false
            this.success = true
          })
          .catch((e) => {
            this.success = false
            this.busy = false
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
      console.log('* Mounted Home!')
      this.$watch('term', () => {
        this.response = null
      })
      this.onSearch()
    }
  }
</script>

<style scoped>
  .home {

  }
  .content figure {
    margin: 0;
    margin-right: 1rem;
  }
</style>
