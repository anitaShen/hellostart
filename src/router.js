import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import store from './store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{auth:true},//受保护的页面，必须登录才能看的到
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
});
//守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    //需要验证，则检查令牌
    if(store.state.token){
      next();
    }else{
    //去登陆
      next({
        path:'/login',
        query:{redirect:to.path}
      })
    }
  }else{
    next();

  }
})
export default router;
