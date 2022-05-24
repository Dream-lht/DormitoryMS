const routes = [
  {
    path: '/',
    redirect: '/main',
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
