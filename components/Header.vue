
<template>
  <header class="site-header" id="head">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/logo5.png" alt="GuidingLight Logo" class="logo-image" />
      </NuxtLink>
    </div>
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
</style>
