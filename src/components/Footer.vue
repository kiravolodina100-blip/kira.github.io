<template>
  <footer class="custom-footer mt-auto">
    <div class="footer-main-panel">
      <div class="container-fluid px-md-5">
        <div class="d-flex justify-content-between align-items-center py-4 flex-wrap">
          
          <ul class="nav footer-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Головна</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/catalog">Продукція</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Кошик</router-link>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Про нас</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Контакти</a></li>
          </ul>

          <div class="footer-socials">
            <a href="#"><img src="/images/Ico_in.png" alt="LinkedIn"></a>
            <a href="#"><img src="/images/Ico_inst.png" alt="Instagram"></a>
            <a href="#"><img src="/images/Ico_tube.png" alt="YouTube"></a>
            <a href="#"><img src="/images/Ico_tw.png" alt="Twitter"></a>
            <a href="#"><img src="/images/Ico_fb.png" alt="Facebook"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom-bar text-center py-3">
      <p class="copyright-text">Soft Petal. © 2026</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Ми використовуємо scoped, щоб стилі не "витікали", 
   але оскільки ви надали готові класи, ми дублюємо їх сюди 
   для гарантованого відображення.
*/

.footer-main-panel {
    background-color: #a3657e; /* Темно-рожевий відтінок */
}

.footer-nav .nav-link {
    color: #ffffff !important;
    font-family: 'Roboto Slab', serif;
    font-size: 13px;
    text-transform: uppercase;
    padding: 0 15px !important;
    letter-spacing: 1px;
}

.footer-nav .nav-link:hover {
    color: #fce4ec !important;
}

.footer-socials a {
    margin-left: 10px;
    display: inline-block;
    transition: transform 0.2s ease;
}

.footer-socials a:hover {
    transform: scale(1.1);
}

.footer-socials img {
    width: 32px;
    height: auto;
}

.footer-bottom-bar {
    background-color: #8e546d; /* Темніший колір знизу */
}

.copyright-text {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Roboto Slab', serif;
    font-size: 12px;
    margin: 0;
}

@media (max-width: 991px) {
    .footer-nav {
        justify-content: center;
        margin-bottom: 20px;
        width: 100%;
    }
    .footer-socials {
        width: 100%;
        text-align: center;
    }
}
</style>