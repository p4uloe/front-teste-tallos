<template>
  <div id="nav">
    <div class="primary_page">
      <Navbar v-if="showNavbar"/>

      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },

  computed: {
    showNavbar: function () {
      return !['login'].includes(this.$route.name)
    }
  }
}

</script>
