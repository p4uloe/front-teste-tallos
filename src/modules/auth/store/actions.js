// import services from '@/http'
import services from '@/http'
import * as storage from '../storage'
import * as types from './mutations-types'

export const ActionLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    const data = res.body.token
    const dataArray = data.split('.')

    dispatch('ActionSetUser', JSON.parse(atob(dataArray[1])))
    dispatch('ActionSetToken', res.body.token)
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    try {
      services.auth.loadSession().then(res => {
        dispatch('ActionSetUser', res.body)

        resolve()
      }).catch((err) => {
        reject(err)
      })
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  console.log(payload)
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}
