<template>
  <div class="page">
    <div class="container-fluid p-4">
      <h2>Funcionários</h2>

      <hr>

      <div class="row p-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th class="text-center">Setor</th>
              <th class="text-center">E-mail</th>
              <th class="text-center" v-if="roleReader">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr
              :key="user_register._id"
              v-for="user_register in users"
            >
              <td>{{ user_register.name }}</td>
              <td class="text-center">{{ user_register.sector && firstUpperCase(user_register.sector) }}</td>
              <td class="text-center">{{ user_register.username }}</td>
              <td class="text-center" v-if="roleReader">
                <button class="btn btn-sm btn-info" v-if="roleReader">
                  <router-link
                    class="detalhes"
                    :to="{ name: 'show-user', params: { id: user_register._id } }"
                  >
                    Detalhar
                  </router-link>
                </button>

                <button class="btn btn-sm btn-success" style="margin-left: 5px" v-if="roleEditor">
                  <router-link
                    class="detalhes"
                    :to="{ name: 'edit-user', params: { id: user_register._id } }"
                  >
                    Editar
                  </router-link>
                </button>

                <button class="btn btn-sm btn-danger" style="margin-left: 5px" v-if="roleAdmin" @click.prevent="deleteUser(user._id)">
                  Deletar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Users',

  mounted () {
    this.ActionFindUsers()
  },

  computed: {
    ...mapState('users', ['users']),
    ...mapState('auth', ['user']),

    roleReader: function () {
      return ['admin', 'editor', 'leitor'].includes(this.user.role)
    },

    roleEditor: function () {
      return ['admin', 'editor'].includes(this.user.role)
    },

    roleAdmin: function () {
      return ['admin'].includes(this.user.role)
    }
  },

  methods: {
    ...mapActions('users', ['ActionFindUsers', 'ActionDeleteUser']),

    deleteUser: async function (id) {
      try {
        if (id) {
          await this.ActionDeleteUser(id)
          window.alert('Deletado com sucesso')
        }

        return this.ActionFindUsers()
      } catch (err) {
        console.log(err)
        alert(err.data ? err.data.message : 'Não foi possível deletar o funcionário')
      }
    },

    firstUpperCase: function (work) {
      return work[0].toUpperCase() + work.substr(1).toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
 * {
    font-family: 'Source Sans Pro', sans-serif;
  }
  .detalhes {
    text-decoration: none;
    color: white;
  }
</style>
