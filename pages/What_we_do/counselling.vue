<script setup>

</script>
<template>
  <v-container>
    <div>
      <Breadcrumbs :crumbs="breadcrumbs" />
      <h1 style="text-align: center;">Counselling</h1>
    </div>

  </v-container>
</template>

<script>

import Breadcrumbs from "~/components/Breadcrumbs.vue";


export default {
  data() {
    return {
      breadcrumbs: [
        // { label: 'Home', path: '/' },
        { label: 'What We Do', path: '/What-we-do' },
        { label: 'Counselling', path: '/What_we_do/counselling' },
        // Add more breadcrumbs as needed
      ]
    };
  },
  components: {
    Breadcrumbs,
  }
}


</script>
<style scoped>
</style>
