<template>
  <footer class="site-footer">
    <div class="footer-content">
      <nav class="footer-nav">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/About-us">About</NuxtLink></li>
          <li><NuxtLink to="/We-provide">Services</NuxtLink></li>
          <!-- Add more navigation links as needed -->
        </ul>
      </nav>
      <div class="social-links">
        <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
        <a href="https://x.com/?lang=en"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
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
  background-color: #333;
  color: #fff;
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
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: #1abc9c;
}

.social-links a {
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.footer-bottom {
  margin-top: 1rem;
  text-align: center;
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
