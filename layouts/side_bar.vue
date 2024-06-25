<template>
  <aside class="sidebar">
    <ul class="menu">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f7f9fc;
  padding: 1rem;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 0.5rem;
}

.menu a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.menu a:hover {
  text-decoration: underline;
}
</style>
