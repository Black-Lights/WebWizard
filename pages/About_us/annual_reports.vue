<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    Annual Reports

    <div>
      <PageBody />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';


export default {
  head() {
    return {
      title: 'Annual Reports - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Browse through Guiding-Light’s annual reports to see our achievements and progress.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Annual Reports, Reports, Achievements' },
      ],
    };
  },
  components: {
    Breadcrumbs,
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'About Us', path: '/About-us' },
        { label: 'Annual Reports', path: '/About_us/annual_reports' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
