<template><div class="app-container">

  app-container

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app-container',
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
      console.log('* Mounted AppContainer!')
    }
  }
</script>

<style scoped>
  .app-container {

  }
</style>
