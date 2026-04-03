<template>
  <div class="container py-5">
    <h2 class="mb-4 page-title">Ваше замовлення</h2>

    <div v-if="cartItems.length > 0 && !orderPlaced">
      <div class="table-responsive shadow-sm rounded">
        <table class="table table-hover mb-0">
          <thead class="cart-thead">
            <tr>
              <th>Фото</th>
              <th>Назва</th>
              <th>Ціна</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <img :src="'images/' + item.image" width="60" class="rounded shadow-sm" style="object-fit: cover; height: 60px;" @error="(e) => e.target.src = 'images/' + item.image">
              </td>
              <td class="font-weight-bold align-middle">{{ item.title }}</td>
              <td class="align-middle">{{ item.price }} грн</td>
              <td class="align-middle">
                <button @click="removeItem(item.id)" class="btn btn-sm btn-outline-danger">
                  Видалити ✖
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-right mt-4 mb-5">
        <h4 class="total-text">Загальна сума: <span class="total-price-val">{{ total }} грн</span></h4>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-11 p-4 shadow-sm order-form-container">
          <h4 class="mb-4 form-header">Контактні дані</h4>
          
          <form @submit.prevent="makeOrder">
            <div class="row">
              <div class="col-md-6 border-right-custom">
                <div class="form-group">
                  <label>Ім'я *</label>
                  <input type="text" class="form-control custom-input" v-model="form.name" required>
                </div>
                <div class="form-group">
                  <label>Місто</label>
                  <input type="text" class="form-control custom-input" v-model="form.city">
                </div>
                <div class="form-group">
                  <label>Телефон</label>
                  <input type="tel" class="form-control custom-input" v-model="form.phone">
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <input type="email" class="form-control custom-input" v-model="form.email" required>
                </div>
              </div>

              <div class="col-md-6 pl-md-4">
                <div class="form-group">
                  <label>Вас цікавить (Повідомлення)</label>
                  <textarea class="form-control custom-input" rows="8" style="resize: none;" v-model="form.message"></textarea>
                </div>
              </div>
            </div>

            <div class="row align-items-center mt-4">
              <div class="col-md-7 d-flex align-items-center mb-3 mb-md-0">
                <label class="mr-3 mb-0">Введіть код:</label>
                <img src="/images/image 12.jpg" alt="captcha" class="me-2 captcha-img">
                <input type="text" class="form-control" style="width: 100px;" required>
              </div>
              <div class="col-md-5 text-right">
                <button type="submit" class="btn btn-submit">
                  Надіслати замовлення
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-else-if="!orderPlaced" class="text-center py-5">
      <h3 class="text-muted">Ваш кошик порожній</h3>
      <router-link to="/catalog" class="btn btn-outline-pink mt-3">Повернутися до товарів</router-link>
    </div>

    <div v-if="orderPlaced" class="text-center py-5">
  <div class="alert alert-success p-5 success-card">
    <h2 class="mb-3">Дякуємо за замовлення, {{ form.name }}!</h2>
    <p class="lead">Сума до оплати: <strong>{{ finalTotal }} грн</strong></p>
    <p>Менеджер зв'яжеться з вами найближчим часом.</p>
    <router-link to="/" class="btn btn-dark mt-4 px-5 rounded-pill">На головну</router-link>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'Cart',
  data() {
    return {
      cartItems: [],
      orderPlaced: false,
      finalTotal: 0,
      form: { 
        name: '', 
        city: '', 
        phone: '', 
        email: '', 
        message: '' 
      }
    };
  }, // Закрили data і поставили кому
  computed: {
    total() {
      if (!this.cartItems || this.cartItems.length === 0) return 0;
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    }
  }, // Закрили computed і поставили кому
  methods: {
    loadCart() {
      try {
        const saved = localStorage.getItem('cart');
        this.cartItems = saved ? JSON.parse(saved) : [];
      } catch (e) {
        this.cartItems = [];
      }
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },
makeOrder() {
      const finalAmount = this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
      this.finalTotal = finalAmount;
      this.orderPlaced = true;

      setTimeout(() => {
        localStorage.removeItem('cart');
        this.cartItems = [];
        window.dispatchEvent(new CustomEvent('cart-updated'));
      }, 100);
    } 
  }, 

  mounted() { 
    this.loadCart();
    window.addEventListener('cart-updated', this.loadCart);
    window.addEventListener('storage', this.loadCart);
  },
  beforeUnmount() {
    window.removeEventListener('cart-updated', this.loadCart);
    window.removeEventListener('storage', this.loadCart);
  }
}
</script>

<style scoped>
/* ПІДКЛЮЧЕННЯ ВАШИХ СТИЛІВ ПР #8 */
.page-title { font-family: 'Playfair Display', serif; color: #3d515e; font-weight: bold; }
.cart-thead { background-color: #f8f4f2; color: #5d2e46; }
.total-text { color: #3d515e; }
.total-price-val { color: #d175b3; font-weight: bold; }

.order-form-container {
  background: #fff; 
  border-radius: 15px; 
  border: 1px solid #eee;
}

.form-header {
  color: #3d515e; 
  border-bottom: 2px solid #f8f4f2; 
  padding-bottom: 10px;
  font-family: 'Playfair Display', serif;
}

.custom-input {
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
}

.btn-submit {
  background-color: #d175b3; 
  color: white; 
  border-radius: 25px; 
  padding: 12px 50px; 
  border: none; 
  font-weight: bold; 
  transition: 0.3s;
}

.btn-submit:hover {
  background-color: #a65a8e;
  transform: translateY(-2px);
}

.btn-outline-pink {
  border: 2px solid #e499b5; 
  color: #e499b5; 
  font-weight: bold; 
  border-radius: 20px;
  text-decoration: none;
  padding: 10px 20px;
}

.captcha-img { height: 40px; border: 1px solid #ddd; border-radius: 4px; }
.success-card { border-radius: 20px; border: none; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

@media (min-width: 768px) {
  .border-right-custom { border-right: 1px solid #eee; }
}
</style>