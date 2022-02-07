import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '$pages/home/home_page.view.vue';
import PageNotFound from '$pages/not-found/not-found_page.view.vue';
import UrlProcessor from './middlewares/router_guardian/chain_before/UrlProcessor';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  history: true,
  routes: [
    {
          path: '/',
          name: 'Home',
          component: Home,
        },
    {
      path: '/page-not-found',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  UrlProcessor.run({to, from, next});
});

export default router;
