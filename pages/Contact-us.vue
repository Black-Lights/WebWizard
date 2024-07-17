<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import ContactForm from "@/components/ContactForm.vue";
import MapComponent from "~/components/MapComponent.vue";
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="contact-section">
      <div>
        <h1>Contact Us</h1>
      </div>
      <p>
        For inquiries or support, reach out to Guiding Light by filling the
        following form. We’re here to help and support you.
      </p>
      <ContactForm />
    </div>

    <div>
      <text-component
        title="Emergency Contacts"
        text="Phone: 555 (855 845 6258), Email: support@guiding.light.com, Address: Via Larga 12, Milan Italy"
      >
      </text-component>
    </div>
    <div id="map">
      <map-component />
    </div>
    <div id="faq">
      <text-component
        title="Frequently Asked Questions"
        text="Welcome to our FAQ section! Here, you'll find answers to common questions"
      >
      </text-component>
    </div>
    <div class="faq">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <FaqItem
              v-for="(faq, index) in faqs"
              :key="index"
              :question="faq.question"
              :answer="faq.answer"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import FaqItem from "~/components/FaqItem.vue";

export default {
  components: {
    FaqItem,
  },
  data() {
    return {
      faqs: [
        {
          question:
            " What types of services does Guiding Light offer to survivors of domestic violence?",
          answer:
            "Guiding Light provides a comprehensive range of services including individual counseling, skill-building workshops, self-defense training, yoga and meditation sessions, medical camps, health check-ups, and advocacy services. These programs are designed to address the physical, emotional, and psychological needs of survivors, helping them heal and rebuild their lives.",
        },
        {
          question:
            "How can I participate in the self-defense training sessions?",
          answer:
            'To participate in our self-defense training sessions, you can visit our website and check the "Self-Defense Activities" section for upcoming workshop dates and registration details. Our sessions are led by trained professionals and are accessible to individuals of all skill levels.',
        },
        {
          question:
            "Are the medical services provided by Guiding Light free of charge?",
          answer:
            "Yes, Guiding Light partners with local healthcare providers to offer free or low-cost medical services through our health check-ups and medical camps. These services include medical check-ups, screenings, and treatments to ensure that survivors receive the necessary healthcare in a safe and supportive environment.",
        },
        {
          question: "How does Guiding Light support survivors legally?",
          answer:
            "Guiding Light collaborates with legal professionals and advocacy groups to provide survivors with legal support. This includes representation, advice, and assistance with protective orders and custody arrangements. Our advocacy efforts aim to protect the rights of survivors and connect them with essential legal resources.",
        },
        {
          question:
            "How can I get involved with Guiding Light's awareness campaigns?",
          answer:
            ' You can get involved with our awareness campaigns by visiting the "Education and Awareness" section of our website. We regularly update information on upcoming events, community outreach activities, and educational workshops. Volunteers and supporters are always welcome to join our efforts in raising public awareness about domestic violence and supporting survivors',
        },
      ],
    };
  },
  head() {
    return {
      title: "Contact Us - Guiding-Light",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Get in touch with Guiding-Light for general inquiries, volunteer opportunities, or donations.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Guiding-Light, Contact Us, General Enquiries, Volunteer, Donate",
        },
      ],
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { label: "Contact Us", path: "/contact-us" },
        // Add more breadcrumb items as needed
      ];
    },
  },
};
</script>

<style scoped>
.contact-section {
  background: url("static/img_contact_us.jpg") no-repeat center center fixed;
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
.faq {
  background: url("static/img_proj_counsel_02.jpg") no-repeat center center
    fixed;
  background-size: cover;
  padding: 40px;
  margin: 0;
  text-align: left;
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
