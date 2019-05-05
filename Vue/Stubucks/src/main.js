// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */

const router = new VueRouter({
  routes: Routes,
  mode: 'history' // This stops us having to use # in the url
});


// Controls a whole part or a certain part of the app
new Vue({
  // Define which element is controlled - select the ID using #
  el: '#app',
  components: { App },
  router: router,
  template: '<App/>'
})
