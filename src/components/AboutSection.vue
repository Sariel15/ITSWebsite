<template>
  <section id="about" class="about-section">
    <h2>Why choose us for Outsourcing?</h2>
    <p class="about-description">
      IT Squarehub is a leading outsourcing company with a proven track record of helping businesses and organizations successfully attain their business objectives. We take pride in delivering first class outsourcing services around the globe.
    </p>
    <div class="about-cards">
      <div v-for="(card, index) in cards" :key="index" class="container-cards">
        <div class="card">
          <div class="card-icon">
            <i :class="card.icon"></i>
          </div>
        </div>
        <h3>{{ card.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutCards } from '@/data/about'

export default {
  name: 'AboutSection',
  data() {
    return {
      cards: aboutCards
    }
  }
}
</script>

<style scoped>
    .about-section {
        height: 100vh;
        text-align: center;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        gap: 20px;
    }

    .about-section h2 {
        font-family: 'League Spartan', sans-serif;
        font-size: 3em;
        margin-bottom: 20px;
        margin-top: 5%;
    }

    .about-description {
        font-family: 'Krub', regular;
        font-size: 1.5rem;
        max-width: 800px;
        margin: 0 auto -50px;
        color: #666;
    }

    .about-cards {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 70px;
        padding: 40px;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
    }

    .container-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 200px;
    }

    .card {
        background: none;
        padding: 0;
        width: auto;
        height: auto;
    }

    .card-icon {
        width: 225px;
        height: 200px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .container-cards:nth-child(1) .card-icon {
        background-color: #844ddc;
    }

    .container-cards:nth-child(2) .card-icon {
        background-color: #195cac;
    }

    .container-cards:nth-child(3) .card-icon {
        background-color: #d2a517;
    }

    .container-cards:nth-child(4) .card-icon {
        background-color: #00b8d4;
    }

    .card-icon i {
        font-size: 84px;
        color: white;
    }

    .container-cards h3 {
        font-family: 'Krub', regular;
        font-weight: 700;
        font-size: 1.1rem;
        margin: 0;
        color: #333;
        font-weight: 600;
        text-align: center;
    }

    @media (max-width: 1024px) {
      .about-cards {
        gap: 40px;
      }

      .card-icon {
        width: 180px;
        height: 160px;
      }
    }

    @media (max-width: 768px) {
      .about-section {
        padding: 30px 20px;
        height: auto;
      }

      .about-section h2 {
        font-size: 2.5rem;
      }

      .about-description {
        font-size: 1.2rem;
        padding: 0 20px;
      }

      .about-cards {
        flex-direction: column;
        gap: 30px;
      }

      .container-cards {
        width: 100%;
        max-width: 300px;
      }
    }
</style>