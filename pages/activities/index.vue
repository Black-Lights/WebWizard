<script setup>
// Import components to be used within this component
import circularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';
import textComponent from '~/components/main/textComponent.vue';

</script>

<template>
  <div>
    <!-- Breadcrumbs navigation component -->
    <Breadcrumbs :crumbs="breadcrumbs" />

    <!-- Top section with title and description -->

    <div class="top-section">
      <div>
        <h1>Our Activities</h1>
      </div>
      <p>Guiding Light organizes a range of activities aimed at community engagement and personal development. Join us in making a positive impact.</p>
    </div>
    <!-- Activities text component -->
    <div>
      <text-component
        title="About Our Activities"
        text="Our activities are designed to foster community engagement and personal growth. We offer workshops, seminars, and events to help individuals and the community thrive.">
      </text-component>
    </div>
    <!-- Section displaying top services with circular image content boxes -->

    <div class="card-section">
      <circular-img-content-box-left
        v-if="topActivities.length > 0"
        :title="topActivities[0].name"
        :text="topActivities[0].brief_description"
        :image="topActivities[0].img_url"
        :link="`/activities/${topActivities[0].id}`"
      />
      <circular-img-content-box-right
        v-if="topActivities.length > 1"
        :title="topActivities[1].name"
        :text="topActivities[1].brief_description"
        :image="topActivities[1].img_url"
        :link="`/activities/${topActivities[1].id}`"
      />
    </div>
    <!-- Additional text component about other projects and services -->
    <div>
      <text-component
        title="Other Projects and Services"
        text="In addition to our activities, we manage various projects and offer services that aim to improve community well-being. Explore our initiatives to learn more.">
      </text-component>
    </div>

    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <circular-image-card
          title="Services"
          text="We provide various services including healthcare, education, and community support."
          image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_services_01.jpg"
          link="/services"
        />
        <circular-image-card
          title="Projects"
          text="Discover our various projects that aim to create a positive impact in the community."
          image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_project_01.jpg"
          link="/projects"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { createClient } from '@supabase/supabase-js';

export default {
  head() {
    return {
      title: 'Activities - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover the various activities organized by Guiding-Light for community engagement and personal development.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Activities, Community Engagement, Workshops' },
      ],
    };
  },
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      topActivities: [],
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'Activities', path: '/activities' },
      ];
    },
  },
  methods: {
    async fetchTopActivities() {
      const supabase = createClient(this.$config.SUPABASE_URL, this.$config.SUPABASE_KEY);
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .order('priority', { ascending: false })
        .limit(2);

      if (error) {
        console.error(error);
      } else {
        this.topActivities = data;
      }
    },
    truncateText(text, length = 50) {
      return text.split(' ').slice(0, length).join(' ') + '...';
    },
  },
  async mounted() {
    await this.fetchTopActivities();
  },
};
</script>

<style scoped>
.top-section {
  background: url('static/img_activities_01.jpg') no-repeat center center fixed;
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

.card-section {
  background: url('static/img_activities_02.jpg') no-repeat center center fixed;
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

.circular-card-section {
  background: url('static/img_activities_03.jpg') no-repeat center center fixed;
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
