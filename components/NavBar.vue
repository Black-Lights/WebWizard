<!--<template>-->
<!--  <nav>-->
<!--    <v-app>-->
<!--      &lt;!&ndash; Mobile Navigation Drawer &ndash;&gt;-->
<!--      <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        app-->
<!--        temporary-->
<!--        class="d-lg-none"-->
<!--      >-->
<!--        <v-list dense>-->
<!--          <v-list-item>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title>-->
<!--                <NuxtLink to="/">Home</NuxtLink>-->
<!--              </v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--          <v-list-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink to="/About-us">About Us</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item v-for="item in aboutUsItems" :key="item.title">-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->
<!--          <v-list-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink to="/What-we-do">What We Do</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item v-for="item in whatWeDoItems" :key="item.title">-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->
<!--          <v-list-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink to="/We-provide">We Provide</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item v-for="item in weProvideItems" :key="item.title">-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->
<!--          <v-list-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink to="/Activities-">Activities</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item v-for="item in activitiesItems" :key="item.title">-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->
<!--          <v-list-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink to="/Blogs-">Blogs</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item v-for="item in blogsItems" :key="item.title">-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->
<!--          <v-list-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink to="/Contact-us">Contact Us</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item v-for="item in contactUsItems" :key="item.title">-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->
<!--        </v-list>-->
<!--      </v-navigation-drawer>-->

<!--      &lt;!&ndash; Mobile App Bar &ndash;&gt;-->
<!--      <v-app-bar app class="d-lg-none" color="cyan" dense>-->
<!--        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->
<!--        <v-toolbar-title>GuidingLight</v-toolbar-title>-->
<!--      </v-app-bar>-->

<!--      &lt;!&ndash; Desktop Navigation &ndash;&gt;-->
<!--      <div class="site-header bg-cyan-100 p-4 flex justify-center items-center d-none d-lg-flex ">-->
<!--        <ul class="nav-links">-->
<!--          <li>-->
<!--            <NuxtLink to="/">Home</NuxtLink>-->
<!--          </li>-->
<!--          <li>-->
<!--            <NuxtLink to="/About-us">About Us</NuxtLink>-->
<!--            <ul class="dropdown">-->
<!--              <li><NuxtLink to="/About_us/mission">Mission</NuxtLink></li>-->
<!--              <li><NuxtLink to="/About_us/team">Team</NuxtLink></li>-->
<!--              <li><NuxtLink to="/About_us/partnerships">Partners</NuxtLink></li>-->
<!--              <li><NuxtLink to="/About_us/annual_reports">Annual Reports</NuxtLink></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li>-->
<!--            <NuxtLink to="/What-we-do">What We Do</NuxtLink>-->
<!--            <ul class="dropdown">-->
<!--              <li><NuxtLink to="/What_we_do/support_group">Support group</NuxtLink></li>-->
<!--              <li><NuxtLink to="/What_we_do/counselling">Counseling</NuxtLink></li>-->
<!--              <li><NuxtLink to="/What_we_do/inspire">Inspire</NuxtLink></li>-->
<!--              <li><NuxtLink to="/What_we_do/edu_programs">Educational Programs</NuxtLink></li>-->
<!--              <li><NuxtLink to="/What_we_do/physical_wellness">Physical Wellness</NuxtLink></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li>-->
<!--            <NuxtLink to="/We-provide">We Provide</NuxtLink>-->
<!--            <ul class="dropdown">-->
<!--              <li><NuxtLink to="/We_provide/therapy">Therapy</NuxtLink></li>-->
<!--              <li><NuxtLink to="/We_provide/individual_counselling">Individual Counselling</NuxtLink></li>-->
<!--              <li><NuxtLink to="/We_provide/child_care">Child Care Services</NuxtLink></li>-->
<!--              <li><NuxtLink to="/We_provide/health_checkup">Health Checkup</NuxtLink></li>-->
<!--              <li><NuxtLink to="/We_provide/advocacy">Advocacy</NuxtLink></li>-->
<!--              <li><NuxtLink to="/We_provide/rehab_programs">Rehab Programs</NuxtLink></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li>-->
<!--            <NuxtLink to="/Activities-">Activities</NuxtLink>-->
<!--            <ul class="dropdown">-->
<!--              <li><NuxtLink to="/Activities/fund_raising">Fund Raising</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Activities/self_defence">Self Defence Activities</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Activities/yoga_meditation">Yoga & Meditation</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Activities/skill_workshop">Skill Build Workshops</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Activities/cooking_workshop">Cooking Workshops</NuxtLink></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li>-->
<!--            <NuxtLink to="/Blogs-">Blogs</NuxtLink>-->
<!--            <ul class="dropdown">-->
<!--              <li><NuxtLink to="/Blogs/survivor_stories">Survivor stories</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Blogs/expert_advice">Expert Advice</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Blogs/legal_rights">Legal rights and supports</NuxtLink></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li>-->
<!--            <NuxtLink to="/Contact-us">Contact Us</NuxtLink>-->
<!--            <ul class="dropdown">-->
<!--              <li><NuxtLink to="/Contact_Us/general_enquiries">General enquiries</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Contact_Us/volunteer">Volunteer</NuxtLink></li>-->
<!--              <li><NuxtLink to="/Contact_Us/donate">Donate</NuxtLink></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </v-app>-->
<!--  </nav>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      drawer: false,-->
<!--      aboutUsItems: [-->
<!--        { title: 'Mission', link: '/About_us/mission' },-->
<!--        { title: 'Team', link: '/About_us/team' },-->
<!--        { title: 'Partners', link: '/About_us/partnerships' },-->
<!--        { title: 'Annual Reports', link: '/About_us/annual_reports' },-->
<!--      ],-->
<!--      whatWeDoItems: [-->
<!--        { title: 'Support group', link: '/What_we_do/support_group' },-->
<!--        { title: 'Counseling', link: '/What_we_do/counselling' },-->
<!--        { title: 'Inspire', link: '/What_we_do/inspire' },-->
<!--        { title: 'Educational Programs', link: '/What_we_do/edu_programs' },-->
<!--        { title: 'Physical Wellness', link: '/What_we_do/physical_wellness' },-->
<!--      ],-->
<!--      weProvideItems: [-->
<!--        { title: 'Therapy', link: '/We_provide/therapy' },-->
<!--        { title: 'Individual Counselling', link: '/We_provide/individual_counselling' },-->
<!--        { title: 'Child Care Services', link: '/We_provide/child_care' },-->
<!--        { title: 'Health Checkup', link: '/We_provide/health_checkup' },-->
<!--        { title: 'Advocacy', link: '/We_provide/advocacy' },-->
<!--        { title: 'Rehab Programs', link: '/We_provide/rehab_programs' },-->
<!--      ],-->
<!--      activitiesItems: [-->
<!--        { title: 'Fund Raising', link: '/Activities/fund_raising' },-->
<!--        { title: 'Self Defence Activities', link: '/Activities/self_defence' },-->
<!--        { title: 'Yoga & Meditation', link: '/Activities/yoga_meditation' },-->
<!--        { title: 'Skill Build Workshops', link: '/Activities/skill_workshop' },-->
<!--        { title: 'Cooking Workshops', link: '/Activities/cooking_workshop' },-->
<!--      ],-->
<!--      blogsItems: [-->
<!--        { title: 'Survivor stories', link: '/Blogs/survivor_stories' },-->
<!--        { title: 'Expert Advice', link: '/Blogs/expert_advice' },-->
<!--        { title: 'Legal rights and supports', link: '/Blogs/legal_rights' },-->
<!--      ],-->
<!--      contactUsItems: [-->
<!--        { title: 'General enquiries', link: '/Contact_Us/general_enquiries' },-->
<!--        { title: 'Volunteer', link: '/Contact_Us/volunteer' },-->
<!--        { title: 'Donate', link: '/Contact_Us/donate' },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.nav-links {-->
<!--  list-style: none;-->
<!--  display: flex;-->
<!--  gap: 2rem;-->
<!--  justify-content: center;-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->

<!--.nav-links li {-->
<!--  position: relative;-->
<!--}-->

<!--.nav-links a {-->
<!--  font-family: "Bookman Old Style";-->
<!--  color: #2d2d31;-->
<!--  font-size: 1rem;-->
<!--  text-decoration: none;-->
<!--  font-weight: 500;-->
<!--  transition: color 0.3s;-->
<!--}-->

<!--.nav-links a:hover {-->
<!--  color: #afeeee;-->
<!--}-->

<!--.dropdown {-->
<!--  display: none;-->
<!--  position: absolute;-->
<!--  top: 100%;-->
<!--  left: 0;-->
<!--  background-color: rgba(175, 238, 238, 0.7);-->
<!--  list-style: none;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  width: max-content;-->
<!--  min-width: 200px;-->
<!--  z-index: 1000;-->
<!--}-->

<!--.nav-links li:hover .dropdown {-->
<!--  display: block;-->
<!--}-->

<!--.dropdown li {-->
<!--  padding: 1rem 2rem;-->
<!--}-->

<!--.dropdown li a {-->
<!--  font-size: 1rem;-->
<!--  color: #2d2d31;-->
<!--  text-decoration: none;-->
<!--}-->

<!--.dropdown li a:hover {-->
<!--  color: #ffffff;-->
<!--  background-color: rgba(87, 87, 90, 0.03);-->
<!--  display: inline-block;-->
<!--}-->

<!--/* Adjust the height of the app bar */-->
<!--.v-app-bar {-->
<!--  height: 1px; /* Adjust this value as needed */-->
<!--}-->

<!--.theme&#45;&#45;light.v-application {-->
<!--  max-height: 0;-->
<!--  background: #FFFFFF;-->
<!--  color: rgba(0, 0, 0, 0.87);-->
<!--}-->
<!--.v-application .d-lg-flex {-->
<!--  max-height: 10px;-->
<!--  display: flex !important;-->
<!--}-->
<!--</style>-->






<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <nav class="navbar">&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="site-header bg-cyan-100 p-4 flex justify-center items-center" >&ndash;&gt;-->
<!--&lt;!&ndash;      <ul class="nav-links flex flex-col md:flex-row items-start md:items-center"  >&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/">Home</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/About-us">About Us</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;          <ul class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/About_us/mission">Mission</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/About_us/team">Team</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/About_us/partnerships">Partners</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/About_us/annual_reports">Annual Reports</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/What-we-do">What We Do</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;          <ul class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/What_we_do/support_group">Support group</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/What_we_do/counselling">Counseling</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/What_we_do/inspire">Inspire</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/What_we_do/edu_programs">Educational Programs</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/What_we_do/physical_wellness">Physical Wellness</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/We-provide">We Provide</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;          <ul class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/We_provide/therapy">Therapy</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/We_provide/individual_counselling">Individual Counselling</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/We_provide/child_care">Child Care Services</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/We_provide/health_checkup">Health Checkup</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/We_provide/advocacy">Advocacy</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/We_provide/rehab_programs">Rehab Programs</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/Activities-">Activities</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;          <ul class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Activities/fund_raising">Fund Raising</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Activities/self_defence">Self Defence Activities</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Activities/yoga_meditation">Yoga & Meditation</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Activities/skill_workshop">Skill Build Workshops</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Activities/cooking_workshop">Cooking Workshops</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/Blogs-">Blogs</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;          <ul class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Blogs/survivor_stories">Survivor stories</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Blogs/expert_advice">Expert Advice</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Blogs/legal_rights">Legal rights and supports</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <NuxtLink to="/Contact-us">Contact Us</NuxtLink>&ndash;&gt;-->
<!--&lt;!&ndash;          <ul class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Contact_Us/general_enquiries">General enquiries</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Contact_Us/volunteer">Volunteer</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li><NuxtLink to="/Contact_Us/donate">Donate</NuxtLink></li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;      </ul>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </nav>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import Educational_support from "~/pages/We_provide/child_care.vue";&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: 'NavBar',&ndash;&gt;-->
<!--&lt;!&ndash;  components: {Educational_support}&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
<!--&lt;!&ndash;.navbar {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #ffffff;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 1rem;&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: center;&ndash;&gt;-->
<!--&lt;!&ndash;  align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links {&ndash;&gt;-->
<!--&lt;!&ndash;  list-style: none;&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  flex-direction: column;&ndash;&gt;-->
<!--&lt;!&ndash;  gap: 2rem;&ndash;&gt;-->
<!--&lt;!&ndash;  @apply md:flex-row;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links li {&ndash;&gt;-->
<!--&lt;!&ndash;  position: relative;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links a {&ndash;&gt;-->
<!--&lt;!&ndash;  font-family: "Bookman Old Style";&ndash;&gt;-->
<!--&lt;!&ndash;  color: #2d2d31;&ndash;&gt;-->
<!--&lt;!&ndash;  @apply text-lg md:text-xl lg:text-2xl;&ndash;&gt;-->
<!--&lt;!&ndash;  text-decoration: none;&ndash;&gt;-->
<!--&lt;!&ndash;  font-weight: 500;&ndash;&gt;-->
<!--&lt;!&ndash;  transition: color 0.3s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links a:hover {&ndash;&gt;-->
<!--&lt;!&ndash;  color: #afeeee;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.dropdown {&ndash;&gt;-->
<!--&lt;!&ndash;  display: none;&ndash;&gt;-->
<!--&lt;!&ndash;  position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;  top: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  left: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: rgba(175, 238, 238, 0.7);&ndash;&gt;-->
<!--&lt;!&ndash;  list-style: none;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  width: max-content;&ndash;&gt;-->
<!--&lt;!&ndash;  min-width: 200px;&ndash;&gt;-->
<!--&lt;!&ndash;  z-index: 1000;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.nav-links li:hover .dropdown {&ndash;&gt;-->
<!--&lt;!&ndash;  display: block;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.dropdown li {&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 1rem 2rem;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.dropdown li a {&ndash;&gt;-->
<!--&lt;!&ndash;  @apply text-base md:text-lg;&ndash;&gt;-->
<!--&lt;!&ndash;  color: #2d2d31;&ndash;&gt;-->
<!--&lt;!&ndash;  text-decoration: none;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.dropdown li a:hover {&ndash;&gt;-->
<!--&lt;!&ndash;  color: #ffffff;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: rgba(87, 87, 90, 0.03);&ndash;&gt;-->
<!--&lt;!&ndash;  display: inline-block;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->



<template>
  <nav class="navbar">
<!--    <div class="logo">-->
<!--      <NuxtLink to="/">-->
<!--        <img src="/logo5.png" alt="GuidingLight Logo" class="logo-image" />-->
<!--      </NuxtLink>-->

<!--    </div>-->
    <div >
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
        <NuxtLink to="/What-we-do">What We Do</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/What_we_do/support_group">Support group</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/counselling">Counselling</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/inspire">Inspire</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/edu_programs">Educational Programs</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/physical_wellness">Physical Wellness</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/We-provide">We Provide</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/We_provide/therapy">Therapy</NuxtLink></li>
          <li><NuxtLink to="/We_provide/individual_counselling">Individual Counselling</NuxtLink></li>
          <li><NuxtLink to="/We_provide/child_care">Child Care Services</NuxtLink></li>
          <li><NuxtLink to="/We_provide/health_checkup">Health Checkup</NuxtLink></li>
          <li><NuxtLink to="/We_provide/advocacy">Advocacy</NuxtLink></li>
          <li><NuxtLink to="/We_provide/rehab_programs">Rehab Programs</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/Activities-">Activities</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/Activities/fund_raising">Fund Raising</NuxtLink></li>
          <li><NuxtLink to="/Activities/self_defence">Self Defence Activities</NuxtLink></li>
          <li><NuxtLink to="/Activities/yoga_meditation">Yoga & Meditation</NuxtLink></li>
          <li><NuxtLink to="/Activities/skill_workshop">Skill Build Workshops</NuxtLink></li>
          <li><NuxtLink to="/Activities/cooking_workshop">Cooking Workshops</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/Blogs-">Blogs</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/Blogs/survivor_stories">Survivor stories</NuxtLink></li>
          <li><NuxtLink to="/Blogs/expert_advice">Expert Advice</NuxtLink></li>
          <li><NuxtLink to="/Blogs/legal_rights">Legal rights and supports</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/Contact-us">Contact Us</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/Contact_Us/general_enquiries">General enquiries</NuxtLink></li>
          <li><NuxtLink to="/Contact_Us/volunteer">Volunteer</NuxtLink></li>
          <li><NuxtLink to="/Contact_Us/donate">Donate</NuxtLink></li>
        </ul>
      </li>
    </ul>
    </div>
  </nav>
</template>

<script>
import Educational_support from "~/pages/We_provide/child_care.vue";

export default {
  name: 'NavBar',
  components: {Educational_support}
}
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
  color: #afeeee;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(175, 238, 238, 0.7);
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
  color: #ffffff;
  background-color: rgba(87, 87, 90, 0.03);
  display: inline-block;

}
</style>
