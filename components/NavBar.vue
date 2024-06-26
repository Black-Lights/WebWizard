<template>
  <nav class="navbar">
<!--    <div class="logo">-->
<!--      <NuxtLink to="/">-->
<!--        <img src="/logo5.png" alt="GuidingLight Logo" class="logo-image" />-->
<!--      </NuxtLink>-->

<!--    </div>-->
    <ul class="nav-links">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/About-us">About Us</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/About_us/mission">Mission</NuxtLink></li>
          <li><NuxtLink to="/About_us/team">Team</NuxtLink></li>
          <li><NuxtLink to="/About_us/partnerships">Partnerships</NuxtLink></li>
          <li><NuxtLink to="/About_us/annual_reports">Annual Reports</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/What-we-do">What We Do</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/What_we_do/support_group">Support group and counseling</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/creative_writing">Creative writing and Journaling</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/skill_development">Skill development</NuxtLink></li>
          <li><NuxtLink to="/What_we_do/physical_wellness">Physical Wellness</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/We-provide">We Provide</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/We_provide/therapy">Therapy</NuxtLink></li>
          <li><NuxtLink to="/We_provide/career_counselling">Career Counselling</NuxtLink></li>
          <li><NuxtLink to="/We_provide/educational_support">Educational support to Children</NuxtLink></li>
          <li><NuxtLink to="/We_provide/health_checkup">Health Checkup</NuxtLink></li>
          <li><NuxtLink to="/We_provide/advocacy">Advocacy</NuxtLink></li>
          <li><NuxtLink to="/We_provide/rehab_programs">Rehab Programs</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/Activities-">Activities</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/Activities/story_telling">Assistance with Story Telling</NuxtLink></li>
          <li><NuxtLink to="/Activities/healthcare_consultation">Primary Healthcare and Consultation</NuxtLink></li>
          <li><NuxtLink to="/Activities/yoga_meditation">Yoga and Meditation Classes</NuxtLink></li>
          <li><NuxtLink to="/Activities/computer_classes">Computer classes</NuxtLink></li>
          <li><NuxtLink to="/Activities/cooking_workshop">Cooking Workshop</NuxtLink></li>
        </ul>
      </li>
      <li>
        <NuxtLink to="/Blogs-">Blogs</NuxtLink>
        <ul class="dropdown">
          <li><NuxtLink to="/Blogs/survivor_stories">Survivor stories</NuxtLink></li>
          <li><NuxtLink to="/Blogs/recognize_domestic_violence">How to recognize domestic violence</NuxtLink></li>
          <li><NuxtLink to="/Blogs/legal_rights">Legal rights and supports</NuxtLink></li>
          <li><NuxtLink to="/Blogs/safe_exit_strategies">Safe and exit strategies</NuxtLink></li>
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
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
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
  font-size: 25px;
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
