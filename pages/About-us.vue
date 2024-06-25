<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    About Us Info
    <div>
      <PageBody />
    </div>
  </div>
</template>

<script>
import PageBody from '~/components/PageBody.vue'

export default {
  data() {
    return {
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        // Add more breadcrumbs as needed
      ]
    };
  },
  components: {
    PageBody
  }
}
</script>

<style scoped>

</style>
