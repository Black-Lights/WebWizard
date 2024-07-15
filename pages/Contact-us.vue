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
  head() {
    return {
      title: 'Contact Us - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Get in touch with Guiding-Light for general inquiries, volunteer opportunities, or donations.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Contact Us, General Enquiries, Volunteer, Donate' },
      ],
    };
  },
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
  background: url('static/img_contact_us.jpg') no-repeat center center fixed; background-size: cover;
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
