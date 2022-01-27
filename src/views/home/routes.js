export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home'),
    meta: {
      showNavbar: true,
      title: 'Home',
      icon: 'home'
    }
  }
]
