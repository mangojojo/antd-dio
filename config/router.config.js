export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/workplace' },
      {
        path: '/dashboard/workplace',
        name: '工作台',
        icon: 'dashboard',
        component: './Dashboard/Workplace',
      },
      {
        name: '个人设置',
        icon: 'user',
        path: '/account',
        component: './Account/Settings/BaseView',
      },
      {
        component: '404',
      },
    ],
  },
];
