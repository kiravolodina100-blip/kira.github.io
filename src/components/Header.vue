<template>
  <header class="custom-header">
    <div class="container-fluid px-md-5">
      <nav class="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between align-items-center">
        
        <router-link class="navbar-brand logo" to="/">
          <img src="/images/Picsart_26-03-17_23-30-32-733 1.png" alt="Soft Petal" class="logo-img">
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#softPetalNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="softPetalNav">
          <div class="nav-right-side ml-auto d-flex flex-column align-items-end">
            
            <div class="search-area d-none d-lg-block">
              <div class="d-flex justify-content-between align-items-center">
                <span class="search-text text-muted small">Пошук</span>
                <img src="/images/search_icon.png" alt="Пошук" class="search-icon">
              </div>
              <div class="search-underline"></div>
            </div>

            <ul class="navbar-nav header-menu mt-2">
              <li class="nav-item">
                <router-link class="nav-link custom-nav-link" to="/" exact-active-class="active">Головна</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link custom-nav-link" to="/about">Про нас</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link custom-nav-link" to="/catalog" active-class="active">Товари</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link custom-nav-link" to="/management">Менеджмент</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link custom-nav-link" to="/contact" active-class="active">Кошик</router-link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* ПІДКЛЮЧЕННЯ ВАШИХ СТИЛІВ */
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
}

/* Пошук */
.search-area {
    width: 200px; 
    margin-bottom: 5px;
}

.search-text {
    font-size: 13px; 
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Roboto Slab', serif;
}

.search-icon {
    width: 16px;
    height: 16px;
    opacity: 0.6;
}

.search-underline {
    width: 100%;
    height: 1px;
    background-color: #4a4a4a;
}

/* Меню */
.header-menu .nav-link {
    font-size: 13px;
    color: #4a4a4a !important;
    text-transform: uppercase;
    padding: 5px 0 5px 15px !important; 
}

/* Налаштування кнопок навігації */
.custom-nav-link {
    font-family: 'Roboto Slab', serif !important;
    color: #3d515e !important;
    font-size: 15px; 
    font-weight: 400;
    padding: 5px 12px !important; 
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
}

.custom-nav-link:hover {
    color: #e499b5 !important;
    text-decoration: none !important;
}

/* Активна сторінка (Vue автоматично додає клас .active через router-link) */
.active {
    color: #a3657e !important;
    font-weight: 700 !important;
}

@media (max-width: 991px) {
    .logo-img {
        height: 60px; 
    }

    .navbar-collapse {
        background-color: #fce4ec;
        padding: 15px;
        border-radius: 8px;
        margin-top: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    
    .nav-right-side {
        align-items: center !important;
    }

    .custom-nav-link {
        text-align: center;
        border-bottom: 1px solid rgba(228, 153, 181, 0.2);
        padding: 10px !important;
        width: 100%;
    }
}
</style>