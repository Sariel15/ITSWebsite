<template>
  <div class="root">
    <img class="background" ref="background" src="../assets/bg-5.jpg" />

    <div class="section section-1" ref="first">
      <div>
        <h1>Building Gaps, Bridging Future.</h1>
      </div>
    </div>
    <div class="section section-2" ref="second">
      <div>
        <h2>IT Squarehub</h2>
        <p>Your Shortcut to Tech Brilliance.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

import AboutSection from './AboutSection.vue'; // Import the AboutSection component


export default {
  name: "ParallaxEffect",
  setup() {
    const foreground = ref(null);
    const background = ref(null);
    const first = ref(null);
    const second = ref(null);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // decreases as user scrolls
      if (first.value) {
        first.value.style.opacity =
          (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100;
      }

      // increases as user scrolls
      if (second.value) {
        second.value.style.opacity =
          (scrollY + window.innerHeight - second.value.offsetTop) / 100;
      }

      const maxBackgroundSize = 120;
      const backgroundSize = scrollY / (maxBackgroundSize - 100); // increases as user scrolls

      // zoom the background at a slower rate
      if (background.value) {
        background.value.style.transform =
          'scale(' + (100 + backgroundSize * 0.4) / 100 + ')';
      }

      if (foreground.value) {
        foreground.value.style.transform =
          'scale(' + (100 + backgroundSize) / 100 + ')';
      }
    };

    onMounted(() => {
      document.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll);
    });

    return {
      foreground,
      background,
      first,
      second,
    };
  },
};
</script>

<style>
img.background,
img.foreground {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;
  /* Scale proportionately */
  width: 100%;
  height: auto;
}

img.background {
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  opacity: 80%;
}

.section {
  min-height: 100vh;
  position: relative;
}

.section > div {
  position: fixed;
  color: white;
  /* centers this div */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.section-1 {
  margin-bottom: 500px; /* determines the gap between our two sections */
  font-size: 4em;
}

.section-1 h1 {
  font-size: 1.2em;
  margin-bottom: 40px;
  font-family: Verdana, sans-serif;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Adds a subtle shadow */
}

.section-2 h2 {
  font-size: 5em;
  margin-bottom: 40px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Adds a subtle shadow */
}

.section-2 {
  opacity: 0; /* defaults to 0 because it's not visible */
}

.section-2 img {
  max-width: 100%; /* Ensures the image doesn't exceed the container width */
  height: auto;    /* Maintains the aspect ratio */
  margin-top: 10px; /* Adds some space between the image and the text */
}

.section-2 p {
  line-height: 150%;
  font-size: 3em;
}

/* Media Queries for Responsiveness */

/* For tablets and smaller screens */
@media (max-width: 1024px) {
  .section-1 h1 {
    font-size: 2em;
  }

  .section-2 h2 {
    font-size: 3.5em;
  }

  .section-2 p {
    font-size: 2em;
  }
}

/* For mobile screens */
@media (max-width: 768px) {
  .section-1 h1 {
    font-size: 1em;
  }

  .section-2 h2 {
    font-size: 2.5em;
  }

  .section-2 p {
    font-size: 1.5em;
  }

  .section-2 img {
    margin-top: 20px;
  }
}

/* For very small screens (phones in portrait mode) */
@media (max-width: 480px) {
  .section-1 h1 {
    font-size: 0.5em;
  }

  .section-2 h2 {
    font-size: 2em;
  }

  .section-2 p {
    font-size: 1.2em;
  }

  .section-2 img {
    margin-top: 30px;
  }
}
</style>