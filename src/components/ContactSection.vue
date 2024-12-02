<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2>Let's get started<br>with us</h2>
      <p>For more info & support, <a href="#contact">Contact Us</a></p>
    </div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email Address Here"
        >
        <button type="submit" class="subscribe-btn">Subscribe</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log('Submitted email:', this.email)
      // Add your submission logic here
      this.email = ''
    }
  }
}
</script>

<style scoped>
    .contact-section {
        background-color: #195cac;
        height: compute(100vh - 80px);
        padding: 40px 120px;
        gap: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-container {
        color: white;
    }

    .contact-container h2 {
        font-size: 3.5rem;
        margin: 0 0 10px 0;
        font-weight: bold;
        line-height: 1.1;
    }

    .contact-container p {
        margin: 0;
        font-size: 1.1rem;
    }

    .contact-container p a {
        color: white;
        text-decoration: underline;
    }

    .form-group {
        display: flex;
        margin-top: 30px;
        height: 70px;
        width: 500px;
        background: white;
        border-radius: 20px;
        padding: 5px;
    }

    .contact-form input[type="email"] {
        flex: 1;
        border: none;
        padding: 15px 25px;
        font-size: 1rem;
        outline: none;
        background: transparent;
        border-radius: 50px;
    }

    .contact-form .subscribe-btn {
        background-color: #844ddc;
        color: white;
        border: none;
        padding: 15px 35px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .contact-section {
            padding: 20px;
            text-align: center;
        }
    }

    @media (max-width: 1170px) {
        .form-group {
            width: 400px;
        }
    }

    @media (min-width: 1025px) {
        .form-group {
            width: 350px;
        }

        .contact-form input[type="email"] {
          padding: 15px 15px;
        }
        
        .contact-form .subscribe-btn {
          padding: 5px 15px;
          font-size: 0.8rem;
        }
    }

    @media (max-width: 1024px) {
        .contact-section {
            height: auto;
            flex-direction: column;
            gap: 20px;
        }

        .contact-form input[type="email"] {
          font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
         .form-group {
            width: 350px;
        }
    }

    @media (max-width: 380px) {
        .form-group {
            width: 300px;
        }

        .contact-form .subscribe-btn {
          padding: 5px 15px;
          font-size: 0.8rem;
        }
    }
    
    @media (max-width: 320px) {
        .form-group {
            width: 250px;
        }

        .contact-form .subscribe-btn {
          padding: 3px 8px;
        }
    } 
</style>