<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="d-lg-none"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink to="/">Home</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/About-us">About Us</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in aboutUsItems" :key="item.title">
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/projects">Projects</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="project in projects" :key="project.id">
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink :to="`/projects/${project.id}`">{{ project.name }}</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/services">Services</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="service in services" :key="service.id">
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink :to="`/services/${service.id}`">{{ service.name }}</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/activities">Activities</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="activity in activities" :key="activity.id">
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink :to="`/activities/${activity.id}`">{{ activity.name }}</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/blogs">Blogs</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="blog in blogs" :key="blog.id">
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink :to="`/blogs/${blog.id}`">{{ blog.name }}</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/Contact-us">Contact Us</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in contactUsItems" :key="item.title">
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Mobile App Bar -->
    <v-app-bar app color="cyan" dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="logo">
          <img src="/logo5.png" alt="GuidingLight Logo" class="logo-image" />
        </div>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      aboutUsItems: [
        { title: 'Mission', link: '/About_us/mission' },
        { title: 'Team', link: '/About_us/team' },
        { title: 'Partners', link: '/About_us/partnerships' },
        { title: 'Annual Reports', link: '/About_us/annual_reports' },
      ],
      // blogsItems: [
      //   { title: 'Survivor stories', link: '/Blogs/survivor_stories' },
      //   { title: 'Expert Advice', link: '/Blogs/expert_advice' },
      //   { title: 'Legal rights and supports', link: '/Blogs/legal_rights' },
      // ],
      contactUsItems: [
        { title: 'General enquiries', link: '/Contact_Us/general_enquiries' },
        { title: 'Volunteer', link: '/Contact_Us/volunteer' },
        { title: 'Donate', link: '/Contact_Us/donate' },
      ],
      projects: [],
      services: [],
      activities: [],
      blogs: [],
    };
  },
  async mounted() {
    try {
      // Fetch projects
      const { data: projectData, error: projectError } = await this.$supabase
        .from('projects')
        .select('id, name, priority')
        .order('priority', { ascending: true });
      if (projectError) throw projectError;
      this.projects = projectData;

      // Fetch services
      const { data: serviceData, error: serviceError } = await this.$supabase
        .from('services')
        .select('id, name, priority')
        .order('priority', { ascending: true });
      if (serviceError) throw serviceError;
      this.services = serviceData;

      // Fetch activities
      const { data: activityData, error: activityError } = await this.$supabase
        .from('activities')
        .select('id, name, priority')
        .order('priority', { ascending: true });
      if (activityError) throw activityError;
      this.activities = activityData;

      // Fetch blogs
      const { data: blogData, error: blogError } = await this.$supabase
        .from('blogs')
        .select('id, name, priority')
        .order('priority', { ascending: true });
      if (blogError) throw blogError;
      this.blogs = blogData;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  },
};
</script>

<style scoped>
.logo .logo-image {
  height: 50px; /* Adjust the height as needed */
}
/* Add scoped styles if needed */
</style>
