<template>
  <div class="login">
    <div class="card">
      <div class="card-header">
        <i class="fas fa-sign-in-alt"></i> Login
      </div>

      <div class="card-body">
        <form @submit.prevent="submit">
          <div class="form-group mb-1">
            <label for="username">E-mail</label>
            <input type="email" id="username" v-model="form.username" class="form-control" required>
          </div>

          <div class="form-group mb-1">
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="form.password" class="form-control" required>
          </div>

          <div class="form-group mt-3 mb-1">
            <input id="button" type="submit" value="Login" class="btn btn-primary col-12">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      username: '',
      password: ''
    }
  }),

  methods: {
    ...mapActions('auth', ['ActionLogin']),

    submit: async function () {
      try {
        await this.ActionLogin(this.form)
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.data ? err.data.message : 'Erro ao logar!')
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.5;
}

  .login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, cornflowerblue, lightblue);
    font-size: 1.2rem;
  }

  .card-header{
    text-align: center;
    font-size: 2rem;
  }

  .card-body {
    min-width: 300px;
  }

  .form-group {
    padding: 10px;
  }

  #button {
    // background: linear-gradient(to right, cornflowerblue, lightblue);
    border: none;
    height: 50px;
  }

  #button:hover {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  #button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

#button:hover span {
  padding-right: 25px;
}

#button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
