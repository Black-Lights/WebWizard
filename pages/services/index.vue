<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <div>
        <h1>Our Services</h1>
      </div>
      <p>Guiding Light offers a wide range of services aimed at improving the well-being of our community. From healthcare to education, our dedicated team is here to support you.</p>
    </div>
    <div class="text-section">
      <h1 class="wrap">About Our Services</h1>
      <p>At Guiding Light, we provide a variety of services designed to support the community. Our services include healthcare, education, and community support, delivered by a team of committed professionals.</p>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        v-if="topServices.length > 0"
        :title="topServices[0].name"
        :text="truncateText(topServices[0].description)"
        :image="topServices[0].img_url"
        :link="`/services/${topServices[0].id}`"
      />
      <circular-img-content-box-right
        v-if="topServices.length > 1"
        :title="topServices[1].name"
        :text="truncateText(topServices[1].description)"
        :image="topServices[1].img_url"
        :link="`/services/${topServices[1].id}`"
      />
    </div>
    <div class="text-section">
      <h1>Other Projects and Activities</h1>
      <p>In addition to our services, we manage various projects and activities that aim to foster community growth and well-being. Explore our initiatives to learn more.</p>
    </div>
    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <circular-image-card
          title="Projects"
          text="Discover our various projects that aim to create a positive impact in the community."
          image='static/img_project_04.jpg'
          link="/projects"
        />
        <circular-image-card
          title="Activities"
          text="Join our activities such as workshops, seminars, and community events."
          image="static/img_services_02.jpg"
          link="/activities"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import CircularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import CircularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';
import { createClient } from '@supabase/supabase-js';

export default {
  components: {
    Breadcrumbs,
    CircularImgContentBoxLeft,
    CircularImgContentBoxRight,
    CircularImageCard,
  },
  data() {
    return {
      topServices: [],
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'Services', path: '/services' },
      ];
    },
  },
  methods: {
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
    truncateText(text, length = 50) {
      return text.split(' ').slice(0, length).join(' ') + '...';
    },
  },
  async mounted() {
    await this.fetchTopServices();
  },
};
</script>

<style scoped>
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

.text-section {
  background-color: #f6f6f8;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.text-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.text-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

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

  .text-section {
    padding: 20px;
  }

  .text-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .text-section p {
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
