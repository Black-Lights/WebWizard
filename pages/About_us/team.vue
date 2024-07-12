<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    Teams
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
        { label: 'Team', path: '/About_us/team' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}

</script>
<style scoped>

</style>
