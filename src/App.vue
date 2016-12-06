<template>
  <div id="app">
    <ls-header></ls-header>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
    </md-sidenav>
    <router-view class="view"></router-view>
    <ls-footer></ls-footer>
  </div>
</template>

<script>
  import lsFooter from './components/parts/footer.vue'
  import lsHeader from './components/parts/header.vue'
  export default {
    name: 'app',
    components: {
      lsFooter,
      lsHeader
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      toggleRightSidenav () {
        this.$refs.rightSidenav.toggle()
      },
      closeRightSidenav () {
        this.$refs.rightSidenav.close()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      close (ref) {
        console.log('Closed: ' + ref)
      }
    }
  }
</script>

<style scoped lang="scss">
#app {
  height: 100%;
  /*display: flex;*/
  /*flex-direction: column;*/
}
</style>
