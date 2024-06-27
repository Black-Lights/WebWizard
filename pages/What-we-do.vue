<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    What We Do
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
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>


<style scoped>

</style>
