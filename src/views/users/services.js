export default {
  findUsers: {
    method: 'get',
    url: 'users' // users
  },

  findOneUser: {
    method: 'get',
    url: 'users{/id}'
  },

  createUser: {
    method: 'post',
    url: 'users'
  },

  deleteFromUsers: {
    method: 'delete',
    url: 'users{/id}'
  },

  updateUser: {
    method: 'patch',
    url: 'users{/id}'
  }
}
