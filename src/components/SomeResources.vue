<template>
  <div class="some-resources">
    <section class="section">
      <div class="container">
        <b-tabs v-model="activeTab">
          <b-tab-item label="SomeResources">
            <b-table :data="someResources">

              <template scope="props">
                  <b-table-column label="RID" width="60" numeric>
                      {{ props.row.rid }}
                  </b-table-column>

                  <b-table-column label="Name">
                      {{ props.row.rname }}
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
          </b-tab-item>
        </b-tabs>
      </div>
    </section>
    <!--

example tiles with comments

      <div class="tile is-ancestor">

        <+!+-+- two column of tiles -+-+>
        <div class="tile is-vertical is-8">

          <+!+-+- two colums of tiles -+-+>
          <div class="tile">

            <+!+-+- two tiles in one column -+-+>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>

            <+!+-+- middle/mid sized tile with image -+-+>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
              </article>
            </div>

          </div>

          <+!+-+- one tile spanning two columns, wide -+-+>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <+!+-+- Content -+-+>
              </div>
            </article>
          </div>

        </div>

        <+!+-+- tall tile -+-+>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <+!+-+- Content -+-+>
              </div>
            </div>
          </article>
        </div>

      </div>


    -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'some-resources',
    data () {
      return {
        activeTab: 0
      }
    },
    computed: {
      ...mapGetters([
        'someResources'
      ])
    },
    methods: {
      ...mapActions([
        'fetchResource'
      ]),
      async fetch () {
        this.busy = true
        await this.fetchResource({
          url: '/api/v1/some-resources',
          prop: 'someResources'
        })
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted SomeResources Component!')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
