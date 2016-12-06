import Vue from 'vue'
import App from './App'
import router from './routers'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.material.theme.registerAll({
  default: {
    primary: 'cyan',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  teal: {
    primary: 'teal',
    accent: 'pink'
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  data: {
    tabs: [
      {
        'icon': 'ondemand_video',
        'text': '电影',
        'theme': 'indigo'
      },
      {
        'icon': 'music_note',
        'text': '音乐',
        'theme': 'brown'
      },
      {
        'icon': 'books',
        'text': '阅读',
        'theme': 'teal'
      },
      {
        'icon': 'photo',
        'text': '图片',
        'theme': 'teal'
      }
    ]
  },
  components: { App }
}).$mount('#app')
