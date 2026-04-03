<template>
  <div class="catalog-page pb-5">
    <div class="container py-5">
      <h2 class="section-title text-center mb-5">Каталог Soft Petal</h2>
      
      <div class="row">
        <div class="col-md-4 mb-4" v-for="flower in products" :key="flower.id">
          <div class="flower-card shadow-sm p-3 h-100 d-flex flex-column">
            <div class="flower-img-container cursor-pointer" @click="goToProduct(flower.id)">
              <img :src="'/images/' + flower.image" :alt="flower.title" class="img-fluid flower-img">
            </div>
            
            <div class="flower-info text-center mt-3 flex-grow-1">
              <h5 class="flower-title cursor-pointer" @click="goToProduct(flower.id)">
                {{ flower.title }}
              </h5>
              <p class="flower-desc small text-muted">{{ flower.short_text }}</p>
              <div class="flower-price">{{ flower.price }} грн</div>
              
              <div class="d-flex flex-column gap-2">
                <button @click="addToCart(flower)" class="btn btn-add-to-cart w-100 mt-2">
                  У кошик 
                </button>
                <router-link :to="'/product/' + flower.id" class="btn btn-outline-detail w-100 mt-2">
                  Детальніше
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  data() {
    return {
      products: [
        { id: 2001, title: "SP 2001 (Ніжна Роса)", price: 115, short_text: "Кущова троянда, ніжно-рожева.", image: "sp2001.jpg", desc: "Вишукана кущова троянда з тонким ароматом ранкової роси. Ідеально підходить для створення романтичного настрою." },
        { id: 2002, title: "SP 2002 (Золотий Світанок)", price: 90, short_text: "Хризантема жовта, махрова.", image: "sp2002.jpg", desc: "Яскрава хризантема, що символізує сонячне світло та тепло. Довго зберігає свіжість у вазі." },
        { id: 2003, title: "SP 2003 (Оксамитовий Вечір)", price: 70, short_text: "Тюльпан бордовий, видовжений.", image: "sp2003.jpg", desc: "Глибокий бордовий колір пелюсток нагадує оксамит. Елегантний вибір для особливих моментів." },
        { id: 2004, title: "SP 2004 (Біла Магія)", price: 195, short_text: "Лілія, чашоподібна з ароматом.", image: "sp2004.jpg", desc: "Королівська лілія з неперевершеним ароматом, що наповнює всю кімнату магією." },
        { id: 2005, title: "SP 2005 (Кораловий Бриз)", price: 60, short_text: "Гвоздика з гофрованими краями.", image: "sp2005.jpg", desc: "Ніжна гвоздика коралового відтінку з незвичними хвилястими краями пелюсток." },
        { id: 2006, title: "SP 2006 (Пудровий Сон)", price: 140, short_text: "Махрова троянда персикова.", image: "sp2006.jpg", desc: "Пишна махрова троянда пастельного кольору. Справжнє втілення ніжності та затишку." },
        { id: 2007, title: "SP 2007 (Лавандовий Туман)", price: 480, short_text: "Гортензія з градієнтом.", image: "sp2007.jpg", desc: "Велика гортензія з дивовижними переходами кольорів від бузкового до блакитного." }
      ]
    }
  },
  mounted() {
    // Зберігаємо список товарів, щоб сторінка ProductDetail могла їх знайти
    localStorage.setItem('all_products', JSON.stringify(this.products));
  },
  methods: {
    goToProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id: id } });
    },
    addToCart(flower) {
      let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const exists = cart.find(item => item.id === flower.id);
      
      if (!exists) {
        cart.push({
          id: flower.id,
          title: flower.title,
          price: flower.price,
          image: flower.image
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${flower.title} додано до кошика!`);
      } else {
        alert('Ця квітка вже у вашому кошику');
      }
    }
  }
}
</script>

<style scoped>
.catalog-page {
  background-color: #fce4ec;
  min-height: 100vh;
}

.section-title {
  font-family: 'Playfair Display', serif;
  color: #5d2e46;
  font-weight: bold;
}

.flower-card {
  background: #ffffff;
  border-radius: 20px;
  border: none;
  transition: all 0.3s ease;
}

.flower-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(163, 101, 126, 0.2) !important;
}

.flower-img-container {
  height: 250px;
  overflow: hidden;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flower-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.flower-card:hover .flower-img {
  transform: scale(1.1);
}

.flower-title {
  font-family: 'Playfair Display', serif;
  color: #5d2e46;
  font-weight: bold;
  cursor: pointer;
}

.flower-price {
  font-weight: bold;
  color: #a3657e;
  font-size: 1.3rem;
  margin: 10px 0;
}

.btn-add-to-cart {
  background-color: #d88fa5;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 0;
  font-weight: bold;
  transition: 0.3s;
}

.btn-add-to-cart:hover {
  background-color: #a3657e;
}

.btn-outline-detail {
  border: 1px solid #d88fa5;
  color: #d88fa5;
  border-radius: 25px;
  font-weight: bold;
  transition: 0.3s;
}

.btn-outline-detail:hover {
  background-color: #fce4ec;
  color: #a3657e;
}

.cursor-pointer {
  cursor: pointer;
}
</style>