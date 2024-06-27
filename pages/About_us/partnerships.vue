<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    Partnerships
    <PageBody />
  </div>

</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import PageBody from '@/components/PageBody.vue';


export default {
  components: {
    Breadcrumbs,
    PageBody
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'About Us', path: '/about' },
        { label: 'Partner', path: '/About_us/partnerships' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
