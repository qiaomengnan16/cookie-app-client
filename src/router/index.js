import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)
const router = new Router({
  routes,
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$EventBus.$emit('changeRoute', {to: to, from: from})
  to.query.toUrl = from.fullPath
  next()
})


export default router
