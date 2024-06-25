<template>
  <header class="site-header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/logo5.png" alt="GuidingLight Logo" class="logo-image" />
      </NuxtLink>
    </div>
<!--    <nav class="main-nav">-->
<!--      <ul>-->
<!--        <li><NuxtLink to="/">Home</NuxtLink></li>-->
<!--        <li><NuxtLink to="/about">About</NuxtLink></li>-->
<!--        <li><NuxtLink to="/services">Services</NuxtLink></li>-->
<!--        &lt;!&ndash; Add more navigation links as needed &ndash;&gt;-->
<!--      </ul>-->
<!--    </nav>-->
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.site-header {
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo .logo-image {
  height: 100px; /* Adjust the height as needed */
}
/*
.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.main-nav li {
  margin-right: 1rem;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.main-nav a:hover {
  color: #1abc9c;
}
*/
</style>





<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <header>&ndash;&gt;-->
<!--&lt;!&ndash;    <nav class="navbar">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="logo">&ndash;&gt;-->
<!--&lt;!&ndash;        <NuxtLink to="/">MyCoolSite</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <ul class="nav-links">&ndash;&gt;-->
<!--&lt;!&ndash;        <li><NuxtLink to="/">Home</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li><NuxtLink to="/about">About</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li><NuxtLink to="/contact">Contact</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;      </ul>&ndash;&gt;-->
<!--&lt;!&ndash;    </nav>&ndash;&gt;-->
<!--&lt;!&ndash;  </header>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: 'Header'&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
<!--&lt;!&ndash;header {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #3498db;&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 1rem 2rem;&ndash;&gt;-->
<!--&lt;!&ndash;  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.navbar {&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: space-between;&ndash;&gt;-->
<!--&lt;!&ndash;  align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.logo {&ndash;&gt;-->
<!--&lt;!&ndash;  font-size: 1.5rem;&ndash;&gt;-->
<!--&lt;!&ndash;  font-weight: bold;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links {&ndash;&gt;-->
<!--&lt;!&ndash;  list-style: none;&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  gap: 1rem;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links li {&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links a {&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  text-decoration: none;&ndash;&gt;-->
<!--&lt;!&ndash;  font-weight: 500;&ndash;&gt;-->
<!--&lt;!&ndash;  transition: color 0.3s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links a:hover {&ndash;&gt;-->
<!--&lt;!&ndash;  color: #1abc9c;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
