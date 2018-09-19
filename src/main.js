// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button, Row, Col, Icon, Field, Swipe, SwipeItem, Lazyload} from 'vant'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Button).use(Row).use(Col).use(Icon).use(Field).use(Swipe).use(SwipeItem).use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
