<template>
  <div id="app">
    <Header />
    
    <router-view /> 

    <Footer />
  </div>
</template>

<script>
// 1. Імпортуємо файли компонентів
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  // 2. Реєструємо їх, щоб Vue знав, що таке <Header /> та <Footer />
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Тут можна додати глобальні стилі, якщо вони не в окремих файлах */
#app {
  font-family: 'RobotoSlab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>