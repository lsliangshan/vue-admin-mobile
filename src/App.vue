<template>
  <div id="app">
    <router-view class="view"></router-view>
    <ls-footer></ls-footer>
  </div>
</template>

<script>
  import lsFooter from './components/parts/footer.vue'
  export default {
    name: 'app',
    components: {
      lsFooter
    }
  }
</script>

<style scoped lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
