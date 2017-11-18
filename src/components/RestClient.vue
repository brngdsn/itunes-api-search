<template><div class="rest-client">

  <section class="section">
    <div class="container">


      <div class="tile is-ancestor">

        <!-- tall tile -->
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input">
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- two column of tiles -->
        <div class="tile is-vertical is-8">

          <!-- one tile spanning two columns, wide -->
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <b-table :data="[{rid:0,rname:'chedduh'}]">

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
              </div>
            </article>
          </div>

        </div>

      </div>



      <!-- <div class="columns">
        <div class="column is-one-third">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>
        </div>
        <div class="column is-two-thirds">
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
        </div>
      </div> -->
    </div>
  </section>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'rest-client',
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
      console.log('* Mounted RestClient!')
    }
  }
</script>

<style scoped>
  .rest-client {

  }
</style>
