<script setup>
import RectangularContentBoxLeft from "~/components/RectangularContentBoxLeft";
import CircularImageCard from "~/components/CircularImageCard.vue";
import textComponent from "~/components/textComponent.vue";
import RectangularContentBoxRight from "~/components/RectangularContentBoxRight.vue";
</script>

<template>
  <div>
    <div class="top-section">
      <div class="text-section">
        <h1>Explore Our Initiatives</h1>
        <p>
          Discover the diverse projects and services Guiding Light offers to
          empower women and make a positive impact in our community. From
          education to wellness, our initiatives are designed to foster growth
          and resilience.
        </p>
      </div>
    </div>

    <div class="card-section">
      <rectangular-content-box-left
        title="Activities"
        text="Activities including counseling, skill-building workshops, self-defense training, yoga, and meditation. These programs support survivors of domestic violence, promoting healing, resilience, and empowerment. Join us to build a stronger, healthier future."
        image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_activities_01.jpg"
        link="/activities"
      />
      <rectangular-content-box-right
        title="Services"
        text="We offer counseling, skill-building workshops, self-defense training, yoga, meditation, and medical camps. Our comprehensive services support survivors of domestic violence, promoting healing, resilience, and empowerment for a brighter future."
        image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_services_01.jpg"
        link="/services"
      />
    </div>
    <div>
      <text-component title="We're here for you every step of the way." text="">
      </text-component>
    </div>
    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <circular-image-card
          v-if="latestProjects.length > 1"
          :title="latestProjects[1].name"
          :text="latestProjects[1].brief_description"
          :image="latestProjects[1].img_url"
          :link="`/projects/${latestProjects[1].id}`"
        />
        <circular-image-card
          v-if="latestProjects.length > 0"
          :title="latestProjects[0].name"
          :text="latestProjects[0].brief_description"
          :image="latestProjects[0].img_url"
          :link="`/projects/${latestProjects[0].id}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "@supabase/supabase-js";

export default {
  head() {
    return {
      title: "Projects - Guiding-Light",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Explore the various projects undertaken by Guiding-Light to make a positive impact.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Guiding-Light, Projects, Community Initiatives, Impact",
        },
      ],
    };
  },
  components: {},
  data() {
    return {
      latestProjects: [],
    };
  },
  computed: {
    breadcrumbs() {
      return [{ label: "Projects", path: "/projects" }];
    },
  },
  methods: {
    async fetchLatestProjects() {
      const supabase = createClient(
        this.$config.SUPABASE_URL,
        this.$config.SUPABASE_KEY
      );
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("date", { ascending: false })
        .limit(2);

      if (error) {
        console.error(error);
      } else {
        this.latestProjects = data;
      }
    },
    truncateText(text, length = 50) {
      return text.split(" ").slice(0, length).join(" ") + "...";
    },
  },
  async mounted() {
    await this.fetchLatestProjects();
  },
};
</script>

<style scoped>
.top-section {
  background: url("https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_home_03.jpg")
    no-repeat center center fixed;
  background-size: cover;
  padding: 0;
  height: 600px;
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* This will push the content to the bottom */
}

.text-section {
  background-color: rgba(255, 255, 255, 0.7) !important;
  width: 80%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  border-radius: 8px;
}

.text-section h1 {
  margin: 2px;
  font-size: 2.5em;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.text-section p {
  margin: 2px 100px;
  color: #000000;
  font-size: 1.3em;
  line-height: 1.6;
  text-align: justify;
  display: inline-block;
  padding: 10px;
}

.card-section {
  background-color: #dcd7d7;
  /* background: url('static/img_project_02.jpg') no-repeat center center fixed;*/
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
  background: url("https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_home_05.jpg")
    no-repeat center center fixed;
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

  .text-section {
    padding: 20px;
  }

  .text-section h1 {
    font-size: 1.5em;
    margin: 2px;
    color: #000000;
    text-align: justify;
    display: inline-block;
  }

  .text-section p {
    font-size: 1em;
    margin: 2px;
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
