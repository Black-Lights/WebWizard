<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <div>
      <h1>Our Projects</h1>
      </div>
      <p>Guiding Light is managing numerous impactful projects with a dedicated team. We strive to create positive change in the community through our various initiatives.</p>
    </div>
    <div class="text-section">
      <div>
      <h1 class="wrap">About Our Projects</h1>
      </div>
      <p>Our organization, Guiding Light, is committed to managing impactful projects. We have a dedicated team focused on creating positive change in the community through various initiatives.</p>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        v-if="latestProjects.length > 0"
        :title="latestProjects[0].name"
        :text="truncateText(latestProjects[0].description)"
        :image="latestProjects[0].img_url"
        :link="`/projects/${latestProjects[0].id}`"
      />
      <circular-img-content-box-right
        v-if="latestProjects.length > 1"
        :title="latestProjects[1].name"
        :text="truncateText(latestProjects[1].description)"
        :image="latestProjects[1].img_url"
        :link="`/projects/${latestProjects[1].id}`"
      />
    </div>
    <div class="text-section">
      <div>
      <h1>Other Activities and Services</h1>
      </div>
      <p>Besides managing projects, we offer various services and activities aimed at enhancing community well-being. Our initiatives include educational programs, healthcare services, and community outreach efforts.</p>
    </div>
    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <circular-image-card
          title="Services"
          text="We provide various services including healthcare, education, and community support."
          image="static/img_project_04.jpg"
          link="/services"
        />
        <circular-image-card
          title="Activities"
          text="Join our activities such as workshops, seminars, and community events."
          image="static/img_project_05.jpg"
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
      latestProjects: [],
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'Projects', path: '/projects' },
      ];
    },
  },
  methods: {
    async fetchLatestProjects() {
      const supabase = createClient(this.$config.SUPABASE_URL, this.$config.SUPABASE_KEY);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('date', { ascending: false })
        .limit(2);

      if (error) {
        console.error(error);
      } else {
        this.latestProjects = data;
      }
    },
    truncateText(text, length = 50) {
      return text.split(' ').slice(0, length).join(' ') + '...';
    },
  },
  async mounted() {
    await this.fetchLatestProjects();
  },
};
</script>

<style scoped>
.top-section {
  background: url('static/img_project_01.jpg') no-repeat center center fixed;
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
  background: url('static/img_project_02.jpg') no-repeat center center fixed;
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
  background: url('static/img_project_03.jpg') no-repeat center center fixed;
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
