import Vue from 'vue'
import App from './App.vue'

import VueTimeago from 'vue-timeago'
import VueRouter from 'vue-router'
import Vuex from 'vuex' 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Todo from './components/Todo'
import TodoCompleted from './components/TodoCompleted'
import TodoImportant from './components/TodoImportant'
import ContohVuex from './components/ContohVuex'



Vue.config.productionTip = false


Vue.use(VueTimeago, {
  locale : 'en'
})
Vue.use(VueRouter)
Vue.use(Vuex)


const router = new VueRouter({
  routes : [
    {name : 'all' , path : '/' , component : Todo},
    {name : 'completed' , path : '/completed' , component : TodoCompleted},
    {name : 'important' , path : '/important' , component : TodoImportant},
    {name : 'contoh-vuex' , path : '/contoh-vuex1' , component : ContohVuex},
  ]
  
})

const store = new Vuex.Store({
  state : {
      counter : 0
  },
  mutations : {
    incrementCounter(state){
        state.counter = state.counter+1
        // state.counter++
    }
  }

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
