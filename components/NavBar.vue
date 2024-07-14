
<!--    <div class="logo">-->
<!--      <NuxtLink to="/">-->
<!--        <img src="/logo5.png" alt="GuidingLight Logo" class="logo-image" />-->
<!--      </NuxtLink>-->

<!--    </div>-->
<template>
  <nav class="navbar">
    <div>
      <ul class="nav-links">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/About-us">About Us</NuxtLink>
          <ul class="dropdown">
            <li><NuxtLink to="/About_us/mission">Mission</NuxtLink></li>
            <li><NuxtLink to="/About_us/team">Team</NuxtLink></li>
            <li><NuxtLink to="/About_us/partnerships">Partners</NuxtLink></li>
            <li><NuxtLink to="/About_us/annual_reports">Annual Reports</NuxtLink></li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <ul class="dropdown">
            <li v-for="project in projects" :key="project.id">
              <NuxtLink :to="`/projects/${project.id}`">{{ project.name }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/services">Services</NuxtLink>
          <ul class="dropdown">
            <li v-for="service in services" :key="service.id">
              <NuxtLink :to="`/services/${service.id}`">{{ service.name }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/activities">Activities</NuxtLink>
          <ul class="dropdown">
            <li v-for="activity in activities" :key="activity.id">
              <NuxtLink :to="`/activities/${activity.id}`">{{ activity.name }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/blogs">Blogs</NuxtLink>
          <ul class="dropdown">
            <li v-for="blog in blogs" :key="blog.id">
              <NuxtLink :to="`/blogs/${blog.id}`">{{ blog.name }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/Contact-us">Contact Us</NuxtLink>
          <ul class="dropdown">
            <li><NuxtLink to="/Contact_Us/general_enquiries">General Enquiries</NuxtLink></li>
            <li><NuxtLink to="/Contact_Us/volunteer">Volunteer</NuxtLink></li>
            <li><NuxtLink to="/Contact_Us/donate">Donate</NuxtLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
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
        .from('services')  // Change 'services' to the correct table name
        .select('id, name, priority')
        .order('priority', { ascending: true });
      if (serviceError) throw serviceError;
      this.services = serviceData;

      // Fetch activities
      const { data: activityData, error: activityError } = await this.$supabase
        .from('activities')  // Change 'activities' to the correct table name
        .select('id, name, priority')
        .order('priority', { ascending: true });
      if (activityError) throw activityError;
      this.activities = activityData;

      // Fetch blogs
      const { data: blogData, error: blogError } = await this.$supabase
        .from('blogs')  // Change 'blogs' to the correct table name
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
.navbar {
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
/*
.logo .logo-image {
  height: 100px; /* Adjust the height as needed
}
*/
.nav-links {
  list-style: none;
  display: flex;;
  gap: 4rem;
}

.nav-links li {
  gap: 4rem;
  position: relative;
}

.nav-links a {
  font-family: "Bookman Old Style";
  color: #2d2d31;
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #69c3a0;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(246, 246, 248, 0.7);
  list-style: none;
  padding: 0;
  margin: 0;
  width: max-content;
  min-width: 200px;

  z-index: 1000;
}

.nav-links li:hover .dropdown {
  display: block;
}

.dropdown li {
  padding: 1rem 2rem;
}

.dropdown li a {
  font-size: 18px;
  color: #2d2d31;
  text-decoration: none;

}

.dropdown li a:hover {
  color: #69c3a0;
  background-color: rgba(87, 87, 90, 0.03);
  display: inline-block;

}
</style>
