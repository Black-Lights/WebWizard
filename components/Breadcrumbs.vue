<template>
  <nav class="breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <!-- Iterate over breadcrumbs and apply key to list items -->
      <li v-for="(crumbs, index) in crumbs" :key="'breadcrumb-' + index">
        <NuxtLink :to="crumbs.path">{{ crumbs.label }}</NuxtLink>
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
  background-color: #f0f0f0;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

li {
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: #1abc9c;
}

a:hover {
  text-decoration: underline;
}
</style>
