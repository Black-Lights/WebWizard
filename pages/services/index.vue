<script setup>
// Import necessary components
import circularImgContentBoxLeft from '~/components/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/CircularImageCard.vue';
import textComponent from '~/components/textComponent.vue';

</script>

<template>
  <div>
    <!-- Breadcrumbs navigation component -->
    <Breadcrumbs :crumbs="breadcrumbs" />

    <!-- Top section with a title and description -->
    <div class="top-section">
      <div>
        <h1>Our Services</h1>
      </div>
      <p>Guiding Light offers a wide range of services aimed at improving the well-being of our community. From healthcare to education, our dedicated team is here to support you.</p>
    </div>

    <!-- Text component with information about the services -->
    <div>
      <text-component
        title="About Our Services"
        text="At Guiding Light, we provide a variety of services designed to support the community. Our services include healthcare, education, and community support, delivered by a team of committed professionals.">
      </text-component>
    </div>

    <!-- Section displaying top services using circular image content boxes -->
    <div class="card-section">
      <circular-img-content-box-left
        v-if="topServices.length > 0"
        :title="topServices[0].name"
        :text="topServices[0].brief_description"
        :image="topServices[0].img_url"
        :link="`/services/${topServices[0].id}`"
      />
      <circular-img-content-box-right
        v-if="topServices.length > 1"
        :title="topServices[1].name"
        :text="topServices[1].brief_description"
        :image="topServices[1].img_url"
        :link="`/services/${topServices[1].id}`"
      />
    </div>

    <!-- Additional text component for other projects and activities -->
    <div>
      <text-component
        title="Other Projects and Activities"
        text="In addition to our services, we manage various projects and activities that aim to foster community growth and well-being. Explore our initiatives to learn more.">
      </text-component>
    </div>

    <!-- Section with circular image cards for projects and activities -->
    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <circular-image-card
          title="Projects"
          text="Discover our various projects that aim to create a positive impact in the community."
          image='https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_project_01.jpg'
          link="/projects"
        />
        <circular-image-card
          title="Activities"
          text="Join our activities such as workshops, seminars, and community events."
          image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_activities_01.jpg"
          link="/activities"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Import Breadcrumbs component
import Breadcrumbs from '@/components/Breadcrumbs.vue';
// Import Supabase client for fetching data
import { createClient } from '@supabase/supabase-js';

export default {
  // Set the head information for the page
  head() {
    return {
      title: 'Services - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn about the different services offered by Guiding-Light to support and uplift the community.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Services, Community Support, Assistance' },
      ],
    };
  },
  components: {
    Breadcrumbs, // Register Breadcrumbs component
  },
  data() {
    return {
      topServices: [], // Initialize topServices array
    };
  },
  computed: {
    // Compute breadcrumbs data for Breadcrumbs component
    breadcrumbs() {
      return [
        { label: 'Services', path: '/services' },
      ];
    },
  },
  methods: {
    // Method to fetch top services from the database
    async fetchTopServices() {
      const supabase = createClient(this.$config.SUPABASE_URL, this.$config.SUPABASE_KEY);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('priority', { ascending: false })
        .limit(2);

      if (error) {
        console.error(error);
      } else {
        this.topServices = data;
      }
    },
    // Method to truncate text to a specified length
    truncateText(text, length = 50) {
      return text.split(' ').slice(0, length).join(' ') + '...';
    },
  },
  // Fetch top services when the component is mounted
  async mounted() {
    await this.fetchTopServices();
  },
};
</script>

<style scoped>
/* Styles for the top section */
.top-section {
  background: url('static/img_services_01.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  height: 600px;
  margin-top: 20px;
  text-align: center;
}

.top-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.top-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

/* Styles for the card section */
.card-section {
  background: url('static/img_services_02.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.card-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.card-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

/* Styles for the circular card section */
.circular-card-section {
  background: url('static/img_services_03.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.circular-card-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.circular-card-section p {
  margin-top: 2px;
  margin-bottom: 30px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

/* Styles for the circular image card container */
.circular-image-card-container {
  display: flex;
  justify-content: center;
  gap: 8%;
  flex-wrap: wrap;
}

.circular-image-card-container div {
  max-width: 700px; /* Set a maximum width for the cards */
  flex: 1;
}

.circular-image-card-container circular-image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: break-word; /* Ensure text wraps appropriately */
}

/* Responsive styles for smaller screens */
@media (max-width: 600px) {
  .top-section {
    padding: 20px;
  }

  .top-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .top-section p {
    font-size: 1em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .card-section {
    padding: 20px;
  }

  .card-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .card-section p {
    font-size: 1em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .circular-card-section {
    padding: 20px;
  }

  .circular-card-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .circular-card-section p {
    font-size: 1em;
    margin-top: 2px;
    margin-bottom: 30px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .circular-image-card-container {
    flex-direction: column;
  }
}
</style>
