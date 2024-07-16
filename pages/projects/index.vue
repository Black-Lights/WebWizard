<script setup>
import circularImgContentBoxLeft from '~/components/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/CircularImageCard.vue';
import textComponent from '~/components/textComponent.vue';

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <div>
      <h1>Our Projects</h1>
      </div>
      <p>Guiding Light is managing numerous impactful projects with a dedicated team. We strive to create positive change in the community through our various initiatives.</p>
    </div>
    <div>
      <text-component
        title="Our Projects"
        text="Guiding Light is managing numerous impactful projects with a dedicated team. We strive to create positive change in the community through our various initiatives.">
      </text-component>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        v-if="latestProjects.length > 0"
        :title="latestProjects[0].name"
        :text="latestProjects[0].brief_description"
        :image="latestProjects[0].img_url"
        :link="`/projects/${latestProjects[0].id}`"
      />
      <circular-img-content-box-right
        v-if="latestProjects.length > 1"
        :title="latestProjects[1].name"
        :text="latestProjects[1].brief_description"
        :image="latestProjects[1].img_url"
        :link="`/projects/${latestProjects[1].id}`"
      />
    </div>
    <div>
      <text-component
        title="Other Activities and Services"
        text="Besides managing projects, we offer various services and activities aimed at enhancing community well-being. Our initiatives include educational programs, healthcare services, and community outreach efforts.">
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
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { createClient } from '@supabase/supabase-js';

export default {
  head() {
    return {
      title: 'Projects - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore the various projects undertaken by Guiding-Light to make a positive impact.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Projects, Community Initiatives, Impact' },
      ],
    };
  },
  components: {
    Breadcrumbs,
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
