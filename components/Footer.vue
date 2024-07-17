<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-content">
      <div class="footer-column logo-column">
        <NuxtLink to="/#head" aria-label="Go to Home">
          <img src="/logo-white-back.png" alt="Logo" class="footer-logo" />
        </NuxtLink>
      </div>
      <div class="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>
            <NuxtLink to="/Contact-us#faq" aria-label="FAQ">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Contact-us#map" aria-label="Map">Map</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Services</h3>
        <ul>
          <li v-for="service in services" :key="service.id">
            <NuxtLink :to="`/services/${service.id}`" aria-label="Service">{{
              service.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Organization</h3>
        <ul>
          <li>
            <NuxtLink to="/contact-us" aria-label="Contact Us"
              >Contact Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/projects" aria-label="Projects">Projects</NuxtLink>
          </li>
          <li><NuxtLink to="/blogs" aria-label="Blogs">Blogs</NuxtLink></li>
          <li>
            <NuxtLink to="/activities" aria-label="Activities"
              >Activities</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Social</h3>
        <div class="social-links" aria-labelledby="footer-social">
          <v-btn
            icon
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
          >
            <v-icon size="24">mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <v-icon size="24">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
          >
            <v-icon size="24">mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <v-icon size="24">mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p style="color: #b5acac; opacity: 0.7">
        &copy; 2024 Guiding Light. All rights reserved. | Chatbot icon from
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noopener noreferrer"
          >FreePik</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      services: [],
    };
  },
  async fetch() {
    const { data, error } = await this.$supabase
      .from("services")
      .select("id, name")
      .order("priority", { ascending: true })
      .limit(4);

    if (error) {
      console.error(error);
    } else {
      this.services = data;
    }
  },
};
</script>

<style scoped>
.site-footer {
  background-color: #1d2641;
  color: #ffffff;
  padding: 2rem 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-column {
  flex: 1;
  margin: 1rem;
}

.logo-column {
  flex: 1 100%;
  text-align: center;
}

.footer-logo {
  max-width: 150px;
  margin-bottom: 1rem;
}

.footer-column h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: #8a8585;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #69c3a0;
}

.social-links {
  display: flex;
}

.social-links .v-btn {
  color: #ffffff !important;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.social-links .v-btn:hover {
  color: #afeeee !important;
}

.footer-bottom {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    flex: 1 100%;
    text-align: center;
    margin: 0.5rem 0;
  }

  .social-links {
    justify-content: center;
    margin-top: 1rem;
  }

  .footer-bottom {
    margin-top: 1rem;
  }
}
</style>
