<template>
  <header>
    <div class="logo">
      <a href="#">
        <img src="@/assets/imgs/ITS-icon-black.png" alt="IT Squarehub Logo">
      </a>
    </div>
    <nav :class="{ 'nav-open': isMenuOpen }">
      <ul>
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#products" @click="closeMenu">Products</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </nav>
    <button class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </button>
  </header>
</template>

<style scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 120px;
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #e0e0e0;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: auto;
        height: 30px;
        margin-right: 15px;
        display: block;
        object-fit: contain;
    }

    .logo .logo-text{
        text-decoration: none;
        font-family: 'Roboto', regular;
        font-size: 2rem;
        font-weight: bold;
        color: #007bff;
    }

    nav ul {
        list-style: none;
        display: flex;
        gap: 60px;
        margin: 0;
    }

    nav a {
        font-family: 'Krub', regular;
        font-size: 1.2rem;
        color: #333;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
    }

    nav a:hover {
        color: #007bff;
    }

    nav a.active {
        color: #007bff;
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #;
    }

    @media (max-width: 1024px) {
        nav ul {
          gap: 40px;
        }
    }

    @media (max-width: 768px) {
        header {
            padding: 15px 20px;
        }

        .menu-toggle {
            display: block;
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 270px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            padding: 25px 20px 20px;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }

        nav.nav-open {
            transform: translateX(0);
        }

        nav ul {
            flex-direction: column;
            gap: 30px;
            margin: 0;
            margin-top: 20px;
            padding: 0;
            text-align: left;
        }

        .logo span {
            font-size: 1.5rem;
        }

        .logo img {
            width: auto;
            height: 25px;
            margin-right: 10px;
        }
    }

    @media (max-width: 480px) {
        .menu-toggle {
            margin-right: 10px;
        }
    }
</style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>