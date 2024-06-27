<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    Advocacy
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
        { label: 'We Provide', path: '/We-provide' },
        { label: 'Advocacy', path: '/We_provide/advocacy' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
