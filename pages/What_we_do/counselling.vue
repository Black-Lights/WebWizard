<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Counselling</h1>
    <p>Counselling content goes here.</p>
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
        { label: 'What We Do', path: '/What-we-do' },
        { label: 'Counselling', path: '/What_we_do/counselling' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>


<style scoped>

</style>
