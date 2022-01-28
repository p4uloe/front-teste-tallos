<template>
  <div class="page">
    <div class="container-fluid p-4">
      <h2>Página principal</h2>
      <hr>

      <h3>E aí, {{ user.name }}!</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>
<style lang="scss" scoped>
 * {
    font-family: 'Source Sans Pro', sans-serif;
  }
 </style>
