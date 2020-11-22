<template>
  <div id="app" :data-theme='nowThemeInfo'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    ...this.$axios.getters.Themes.mapState(['nowThemeInfo'])
  }
}
</script>

<style>

</style>
