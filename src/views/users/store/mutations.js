// Altera os valores da state
import * as types from './mutations-types'

export default {
  [types.SET_USERS] (state, payload) {
    state.users = payload
  },

  [types.SET_ONE_USER] (state, payload) {
    state.oneUser = payload
  }
}
