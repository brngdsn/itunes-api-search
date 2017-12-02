<template><div class="home">

  <section class="section">
    <div class="container content">

      <h1>iTunes API - Search Audio and Video</h1>

      <b-field label="">
        <b-input v-model="term"></b-input>
      </b-field>

      <a class="button"
        @click="onSearch"
        :class="{
          'is-danger': !success,
          'is-info': busy,
          'is-success': success,
          'is-loading': busy
        }">
          search &nbsp;
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </a>

      <br>
      <br>

      <!-- <div class="columns">
        <div class="column is-one-third">
          <div class="card"
            v-for="(result, i) in getResults(1)"
            :key="i"
            >
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="result.artworkUrl100" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="result.artworkUrl60" alt="Artist Artwork">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ result.trackName }} - {{ result.collectionName }}</p>
                  <p class="subtitle is-6">@ {{ result.artistName }}</p>
                </div>
              </div>

              <div class="content">
                <a>{{ result.wrapperType }}</a>
                <a>{{ result.kind }}</a>
                <br>
                <time :datetime="result.releaseDate">{{ result.releaseDate }}</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <div class="card"
            v-for="(result, i) in getResults(2)"
            :key="i"
            >
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="result.artworkUrl100" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="result.artworkUrl60" alt="Artist Artwork">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ result.trackName }} - {{ result.collectionName }}</p>
                  <p class="subtitle is-6">@ {{ result.artistName }}</p>
                </div>
              </div>

              <div class="content">
                <a>{{ result.wrapperType }}</a>
                <a>{{ result.kind }}</a>
                <br>
                <time :datetime="result.releaseDate">{{ result.releaseDate }}</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <div class="card"
            v-for="(result, i) in getResults(3)"
            :key="i"
            >
            <div class="card-image">
              <figure class="image">
                <img :src="result.artworkUrl100" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image">
                    <img :src="result.artworkUrl60" alt="Artist Artwork">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ result.trackName }} - {{ result.collectionName }}</p>
                  <p class="subtitle is-6">@ {{ result.artistName }}</p>
                </div>
              </div>

              <div class="content">
                <a>{{ result.wrapperType }}</a>
                <a>{{ result.kind }}</a>
                <br>
                <time :datetime="result.releaseDate">{{ result.releaseDate }}</time>
              </div>
            </div>
          </div>
        </div>
      </div> -->

<div class="columns">
        <div class="column is-one-third">
          <div class="card"
            v-for="(result, i) in getResults(1)"
            :key="i"
            >
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="result.artworkUrl100" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="result.artworkUrl60" alt="Artist Artwork">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ result.trackName }} - {{ result.collectionName }}</p>
                  <p class="subtitle is-6">@ {{ result.artistName }}</p>
                </div>
              </div>

              <div class="content">
                <a>{{ result.wrapperType }}</a>
                <a>{{ result.kind }}</a>
                <br>
                <time :datetime="result.releaseDate">{{ result.releaseDate }}</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <div class="card"
            v-for="(result, i) in getResults(2)"
            :key="i"
            >
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="result.artworkUrl100" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="result.artworkUrl60" alt="Artist Artwork">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ result.trackName }} - {{ result.collectionName }}</p>
                  <p class="subtitle is-6">@ {{ result.artistName }}</p>
                </div>
              </div>

              <div class="content">
                <a>{{ result.wrapperType }}</a>
                <a>{{ result.kind }}</a>
                <br>
                <time :datetime="result.releaseDate">{{ result.releaseDate }}</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <article class="media"
            v-for="(result, i) in getResults(1)"
            :key="i"
            >
            <figure class="media-left">
              <p class="image">
                <img :src="result.artworkUrl100">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ result.trackName }} - {{ result.collectionName }}</strong> <small>@ {{ result.artistName }}</small>
                  <div class="tags has-addons">
                    <span class="tag is-small"
                      :class="{
                        'is-info': result.wrapperType === `track`
                      }"
                      >{{ result.wrapperType }}</span>
                    <span class="tag is-small"
                      :class="{
                        'is-primary': result.kind === `song`
                      }"
                      >{{ result.kind }}</span>
                  </div>
                  <br>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div class="media-right">
              <button class="delete"></button>
            </div>
          </article>
        </div>
      </div>

      <!-- <br>
      <br>

      <pre style="padding:15px;">{{ getResults() }}</pre>

      <pre style="padding:15px;">{{ this.response }}</pre> -->

    </div>
  </section>

</div></template>

<script>
  import api from '../api/eg-api'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'home',
    data () {
      return {
        term: ``,
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
    }
  }
</script>

<style scoped>
  .home {

  }
</style>
