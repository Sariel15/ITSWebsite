<template>
  <section id="home" class="home-section">
    <div class="home-text"> 
      <h1>Innovate Outsourcing with a Focus on Quality</h1>
      <p>Embrace quality-driven strategies to transform your operation and achieve unparalleled success.</p>
      <a href="#contact" class="button">
        <i class="fa-solid fa-paper-plane"></i>
        <span>Connect With Us</span>
      </a>
    </div>
    <div class="home-image">
      <img 
        src="@/assets/imgs/homeSectionImage.png" 
        alt="Outsourcing Services Diagram"
        loading="lazy"
        width="800"
        height="600"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>

<style scoped>
    .home-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 180px;
        height: 100vh;
        background: linear-gradient(to bottom, #195CAC -85%, white);
    }

    .home-text {
        max-width: 45%;
    }

    .home-text h1 {
        font-family: 'League Spartan', sans-serif;
        font-size: 4.5rem;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 25px;
    }

    .home-text p {
        font-family: 'Krub', regular;
        font-size: 1.5rem;
        color: #666;
        margin-bottom: 30px;
        line-height: 1.6;
    }

    .button {
        display: inline-flex;
        align-items: center;
        gap: 15px;
        padding: 10px 40px;
        text-decoration: none;
        color: #FF9900;
        border: 2.5px solid #D2A517;
        border-radius: 50px;
        background-color: transparent;
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    .button::before {
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

    .button:hover {
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(255, 153, 0, 0.3);
    }

    .button:hover::before {
        width: 100%;
    }

    .button i {
        color: #D2A517;
        transition: transform 0.3s ease;
    }

    .button:hover i {
        color: white;
    }

    .button:hover span {
        color: white;
    }

    .button span {
        color: #D2A517;
        font-family: 'Krub', regular;
        font-size: 1.2rem;
    }

    .home-image {
        max-width: 50%;
        padding: 20px;
    }

    .home-image img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    @media (max-width: 1024px) {
        .home-section {
            padding: 0 60px;
        }

        .home-text h1 {
            font-size: 3.5rem;
        }
    }

    @media (max-width: 768px) {
        .home-section {
            flex-direction: column;
            padding: 40px 20px;
            text-align: center;
            gap: 40px;
        }

        .home-text {
            max-width: 100%;
        }

        .home-image {
            max-width: 100%;
            order: -1;
        }
    }
</style>