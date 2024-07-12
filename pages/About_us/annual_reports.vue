<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    Annual Reports

    <div>
      <PageBody />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';


export default {
  components: {
    Breadcrumbs,
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'About Us', path: '/About-us' },
        { label: 'Annual Reports', path: '/About_us/annual_reports' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
