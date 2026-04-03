<template>
  <main class="container py-5" v-if="product">
    <div class="row mb-4">
      <div class="col-12">
        <router-link to="/catalog" class="back-link custom-nav-link">
          <span class="arrow">←</span> Повернутися до каталогу
        </router-link>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-lg-6 text-center mb-4 mb-lg-0">
        <div class="product-img-wrapper shadow">
          <img 
            :src="'/kira.github.io/images/' + product.image" 
            :alt="product.title" 
            class="img-fluid main-product-img"
            @error="(e) => e.target.src = 'images/' + product.image"
          >
        </div>
      </div>

      <div class="col-lg-6 ps-lg-5">
        <h1 class="display-4 product-title">{{ product.title }}</h1>
        <div class="price-container mb-4">
          <span class="price-tag">{{ product.price }} грн</span>
        </div>
        
        <div class="description-box">
          <h4 class="info-label">Опис сорту:</h4>
          <p class="product-description">{{ product.desc || product.short_text }}</p>
        </div>
        
        <hr class="search-underline my-4">
        
        <button @click="addToCart" class="btn btn-add-cart w-100 py-3">
          ДОДАТИ У КОШИК 🛒
        </button>
      </div>
    </div>
  </main>

  <div v-else class="text-center py-5 empty-state">
    <h2 class="product-title">Товар не знайдено</h2>
    <router-link to="/catalog" class="btn btn-add-cart mt-3 px-5">До каталогу</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['id'],
  data() {
    return {
      product: null
    }
  },
  mounted() {
    this.loadProduct();
  },
  methods: {
    loadProduct() {
      const allProducts = JSON.parse(localStorage.getItem('all_products')) || [];
      const productId = Number(this.id);
      this.product = allProducts.find(p => p.id === productId);
    },
    addToCart() {
      if (!this.product) return;

      let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const exists = cart.find(item => item.id === this.product.id);
      
      if (!exists) {
        cart.push({
          id: this.product.id,
          title: this.product.title,
          price: this.product.price,
          image: this.product.image
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Подія для оновлення Хедеру
        window.dispatchEvent(new CustomEvent('cart-updated'));
        alert(`${this.product.title} додано до кошика!`);
      } else {
        alert('Цей товар вже є у кошику');
      }
    }
  } 
}
</script>

<style scoped>
/* Використання вашої палітри та шрифтів */
.product-title {
  font-family: 'Playfair Display', serif;
  color: #3d515e;
  font-weight: bold;
}

.back-link {
  font-family: 'Roboto Slab', serif !important;
  color: #3d515e !important;
  text-decoration: none;
  font-size: 15px;
  display: inline-block;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: #e499b5 !important;
  transform: translateX(-5px);
}

.product-img-wrapper {
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
}

.main-product-img {
  width: 100%;
  max-height: 550px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.main-product-img:hover {
  transform: scale(1.02);
}

.price-tag {
  font-size: 2.5rem;
  color: #a3657e;
  font-weight: bold;
  font-family: 'Roboto Slab', serif;
}

.info-label {
  font-family: 'Playfair Display', serif;
  color: #5d2e46;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product-description {
  font-family: 'Roboto Slab', serif;
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
}

.search-underline {
  height: 1px;
  background-color: #4a4a4a;
  opacity: 0.2;
}

.btn-add-cart {
  background-color: #d88fa5;
  color: white;
  border: none;
  border-radius: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(216, 143, 165, 0.3);
}

.btn-add-cart:hover {
  background-color: #a3657e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(163, 101, 126, 0.4);
}

.empty-state {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>