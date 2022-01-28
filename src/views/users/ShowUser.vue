<template>
  <div class="page">
    <div class="container-fluid p-4">
      <h2>Funcionário</h2>

      <hr>

      <div class="row p-3">
        <p><strong>Código:</strong> {{ oneUser._id }}</p>
        <p><strong>Nome:</strong> {{ oneUser.name }}</p>
        <p><strong>E-mail:</strong> {{ oneUser.username }}</p>
        <p><strong>Setor:</strong> {{ oneUser.sector && firstUpperCase(oneUser.sector) }}</p>
        <p><strong>Tipo de Permissão:</strong> {{ oneUser.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Users',

  mounted () {
    this.ActionFindOneUser(this.$route.params.id)
  },

  computed: {
    ...mapState('users', ['oneUser'])
  },

  methods: {
    ...mapActions('users', ['ActionFindOneUser']),

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
</style>
