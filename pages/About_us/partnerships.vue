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
  head() {
    return {
      title: 'Partners - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover the partners and collaborators of Guiding-Light who support our mission.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Partners, Collaborations, Supporters' },
      ],
    };
  },
  components: {
    Breadcrumbs,
    PageBody
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'About Us', path: '/About-us' },
        { label: 'Partner', path: '/About_us/partnerships' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>

</style>
