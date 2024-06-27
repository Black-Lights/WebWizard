<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    Activities

    <div>
      <PageBody />
    </div>
  </div>
</template>


<script>
import PageBody from '~/components/PageBody.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  components: {
    PageBody,
    Breadcrumbs
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'Activities', path: '/Activities-' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
