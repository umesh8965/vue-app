import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Home from "./components/Home"
import About from "./components/About"
import PostDetail from "./components/PostDetail"

Vue.use(VueRouter);
const routes=[{
    path: "/",
    name:"home", 
    component:Home
  },{
    path: "/about",
    name:"about", 
    component:About
  },{
    path: "/postdetail/:id",
    name:"postdetail", 
    component:PostDetail
  }  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
