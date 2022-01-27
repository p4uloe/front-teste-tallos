<template>
  <div class="page">
    <div class="container-fluid p-4">
      <h2>Novo Funcionário</h2>

      <hr />

      <div class="p-3">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-sign-in-alt"></i> Informe nos campos os dados que deseja alterar
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <p><strong>Nome:</strong> {{ oneUser.name }}</p>
                <p><strong>E-mail:</strong> {{ oneUser.username }}</p>
              </div>

              <div class="col-sm-6">
                <p><strong>Setor:</strong> {{ oneUser.sector && firstUpperCase(oneUser.sector) }}</p>
                <p><strong>Tipo de Permissão:</strong> {{ oneUser.role }}</p>
              </div>
            </div>

            <hr>

            <form @submit.prevent="submit">
              <div class="form-group mb-1">
                <label for="name">Nome</label>
                <input type="text" id="name" v-model="form.name" class="form-control"/>
              </div>

              <div class="row">
                <div class="form-group mb-1 col-6">
                  <label for="sector">Setor</label>
                  <input
                    type="text" id="sector" v-model="form.sector" class="form-control" />
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
                  <input type="email" id="username" v-model="form.username" class="form-control" />
                </div>

                <div class="form-group mb-1 col-6">
                  <label for="password">Senha</label>
                  <input type="password" id="password" v-model="form.password" class="form-control"/>
                </div>
              </div>

              <div class="form-group mt-3 mb-1">
                <input type="submit" value="Atualizar" class="btn btn-success col-12" />
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

  mounted () {
    this.ActionFindOneUser(this.$route.params.id)
  },

  computed: {
    ...mapState('users', ['oneUser'])
  },

  methods: {
    ...mapActions('users', ['ActionFindOneUser', 'ActionEditUser']),

    submit: async function () {
      try {
        this.form.id = this.$route.params.id

        this.form.name === '' && delete this.form.name
        this.form.sector === '' && delete this.form.sector
        this.form.role === '' && delete this.form.role
        this.form.username === '' && delete this.form.username
        this.form.password === '' && delete this.form.password

        await this.ActionEditUser(this.form)

        window.alert('Editado com sucesso')

        this.$router.push({ name: 'users' })
      } catch (err) {
        alert(
          err.data ? err.data.message : 'Não foi possível editar o funcionário'
        )
      }
    },

    firstUpperCase: function (work) {
      return work[0].toUpperCase() + work.substr(1).toLowerCase()
    }
  }
}
</script>
