<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Skill Development</h1>
    <p>Skill Development content goes here.</p>
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
        { label: 'Missions', path: '/What_we_do/edu_programs' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>


<style scoped>

</style>
