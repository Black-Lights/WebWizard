<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="contact-section">
      <h1>Contact Us</h1>
      <p>Contact Us content goes here.</p>
      <ContactForm  />
    </div>
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
.contact-section {
  /* background: url('https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed;*/
  /* background: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed;*/
  background: url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed; background-size: cover;
  padding: 40px;
  margin: 20px 0; /* Add some margin for spacing */

}

.contact-section h1,
.contact-section p {
  color: #ffffff;
  text-align: center;
}


@media (max-width: 600px) {
  .contact-section {
    padding: 20px;
  }

  .contact-section h1 {
    font-size: 1.5em;
  }

  .contact-section p {
    font-size: 1em;
  }
}
</style>
