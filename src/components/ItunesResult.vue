<template><div class="itunes-result">

  <article class="media">
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
      <div class="content">
        <audio preload="auto"
          ref="player"
          controls
          >
          <source :src="result.previewUrl" type="audio/mp4">
        </audio>
      </div>
    </div>
  </article>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'itunes-result',
    props: [
      'result'
    ],
    data () {
      return {
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
      this.$watch('result', () => this.$refs.player.load())
      console.log('* Mounted ItunesResult!')
    }
  }
</script>

<style scoped>
  .itunes-result {

  }
</style>
