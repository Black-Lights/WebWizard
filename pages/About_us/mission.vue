<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :items="breadcrumbs" />
    <h1>Mission</h1>
    <div>
      <PageBody />
    </div>
  </div>
</template>


<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import PageBody from '@/components/PageBody.vue'


export default {
  components: {
    Breadcrumbs,
    PageBody
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'About Us', path: '/about' }
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
