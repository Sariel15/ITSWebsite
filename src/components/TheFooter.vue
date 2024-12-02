<template>
  <footer>
    <div class="footer-container">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="@/assets/imgs/ITS-icon.png" alt="IT Squarehub Logo">
          <h3>IT Squarehub</h3>
        </div>
        <p>We provide world class services at a fraction of a cost without sacrificing quality.</p>
        <div class="social-links">
          <a v-for="(link, index) in socialLinks" 
             :key="index" 
             :href="link.url" 
             class="social-circle">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>

      <div class="footer-services">
        <h3>Outsourcing Services</h3>
        <div class="services-grid">
          <ul v-for="(list, index) in servicesList" :key="index">
            <li v-for="(service, sIndex) in list" :key="sIndex">
              {{ service }}
            </li>
          </ul>
        </div>
        <h3>Other Services</h3>
        <ul>
          <li>Software Engineer</li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>Contact and Follow us on:</h3>
        <ul>
          <li v-for="(contact, index) in contactInfo" :key="index">
            <i :class="contact.icon"></i> {{ contact.text }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      email: '',
      socialLinks: [
        { icon: 'fas fa-envelope', url: '#' },
        { icon: 'fab fa-facebook', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
        { icon: 'fab fa-linkedin', url: '#' }
      ],
      servicesList: [
        ['Software Engineer', 'Software Engineer', 'Software Engineer', 'Software Engineer'],
        ['Software Engineer', 'Software Engineer', 'Software Engineer']
      ],
      contactInfo: [
        { icon: 'fas fa-envelope', text: 'customercare@itsquarehub.com' },
        { icon: 'fas fa-phone', text: 'PH: +63 9060010784 (Globe)' },
        { icon: 'fas fa-phone', text: 'PH: +63 9218591348 (Smart)' },
        { icon: 'fas fa-phone', text: 'UK: +44 748 888-9923' }
      ]
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
  footer {
    height: auto;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
  }

  .footer-container {
      width: 100%;
      display: grid;
      grid-template-columns: 1.5fr 2fr 1.5fr;
      gap: 20px;
      align-items: start;
      text-align: center;
  }

  .footer-brand {
      max-width: none;
  }

  .footer-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
  }

  .footer-logo img {
      width: 60px;
      height: auto;
  }

  .footer-logo h3 {
      color: #195cac;
      font-size: 1.5rem;
      margin: 0;
  }

  .footer-brand p {
      color: #666;
      margin-bottom: 20px;
      line-height: 1.5;
  }

  .social-links {
      display: flex;
      gap: 15px;
      justify-content: center;
  }

  .social-circle {
      width: 45px;
      height: 45px;
      background-color: #d2a517;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: background-color 0.3s;
  }

  .social-circle:hover {
      background-color: #c19615;
  }

  .footer-services h3,
  .footer-contact h3 {
      color: #333;
      margin: 0 0 15px 0;
      font-size: 1.2rem;
  }

  .services-grid {
      display: flex;
      gap: 30px;
      margin-bottom: 30px;
      justify-content: center;
  }

  .footer-services ul,
  .footer-contact ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }

  .footer-services li,
  .footer-contact li {
      color: #666;
      margin-bottom: 10px;
      font-size: 0.95rem;
  }

  .footer-contact {
    text-align: left;
  }

  .footer-contact li {
      display: flex;
      align-items: center;
      gap: 10px;
  }

  .footer-contact i {
      color: #666;
  }

  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }

    .footer-brand,
    .footer-services {
      max-width: none;
      width: 100%;
    }

    .footer-logo, .social-links, .footer-contact {
      justify-content: center;
    }

    .footer-contact {
      margin-bottom: 30px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
      gap: 30px;
      margin-bottom: 30px;
      align-items: center;
    }

    .footer-services ul,
    .footer-contact ul {
      padding: 0;
    }
  }

  @media (max-width: 480px) {
    .footer-container {
      padding: 0;
      text-align: center;
    }

    .footer-brand,
    .footer-services,
    .footer-contact {
      width: 100%;
      margin-bottom: 20px;
    }

    .footer-services ul,
    .footer-contact ul {
      padding: 0;
    }

    .footer-contact li {
      justify-content: center;
    }
  }
</style>