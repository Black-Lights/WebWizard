<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-content">
      <nav class="footer-nav" aria-labelledby="footer-navigation">
        <ul role="navigation">
          <li><NuxtLink to="/" aria-label="Go to Home">Home</NuxtLink></li>
          <li><NuxtLink to="/About-us" aria-label="About Us">About</NuxtLink></li>
          <li><NuxtLink to="/We-provide" aria-label="Our Services">Services</NuxtLink></li>
          <!-- Add more navigation links as needed -->
        </ul>
      </nav>
      <div class="social-links" aria-labelledby="footer-social">
        <v-btn icon href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
          <v-icon size="24">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com/" target="_blank" aria-label="Twitter">
          <v-icon size="24">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
          <v-icon size="24">mdi-instagram</v-icon>
        </v-btn>
        <!-- Add more social media icons or links as needed -->
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2024 Guiding Light. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.site-footer {
  background-color: #afeeee;
  color: #333; /* Adjust text color for better contrast */
  padding: 2rem 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.footer-nav li {
  margin-right: 1rem;
}

.footer-nav a {
  color: #333; /* Adjust link color for better contrast */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: #1abc9c;
}

.social-links {
  display: flex;
}

.social-links .v-btn {
  color: #333; /* Adjust icon color for better contrast */
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.footer-bottom {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem; /* Adjust font size for copyright text */
}
</style>





<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <footer>&ndash;&gt;-->
<!--&lt;!&ndash;    <p>&copy; 2024 MyCoolSite. All rights reserved.</p>&ndash;&gt;-->
<!--&lt;!&ndash;  </footer>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: 'Footer'&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
<!--&lt;!&ndash;footer {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #2c3e50;&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 1rem 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
