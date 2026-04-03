<template>
  <header class="custom-header">
    <div class="container-fluid px-md-5">
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        
        <div class="logo-area">
          <router-link to="/">
          <img :src="'/kira.github.io/images/logo.png'" alt="Soft Petal" class="logo-img">
          </router-link>
        </div>

        <div class="nav-right-side">
          <div class="search-area d-flex align-items-center ms-auto">
            <span class="search-text me-2">Пошук</span>
          <img :src="'/kira.github.io/images/search_icon.png'" alt="Search" class="search-icon">
          </div>
          <div class="search-underline"></div>

          <nav class="navbar navbar-expand-lg p-0 mt-2">
            <div class="header-menu">
              <ul class="navbar-nav shadow-none">
                <li class="nav-item">
                  <router-link class="nav-link custom-nav-link" to="/">Головна</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link custom-nav-link" to="/catalog">Продукція</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link custom-nav-link cart-wrapper" to="/contact">
                    Кошик
                    <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link custom-nav-link" href="#">Про нас</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      cartCount: 0
    }
  },
  mounted() {
    this.updateCount();
    window.addEventListener('cart-updated', this.updateCount);
    window.addEventListener('storage', this.updateCount);
  },
  methods: {
    updateCount() {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.cartCount = cart.length;
      } catch (e) {
        this.cartCount = 0;
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('cart-updated', this.updateCount);
    window.removeEventListener('storage', this.updateCount);
  }
}
</script>

<style scoped>
.custom-header {
    position: relative;
    z-index: 1050;
    background-color: transparent;
    padding: 10px 0; 
}

.logo-img {
    height: 80px; 
    width: auto;
    transition: height 0.3s ease;
}

.nav-right-side {
    margin-top: 0; 
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.search-area {
    width: 200px; 
    margin-bottom: 5px;
    cursor: pointer;
}

.search-text {
    font-size: 13px; 
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4a4a4a;
}

.search-icon {
    width: 16px;
    height: 16px;
}

.search-underline {
    width: 100%;
    height: 1px;
    background-color: #4a4a4a;
}

.custom-nav-link {
    font-family: 'Roboto Slab', serif !important;
    color: #3d515e !important;
    font-size: 15px; 
    font-weight: 400;
    padding: 5px 12px !important; 
    position: relative;
    transition: all 0.3s ease;
}

.custom-nav-link:hover {
    color: #e499b5 !important;
    text-decoration: none !important;
}

.cart-wrapper {
    position: relative;
}

.cart-badge {
    position: absolute;
    top: -5px;
    right: -2px;
    background-color: #d88fa5;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 50%;
    font-weight: bold;
}

@media (max-width: 991px) {
    .logo-img {
        height: 60px; 
    }
    .nav-right-side {
        align-items: center;
        width: 100%;
    }
}
</style>