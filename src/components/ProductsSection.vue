<template>
  <section id="products" class="products-section">
    <h2>What are the Products?</h2>
    <div class="product-type-selector">
      <button 
        :class="['type-btn', { active: selectedProductType === 'saas' }]"
        @click="selectProductType('saas')"
      >
        SaaS Products
      </button>
      <button 
        :class="['type-btn', { active: selectedProductType === 'cad' }]"
        @click="selectProductType('cad')"
      >
        CAD Products
      </button>
    </div>
    <div class="product-slider">
      <button class="slider-nav prev-btn" @click="updateSlider('prev')">←</button>
      <div class="slide-container">
        <div class="slide-track" :style="{ transform: `translateX(${position}px)`, transition: slideTransition }">
          <div v-for="(product, index) in extendedProducts" 
               :key="`${index}-${product.name}`" 
               class="slide">
            <div class="product" @click="showProductDetails(product)">
              <div class="product-image">
                <img 
                  :src="require(`@/assets/imgs/SoftwareLOGOS/${product.image}`)" 
                  :alt="product.name"
                  loading="lazy"
                  width="200"
                  height="100"
                >
              </div> 
              <div class="product-info">
                <div class="product-text">
                  <h3>{{ product.name }}</h3>
                  <p>{{ product.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="slider-nav next-btn" @click="updateSlider('next')">→</button>
      <div class="slider-dots">
        <span v-for="(_, index) in currentProducts" 
              :key="index"
              :class="['dot', { active: index === actualIndex }]"
              @click="goToSlide(index)">
        </span>
      </div>
    </div>
    <div v-if="selectedProduct" 
         class="modal-overlay"
         @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <div class="modal-header">
          <img :src="require(`@/assets/imgs/SoftwareLOGOS/${selectedProduct.image}`)" 
               :alt="selectedProduct.name">
          <h3>{{ selectedProduct.name }}</h3>
        </div>
        <div class="modal-body">
          <p>{{ selectedProduct.description }}</p>
          <a :href="selectedProduct.links[0].url" 
             class="website-btn" 
             target="_blank">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { productsData } from '@/data/products'

export default {
  name: 'ProductsSection',
  data() {
    return {
      currentIndex: 0,
      position: 0,
      slideWidth: 0,
      slideTransition: 'none',
      selectedProductType: 'saas',
      productsForSaaS: productsData.saas,
      productsForCAD: productsData.cad,
      selectedProduct: null
  }
  },
  computed: {
    currentProducts() {
      return this.selectedProductType === 'saas' ? this.productsForSaaS : this.productsForCAD;
    },
    extendedProducts() {
      return [...this.currentProducts, ...this.currentProducts, ...this.currentProducts]
    },
    actualIndex() {
      const totalSlides = this.currentProducts.length;
      let index = ((this.currentIndex % totalSlides) + totalSlides) % totalSlides;
      const visibleSlides = 3;
      const middleOffset = Math.floor(visibleSlides / 2);
      index = ((index + middleOffset) % totalSlides);
      return index;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slideWidth = this.$el.querySelector('.slide').offsetWidth + 20;
    });
  },
  methods: {
    updateSlider(direction) {
      this.slideTransition = 'transform 0.5s ease-in-out';
      const totalSlides = this.currentProducts.length;
      
      if (direction === 'next') {
        this.currentIndex++;
        this.position -= this.slideWidth;
      } else {
        this.currentIndex--;
        this.position += this.slideWidth;
      }

      setTimeout(() => {
        this.slideTransition = 'none';
        if (this.currentIndex >= totalSlides) {
          this.currentIndex = 0;
          this.position = 0;
        } else if (this.currentIndex < 0) {
          this.currentIndex = totalSlides - 1;
          this.position = -(totalSlides - 1) * this.slideWidth;
        }
      }, 500);
    },
    goToSlide(index) {
      const totalSlides = this.currentProducts.length;
      const currentActual = this.actualIndex;
      
      let diff = index - currentActual;
      if (Math.abs(diff) > totalSlides / 2) {
        diff = diff > 0 ? diff - totalSlides : diff + totalSlides;
      }
      
      this.slideTransition = 'transform 0.5s ease-in-out';
      this.currentIndex += diff;
      this.position -= diff * this.slideWidth;

      // Reset position after animation if needed
      setTimeout(() => {
        this.slideTransition = 'none';
        if (this.currentIndex >= totalSlides) {
          this.currentIndex = this.currentIndex % totalSlides;
          this.position = -(this.currentIndex * this.slideWidth);
        } else if (this.currentIndex < 0) {
          this.currentIndex = totalSlides + (this.currentIndex % totalSlides);
          this.position = -(this.currentIndex * this.slideWidth);
        }
      }, 500);
    },
    selectProductType(type) {
      this.selectedProductType = type;
      this.currentIndex = 0;
      this.position = 0;
    },
    showProductDetails(product) {
      this.selectedProduct = product;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedProduct = null;
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<style scoped>
    .products-section {
        height: 94.5vh;
        text-align: center;
        background-color: #f0f4ff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
    }

    .products-section h2 {
        font-family: 'League Spartan', sans-serif;
        font-size: 3.5rem;
        margin-bottom: 40px;
        color: #333;
    }

    .product-slider {
        position: relative;
        max-width: 1250px;
        margin: 0 auto;
        padding: 0 50px;
        overflow: hidden;
    }

    .slide-container {
        overflow: hidden;
        position: relative;
    }

    .slide-track {
        display: flex;
        gap: 20px;
    }

    .slide {
        flex: 0 0 calc(33.333% - 14px);
        min-width: calc(33.333% - 14px);
    }

    .product {
        background-color: #fff;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        height: 450px;
        display: flex;
        flex-direction: column;
    }

    .product-image {
        width: 100%;
        height: 200px;
        background-color: white;
        border-radius: 10px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    }

    .product-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    .product-image img:hover {
        transform: scale(1.05);
    }

    .website-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 10px 40px;
        text-decoration: none;
        color: #D2A517;
        border: 2.5px solid #D2A517;
        border-radius: 50px;
        background-color: transparent;
        font-weight: 500;
        transition: all 0.3s ease;
        margin-top: auto;
        width: fit-content;
        align-self: center;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    .website-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: #D2A517;
        transition: all 0.3s ease;
        z-index: -1;
    }

    .website-btn:hover {
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(255, 153, 0, 0.3);
    }

    .website-btn:hover::before {
        width: 100%;
    }

    .slider-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: #fff;
        margin: 0px -9px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        z-index: 2;
    }

    .prev-btn {
        left: 10px;
    }

    .next-btn {
        right: 10px;
    }

    .slider-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 20px;
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ddd;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .dot.active {
        background-color: #d2a517;
    }

    .product-type-selector {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
    }

    .type-btn {
      padding: 10px 30px;
      border: 2px solid #844ddc;
      border-radius: 25px;
      background: transparent;
      color: #844ddc;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .type-btn.active {
      background: #844ddc;
      color: white;
    }

    .type-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(132, 77, 220, 0.2);
    }

    .product-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-text {
        flex: 1;
    }

    .product-text h3 {
        font-family: 'League Spartan', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .product-text p {
        font-family: 'Krub', regular;
        line-height: 1.4;
    }

    @media (max-width: 1250px) {
      .product-slider {
        max-width: 900px;
      }

      .slide {
        flex: 0 0 calc(50% - 20px);
        min-width: calc(50% - 20px);
      }
    }

    @media (max-width: 1024px) {
      .product-slider {
        max-width: 700px;
      }
    }

    @media (max-width: 768px) {
      .product-section {
        flex-direction: column;
        padding: 20px;
      }

      .product-section h2 {
        font-size: 2rem;
      }

      .product-section .product-card {
        width: 100%;
        margin-bottom: 20px;
      }

      .product-slider {
        padding: 5px 20px;
      }

      .slide {
        flex: 0 0 100%;
        min-width: 100%;
      }

      .product {
        height: auto;
        min-height: 250px;
        max-width: 90%;
        margin: 0 auto;
      }

      .product-image {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .product-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .product-text h3 {
        font-size: 1.2rem;
      }

      .product-text p {
        font-size: 0.9rem;
      }

      .slider-nav {
        width: 30px;
        height: 30px;
      }

      .prev-btn {
        margin-right: 5px;
      }

      .next-btn {
        margin-left: 5px;
      }
    }

    @media (max-width: 720px) {
      .product {
        height: auto;
        min-height: 250px;
        max-width: 80%;
      }

      .product-slider {
        max-width: 600px;
        padding: 0 50px;
      }
    }

    @media (max-width: 620px) {
      .product-slider {
        max-width: 500px;
      }
    }

    @media (max-width: 520px) {
      .product-slider {
        max-width: 400px;
      }
    }

    @media (max-width: 460px) {
      .product-slider {
        max-width: 350px;
      }
    }

    @media (max-width: 415px) {
      .product-slider {
        max-width: 300px;
      }
    }

    @media (max-width: 370px) {
      .product {
        height: 200px;
      }

      .product-image {
        height: 200px;
      }

      .product-text h3 {
        font-size: 1.2rem;
      }

      .product-slider {
        max-width: 250px;
      }
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background-color: white;
      border-radius: 15px;
      padding: 30px;
      max-width: 500px;
      width: 90%;
      position: relative;
      animation: slideIn 0.3s ease;
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
    }

    .modal-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .modal-header img {
      max-width: 150px;
      margin-bottom: 15px;
    }

    .modal-body {
      text-align: center;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Make product cards clickable */
    .product {
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .product:hover {
      transform: translateY(-5px);
    }
</style>