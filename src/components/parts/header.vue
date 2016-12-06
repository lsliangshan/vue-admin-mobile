<template>
  <md-toolbar>
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title">My App</h2>
  </md-toolbar>
</template>
<style scoped lang="scss">
  /*.header {*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*width: 100%;*/
    /*height: 48px;*/
  /*}*/
</style>
<script>
  export default {
    name: 'header',
    data () {
      return {
      }
    },
    components: {
    },
    methods: {
      toggleLeftSidenav () {
        this.$parent.toggleLeftSidenav()
      },
      toggleRightSidenav () {
        this.$parent.toggleRightSidenav()
      },
      closeRightSidenav () {
        this.$parent.closeRightSidenav()
      },
      open (ref) {
        this.$parent.open(ref)
      },
      close (ref) {
        this.$parent.close(ref)
      }
    }
  }
</script>
