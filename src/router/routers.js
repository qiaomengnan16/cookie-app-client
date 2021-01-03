export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/Register.vue'),
  },
  {
    path: '/',
    component: () => import('@/pages/Index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('@/pages/Member.vue'),
      },
      {
        path: 'illness',
        name: 'illness',
        component: () => import('@/pages/Illness.vue'),
      },
      {
        path: 'medicine',
        name: 'medicine',
        component: () => import('@/pages/Medicine.vue'),
      },
    ]
  },
]
