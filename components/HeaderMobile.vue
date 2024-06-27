<template>
  <header class="site-header bg-cyan-100 p-4 flex justify-center items-center max-h-min">
    <div class="logo">
      <NuxtLink to="/">
        <img src="image" alt="GuidingLight Logo" class="logo-image h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderMobile'
}
</script>

<style scoped>
.site-header {
  /* Removed the fixed background color and padding as they are now managed by Tailwind classes */
}

.logo .logo-image {
  /* Removed the fixed height as it is now managed by Tailwind classes */
}
</style>

