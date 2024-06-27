<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Fund Raising</h1>
    <PageBody />
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
        {label: 'Activities', path: '/Activities-'},
        {label: 'Fund raising', path: '/Activities-/fund_raising'}
        // Add more breadcrumb items as needed
      ];
    }
  }
}

</script>



<style scoped>

</style>
