<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Medical Camps</h1>
    <p>Medical Camps content goes here.</p>
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
        { label: 'Activities', path: '/Activities-' },
        { label: 'Medical Camps', path: '/Activities/medical_camps' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
