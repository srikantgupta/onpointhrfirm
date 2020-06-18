import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css' Vue.use(IconsPlugin)
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/ContactUs.vue'
import Practice from './components/industryComp.vue'






// Optionally install the BootstrapVue icon components plugin


Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(ScrollFixedHeader)
Vue.config.productionTip = false
const routes=[
  {path:'/', component:Home},
  {path:'/about', component:About},
  {path:'/contact', component:Contact},
  {path:'/industrypractice', component:Practice}

]
const router= new VueRouter({
  mode: 'history',
  routes: routes
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
