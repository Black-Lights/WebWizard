
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
  background-color: #f6f6f8;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo .logo-image {
  height: 120px; /* Adjust the height as needed */
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
