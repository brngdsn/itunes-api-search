<template>
  <div id="app">
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
