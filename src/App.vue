<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Глобальні стилі можна залишити тут */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>