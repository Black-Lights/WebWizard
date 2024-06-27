<template>
  <nav class="breadcrumbs bg-blue-200 p-4">
    <ul class="flex flex-wrap space-x-2 text-sm md:text-base">
      <li>
        <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="'breadcrumb-' + index">
        <span class="breadcrumb-arrow"> > </span>
        <NuxtLink :to="crumb.path" class="breadcrumb-link">{{ crumb.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.breadcrumbs {
  padding: 1rem;
  background-color: #afeeee;
}

.breadcrumb-link {
  text-decoration: none;
  color: black;
  transition: text-decoration 0.3s;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.breadcrumb-arrow {
  margin: 0 0.5rem;
  color: black;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}
</style>
