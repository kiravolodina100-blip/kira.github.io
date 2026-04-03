<template>
  <main class="container py-5" v-if="product">
    <div class="row mb-4">
      <div class="col-12">
        <router-link to="/catalog" class="back-link">
          <span>←</span> Повернутися до каталогу
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 text-center">
        <img :src="'/images/' + product.image" :alt="product.title" class="img-fluid product-img shadow">
      </div>
      <div class="col-lg-6">
        <h1 class="display-4">{{ product.title }}</h1>
        <p class="price-tag">{{ product.price }} грн</p>
        <hr>
        <h4 class="mt-4">Опис сорту:</h4>
        <p class="lead text-muted">{{ product.desc }}</p>
        
        <button @click="addToCart" class="btn btn-primary btn-lg mt-4 w-100">
          Додати у кошик
        </button>
      </div>
    </div>
  </main>
  <div v-else class="text-center py-5">
    <h2>Товар не знайдено</h2>
    <router-link to="/catalog" class="btn btn-secondary">До каталогу</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      product: null
    }
  },
  mounted() {
    // Отримуємо дані, які ми зберегли в Catalog.vue
    const products = JSON.parse(localStorage.getItem('all_products')) || [];
    this.product = products.find(p => p.id == this.id);
  },
  methods: {
    addToCart() {
      let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      if (!cart.find(item => item.id === this.product.id)) {
        cart.push(this.product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Додано!');
      }
    }
  }
}
</script>

<style scoped>
.back-link { color: #d88fa5; text-decoration: none; font-weight: bold; }
.product-img { border-radius: 20px; max-height: 500px; object-fit: cover; }
.price-tag { font-size: 2rem; color: #a3657e; font-weight: bold; }
.btn-primary { background-color: #d88fa5; border: none; border-radius: 30px; }
.btn-primary:hover { background-color: #a3657e; }
</style>