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
                <NuxtLink to="/What-we-do">What We Do</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in whatWeDoItems" :key="item.title">
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
                <NuxtLink to="/We-provide">We Provide</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in weProvideItems" :key="item.title">
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
                <NuxtLink to="/Activities-">Activities</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in activitiesItems" :key="item.title">
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
                <NuxtLink to="/Blogs-">Blogs</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in blogsItems" :key="item.title">
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
      whatWeDoItems: [
        { title: 'Support group', link: '/What_we_do/support_group' },
        { title: 'Counselling', link: '/What_we_do/counselling' },
        { title: 'Inspire', link: '/What_we_do/inspire_us' },
        { title: 'Educational Programs', link: '/What_we_do/edu_programs' },
        { title: 'Physical Wellness', link: '/What_we_do/physical_wellness' },
      ],
      weProvideItems: [
        { title: 'Therapy', link: '/We_provide/therapy' },
        { title: 'Individual Counselling', link: '/We_provide/individual_counselling' },
        { title: 'Child Care Services', link: '/We_provide/child_care' },
        { title: 'Health Checkup', link: '/We_provide/health_checkup' },
        { title: 'Advocacy', link: '/We_provide/advocacy' },
        { title: 'Rehab Programs', link: '/We_provide/rehab_programs' },
      ],
      activitiesItems: [
        { title: 'Fund Raising', link: '/Activities/fund_raising' },
        { title: 'Self Defence Activities', link: '/Activities/self_defence' },
        { title: 'Yoga & Meditation', link: '/Activities/yoga_meditation' },
        { title: 'Skill Build Workshops', link: '/Activities/skill_workshop' },
        { title: 'Cooking Workshops', link: '/Activities/cooking_workshop' },
      ],
      blogsItems: [
        { title: 'Survivor stories', link: '/Blogs/survivor_stories' },
        { title: 'Expert Advice', link: '/Blogs/expert_advice' },
        { title: 'Legal rights and supports', link: '/Blogs/legal_rights' },
      ],
      contactUsItems: [
        { title: 'General enquiries', link: '/Contact_Us/general_enquiries' },
        { title: 'Volunteer', link: '/Contact_Us/volunteer' },
        { title: 'Donate', link: '/Contact_Us/donate' },
      ],
    };
  },
};
</script>


<style scoped>

.logo .logo-image {
  height: 50px; /* Adjust the height as needed */
}/* Add scoped styles if needed */
</style>
