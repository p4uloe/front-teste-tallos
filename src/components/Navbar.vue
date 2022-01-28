<template>
  <div class="navbar">
    <ul class="menu">
      <router-link
        exact
        :key="i"
        exact-active-class="active"
        :to="{ path: route.path }"
        v-for="(route, i) in routes"
      >
        <li>
          <i class="material-icons">{{ route.meta.icon }}</i> {{ route.meta.title }}
        </li>
      </router-link>

      <div @click="logout">
        <li>
          <i class="material-icons">logout</i> Sair
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user']),

    routes: function () {
      return this.$router.options.routes.filter(route => (
        route.meta ? route.meta.showNavbar && (route.role ? route.role.includes(this.user.role) : true) : false
      ))
    }
  },

  methods: {
    ...mapActions('auth', ['ActionSignOut']),

    logout: async function () {
      try {
        await this.ActionSignOut()
        this.$router.push({ name: 'login' })
      } catch (err) {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    font-family: 'Source Sans Pro', sans-serif;
    padding-inline-start: 0px;
  }
  .menu {
    list-style: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding-top: 30px;
    background: linear-gradient(to right, #6fc9ec, rgb(150, 171, 241));
  }
  .navbar {

    background: linear-gradient(to right, #6fc9ec, rgb(150, 171, 241));
  }
  .menu li {
    height: 60px;
    transition: .4s;
  }

  .menu li:hover {
    background-color: rgb(255, 255, 255, .1);
  }

  .menu i {
    margin: 10px;
  }

  .menu a, div {
    text-decoration: none;
    color: white;
  }

  .router-link-active li {
    background-color: rgb(255, 255, 255, .05);
  }
</style>
