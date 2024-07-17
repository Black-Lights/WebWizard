<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div
      class="top-section"
      :style="{ backgroundImage: `url(${activities.img_url})` }"
    >
      <div>
        <h1>{{ activities.name }}</h1>
      </div>
      <p>Organised by: {{ maintainer.name }}</p>
    </div>
    <div class="text-section">
      <!-- Render the HTML content from the description field -->
      <div v-html="activities.description"></div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default {
  head() {
    const title = this.activities ? this.activities.name : "Loading...";
    const description = this.activities
      ? `Discover more about the ${this.activities.name} activity and its impact.`
      : "Activity details";
    const keywords = this.activities
      ? `${this.activities.name}, Guiding-Light, Activities, Community Impact`
      : "Activities";

    return {
      title: `${title} - Activities - Guiding-Light`,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "keywords", name: "keywords", content: keywords },
      ],
    };
  },

  async asyncData({ params, $supabase }) {
    const { data: activities, error } = await $supabase
      .from("activities")
      .select("*, persons!activities_maintained_by_fkey(id, name)")
      .eq("id", params.id)
      .single();
    if (error) throw error;

    // Create breadcrumbs with only the activities name
    const breadcrumbs = [
      { label: "Activities", path: "/activities" },
      { label: activities.name, path: `/activities/${activities.id}` },
    ];

    return {
      activities,
      maintainer: activities.persons,
      breadcrumbs,
    };
  },
  components: {
    Breadcrumbs,
  },
};
</script>

<style scoped>
.top-section {
  background: url("static/img_proj_counsel_01.jpg") no-repeat center center
    fixed;
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
}
</style>
