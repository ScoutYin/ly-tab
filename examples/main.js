// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import LyTab from 'ly-tab'
console.log(LyTab)
Vue.use(LyTab)
// import {version} from 'ly-tab'
// import a from 'mint-ui'
// console.log(version)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
