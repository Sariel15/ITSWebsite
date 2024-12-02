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
            <div class="product">
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
                <a :href="product.links[0].url" class="website-btn">Go to the Website</a>
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
  </section>
</template>

<script>
export default {
  name: 'ProductsSection',
  data() {
    return {
      currentIndex: 0,
      position: 0,
      slideWidth: 0,
      slideTransition: 'none',
      selectedProductType: 'saas',
      productsForSaaS: [
        {
          name: "Asana",
          description: "Workflow and task management for teams.",
          image: "Asana.png",
          links: [
            {
              name: "Website",
              url: "https://asana.com/"
            }
          ]
        },
        {
          name: "Jira",
          description: "Agile project management and issue tracking. ",
          image: "Jira.png",
          links: [
            {
              name: "Website",
              url: "https://www.atlassian.com/software/jira"
            }
          ]
        },
        {
          name: "Notion",
          description: "Note-taking, database management, and collaboration. ",
          image: "notion.png",
          links: [
            {
              name: "Website",
              url: "https://www.notion.so/"
            }
          ]
        },
        {
          name: "Slack",
          description: "Team communication and collaboration tool. ",
          image: "Slack.png",
          links: [
            {
              name: "Website",
              url: "https://slack.com/"
            }
          ]
        },
        {
          name: "Zoom",
          description: "Video conferencing and online meetings.",
          image: "zoom.png",
          links: [
            {
              name: "Website",
              url: "https://zoom.us/"
            }
          ]
        }
      ],
      productsForCAD: [
        {
          name: "AutoCAD",
          description: "Industry-standard for 2D and 3D design and drafting.",
          image: "AutoCAD.png",
          links: [
            {
              name: "Website",
              url: "https://www.autodesk.com/products/autocad/overview"
            }
          ] 
        },
        {
          name: "SolidWorks",
          description: "3D CAD software for engineering and product design.",
          image: "SolidWorks.jpg",
          links: [
            {
              name: "Website",
              url: "https://www.solidworks.com/"
            }
          ] 
        },
        {
          name: "Fusion 360",
          description: "Integrated CAD, CAM, and CAE tool for product design.",
          image: "Fusion360.png",
          links: [
            {
              name: "Website",
              url: "https://www.autodesk.com/products/fusion-360/overview"
            }
          ] 
        },
        {
          name: "SketchUp",
          description: "User-friendly 3D modeling software for architecture and design.",
          image: "SketchUp.png",
          links: [
            {
              name: "Website",
              url: "https://www.sketchup.com/"
            }
          ]
        },
        {
          name: "CATIA",
          description: "Advanced CAD software for complex product design in industries like aerospace and automotive.",
          image: "CATIA.png",
          links: [
            {
              name: "Website",
              url: "https://www.3ds.com/products-services/catia/"
            }
          ]
        }
      ]
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
    }
  }
}
</script>

<style scoped>
    .products-section {
        height: compute(100vh - 80px);
        padding: 30px;
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
        height: 500px;
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

    @media (max-width: 1024px) {
      .product-slider {
        max-width: 900px;
      }

      .slide {
        flex: 0 0 calc(50% - 20px);
        min-width: calc(50% - 20px);
      }
    }

    @media (max-width: 768px) {
      .products-section {
        padding: 30px 20px;
      }

      .products-section h2 {
        font-size: 2.5rem;
      }

      .product-slider {
        padding: 0 30px;
      }

      .slide {
        flex: 0 0 calc(100% - 20px);
        min-width: calc(100% - 20px);
      }

      .product {
        height: auto;
        min-height: 350px;
      }
    }
</style>