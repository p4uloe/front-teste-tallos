import services from '@/http'
import * as types from './mutations-types'

export const ActionFindUsers = ({ commit }) => {
  services.users.findUsers().then(res => {
    commit(types.SET_USERS, res.body)
  })
}

export const ActionFindOneUser = ({ commit }, payload) => {
  services.users.findOneUser({ id: payload }).then(res => {
    commit(types.SET_ONE_USER, res.body)
  })
}

export const ActionCreateUser = (context, payload) => {
  services.users.createUser(payload)
}

export const ActionDeleteUser = (context, payload) => {
  services.users.deleteFromUsers({ id: payload })
}

export const ActionEditUser = (context, payload) => {
  services.users.updateUser({ id: payload.id }, payload)
}
