export default [
  // Todos os funcionários
  {
    path: '/funcionarios',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ './Users'),
    meta: {
      showNavbar: true,
      title: 'Funcionários',
      icon: 'person'
    }
  },

  // Criar funcionário
  {
    path: '/funcionarios/cadastro',
    name: 'create-user',
    component: () => import(/* webpackChunkName: "createUser" */ './CreateUser'),
    meta: {
      showNavbar: true,
      title: 'Novo Funcionário',
      icon: 'person_add_alt'
    },
    role: [
      'admin',
      'editor'
    ]
  },

  // Detalhar funcionário
  {
    path: '/funcionarios/:id',
    name: 'show-user',
    component: () => import(/* webpackChunkName: "showUser" */ './ShowUser'),
    meta: {
      showNavbar: false,
      title: 'Detalhes do Funcionário'
    }
  },

  // Editar funcionário
  {
    path: '/funcionarios/:id/editar',
    name: 'edit-user',
    component: () => import(/* webpackChunkName: "editUser" */ './EditUser'),
    meta: {
      showNavbar: false,
      title: 'Editar Funcionário'
    }
  }
]
