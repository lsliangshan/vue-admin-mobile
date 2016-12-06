<template>
  <div class="footer">
    <md-bottom-bar class="md-accent" v-md-theme="'indigo'" md-shift>
      <!--<md-bottom-bar-item md-icon="ondemand_video">电影</md-bottom-bar-item>-->
      <!--<md-bottom-bar-item md-icon="music_note">音乐</md-bottom-bar-item>-->
      <!--<md-bottom-bar-item md-icon="books" md-active>阅读</md-bottom-bar-item>-->
      <!--<md-bottom-bar-item md-icon="photo">图片</md-bottom-bar-item>-->
      <md-bottom-bar-item v-for="(item, index) in tabs" :md-icon="item.icon">{{item.text}}</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>
<style scoped lang="scss">
  .footer {
    width: 100%;
    height: 56px;
    /*font-size: 14px;*/
    /*color: #c5c5c5;*/
    /*text-align: center;*/
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
<script>
  export default {
    name: 'footer',
    data () {
      return {
        tabs: this.$root.tabs
      }
    },
    components: {
    }
  }
</script>
