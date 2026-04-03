<template>
  <div class="home-wrapper">
    <section class="banner-section d-flex align-items-center justify-content-center text-center">
      <div class="container">
        <h1 class="banner-title text-uppercase">Soft Petal - Магія квіткових моментів</h1>
        <router-link to="/catalog" class="btn btn-more mt-4 text-decoration-none">
          ДІЗНАТИСЯ БІЛЬШЕ
        </router-link>
      </div>
    </section>

    <section class="categories-section py-5">
      <div class="container-fluid px-md-5">
        <div class="row no-gutters justify-content-around text-center">
          <div class="category-item" v-for="cat in categories" :key="cat.name">
            <img :src="cat.img" :alt="cat.name" class="category-icon">
            <p class="mt-2">{{ cat.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section py-5">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <div class="feature-text-block">
              <h2 class="playfair">Краса, що не потребує фільтрів.</h2>
              <p>Кожна квітка розповідає свою історію. Ми лише надаємо їй правильної форми, щоб ваші слова звучали голосніше.</p>
            </div>
          </div>
          <div class="col-md-6">
            <img :src="'/kira.github.io/images/image 1.png'" class="img-fluid rounded shadow" alt="Букет">
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="feature-text-block">
              <h2 class="playfair">Флористика, що доповнює інтер'єр.</h2>
              <p>Створюємо флористичні акценти для сучасних осель. Наші композиції живуть у гармонії з вашим дизайном.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <img :src="'/kira.github.io/images/image 2.png'" class="img-fluid rounded shadow" alt="Інтер'єр">
          </div>
        </div>
      </div>
    </section>

    <section class="popular-flowers-section py-5">
      <div class="container text-center">
        <h2 class="section-title-main playfair">Найпопулярніші квіти Soft Petal</h2>
        <p class="section-subtitle mb-5">Колекція, що надихає</p>
        
        <div class="row mt-5">
          <div class="col-md-4 mb-4" v-for="flower in popular" :key="flower.name">
            <div class="flower-card h-100 p-4 shadow-sm">
              <div class="flower-img-container mb-3">
                <img :src="flower.img" :alt="flower.name" class="img-fluid">
              </div>
              <h3 class="flower-name">{{ flower.name }}</h3>
              <p class="flower-description small">{{ flower.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
categories: [
        { name: 'Тюльпани', img: '/kira.github.io/images/tulips.png' },
        { name: 'Троянди', img: '/kira.github.io/images/roses.png' },
        { name: 'Півонії', img: '/kira.github.io/images/peonies.png' },
        { name: 'Лілії', img: '/kira.github.io/images/lilies.png' },
        { name: 'Букети', img: '/kira.github.io/images/bouquets.png' }
      ],
      popular: [
        { name: 'Троянди', img: '/kira.github.io/images/rose_icon.png', desc: 'Класична елегантність.' },
        { name: 'Тюльпани', img: '/kira.github.io/images/tulip_icon.png', desc: 'Символ свіжості.' },
        { name: 'Півонія', img: '/kira.github.io/images/peony_icon.png', desc: 'Ніжність пелюсток.' }
      ]
    }
  }
}
</script>

<style scoped>
/* Глобальні налаштування шрифтів */
.playfair { font-family: 'Playfair Display', serif; }

/* БАНЕР */
.banner-section {
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), 
                url('/images/banner.jpg') no-repeat center center;
    background-size: cover;
    height: 650px;
    color: #5d2e46;
}
.banner-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: bold;
}
.btn-more {
    background-color: #d88fa5;
    color: white !important;
    padding: 12px 40px;
    font-weight: bold;
    border-radius: 0; /* Прямокутна кнопка як на макеті */
}

/* КАТЕГОРІЇ */
.category-icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
}
.category-item p {
    font-size: 14px;
    color: #3d515e;
}

/* ОСОБЛИВОСТІ */
.feature-text-block h2 {
    color: #5d2e46;
    margin-bottom: 20px;
}
.feature-text-block p {
    color: #6b6375;
    line-height: 1.6;
}

/* КАРТКИ КВІТІВ */
.popular-flowers-section {
    background-color: #f6e1da; /* Фон як на макеті */
}
.flower-card {
    background: white;
    border-radius: 15px;
    border: none;
    transition: 0.3s;
}
.flower-card:hover { transform: translateY(-5px); }
.flower-name {
    font-family: 'Playfair Display', serif;
    color: #5d2e46;
    font-size: 22px;
}
.flower-img-container img {
    max-height: 150px;
}
</style>