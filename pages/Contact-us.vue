<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="contact-section">
      <div>
        <h1>Contact Us</h1>
      </div>
      <p>For inquiries or support, reach out to Guiding Light by filling the following form. We’re here to help and support you.</p>
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
  background: url('static/img_contact_us.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin-top: 20px;
  text-align: center;

}

.contact-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.contact-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}


@media (max-width: 600px) {
  .contact-section {
    padding: 20px;
  }

  .contact-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .contact-section p {
    font-size: 1em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }
}
</style>
