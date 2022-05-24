const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/notfound',
  },
  // ! Not Found 路由置于底部
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('@/views/NotFound/NotFound.vue'),
  },
]

export default routes
