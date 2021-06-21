const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
  },
  // ! Not Found 路由置于底部
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('@/views/NotFound/NotFound.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/notfound',
  },
]

export default routes
