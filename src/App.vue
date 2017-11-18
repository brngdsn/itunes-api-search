<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->


    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link tag="a" class="navbar-item" to="/rest-client">
            rest-client
          </router-link>
          <router-link class="navbar-item" to="/some-resources">
            some-resources
          </router-link>
          <router-link class="navbar-item" to="/generic-rest-client">
            generic-rest-client
          </router-link>
          <router-link class="navbar-item" to="/generic-rest-client-v2">
            generic-rest-client-v2
          </router-link>
          <router-link class="navbar-item" to="/geo-client">
            geo-client
          </router-link>
          <router-link class="navbar-item" to="/mapbox-geo-client">
            mapbox-geo-client
          </router-link>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div> -->
        </div>

        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </nav>


    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
  @import '~buefy/src/scss/buefy.scss'
  @import '~buefy/src/scss/utils/_variables.scss'

  $primary-alt: #7957d5
  $less-white: whitesmoke
  $more-dark: #292929

  .is-primary-alt
    background-color: $primary-alt
    border-color: transparent
    color: #fff

  .is-dark,
  .is-dark .navbar-item
    color: $less-white
    background-color: $dark

  .is-dark .navbar-item:hover,
  .is-dark a.navbar-item.is-active
    background-color: $more-dark
    color: $less-white

  #app 
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
</style>
