<template>
  <div class="page">
    <div class="container-fluid p-4">
      <h2>Novo Funcionário</h2>

      <hr />

      <div class="p-3">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-sign-in-alt"></i> Informe seus dados
          </div>

          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="form-group mb-1">
                <label for="name">Nome</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required/>
              </div>

              <div class="row">
                <div class="form-group mb-1 col-6">
                  <label for="sector">Setor</label>
                  <input
                    type="text" id="sector" v-model="form.sector" class="form-control" required />
                </div>

                <div class="form-group mb-1 col-6">
                  <label for="role">Permissão</label>
                  <select id="role" v-model="form.role" class="form-control">
                    <option value="admin">Administrador</option>
                    <option value="editor">Editor</option>
                    <option value="leitor">Leitor</option>
                    <option value="usuario">Usuário Comum</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="form-group mb-1 col-6">
                  <label for="username">E-mail</label>
                  <input type="email" id="username" v-model="form.username" class="form-control" required />
                </div>

                <div class="form-group mb-1 col-6">
                  <label for="password">Senha</label>
                  <input type="password" id="password" v-model="form.password" class="form-control" required />
                </div>
              </div>

              <div class="form-group mt-3 mb-1">
                <input type="submit" value="Cadastrar" class="btn btn-success col-12" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    form: {
      name: '',
      sector: '',
      role: '',
      username: '',
      password: ''
    }
  }),

  created () {
    if (!(this.roleEditor || this.roleAdmin)) {
      this.$router.push({ name: 'home' })
    }
  },

  computed: {
    ...mapState('auth', ['user']),

    roleEditor: function () {
      return ['admin', 'editor'].includes(this.user.role)
    }
  },

  methods: {
    ...mapActions('users', ['ActionCreateUser']),

    submit: async function () {
      try {
        await this.ActionCreateUser(this.form)

        window.alert('Cadastrado com sucesso')

        this.$router.push({ name: 'users' })
      } catch (err) {
        alert(
          err.data ? err.data.message : 'Não foi possível cadastrar o funcionário'
        )
      }
    }
  }
}
</script>
