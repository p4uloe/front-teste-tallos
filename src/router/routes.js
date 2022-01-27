import { routes as auth } from '../modules/auth'
import { routes as home } from '../views/home'
import { routes as users } from '../views/users'

export default [
  ...auth,
  ...home,
  ...users
]
