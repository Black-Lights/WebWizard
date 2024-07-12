<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Contact Us</h1>
    <p>Contact Us content goes here.</p>
    <ContactForm />
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return [
        { label: 'Contact Us', path: '/contact-us' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>
/* Add some basic styling if needed */
</style>
