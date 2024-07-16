<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';

const breadcrumbs = [
  { label: 'About Us', path: '/About-us' },
  { label: 'Annual Reports', path: '/About_us/annual_reports' },
];

const head = {
  title: 'Annual Reports - Guiding-Light',
  meta: [
    { hid: 'description', name: 'description', content: 'Browse through Guiding-Light’s annual reports to see our achievements and progress.' },
    { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Annual Reports, Reports, Achievements' },
  ],
};
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <h1>Annual Reports</h1>
    </div>
    <div class="text-section">
      <div class="report-container">
        <div class="report-inner">
          <h1>Guiding Light Annual Reports</h1>
          <p>
            Annual reports provide a comprehensive overview of our efforts to support survivors of domestic violence over the past year. These reports highlight our achievements, outline the impact of our programs, and reflect our unwavering commitment to fostering healing, empowerment, and resilience within our community.
          </p>

          <h2>Comprehensive Services Overview</h2>
          <ul>
            <li><strong>Individual Counseling:</strong> Progress and outcomes of our personalized counseling sessions.</li>
            <li><strong>Skill-Building Workshops:</strong> Impact of workshops designed to promote resilience and personal development.</li>
            <li><strong>Self-Defense Training:</strong> Practical training sessions enhancing safety and confidence.</li>
            <li><strong>Yoga and Meditation:</strong> Activities aimed at promoting mental and physical wellness.</li>
          </ul>

          <h2>Medical Camps and Health Check-ups</h2>
          <ul>
            <li><strong>Participant Statistics:</strong> Number of individuals served and types of medical services provided.</li>
            <li><strong>Health Improvements:</strong> Overall improvements in physical health among survivors.</li>
          </ul>

          <h2>Advocacy Efforts</h2>
          <ul>
            <li><strong>Collaborations:</strong> Partnerships with legal professionals, community organizations, and policymakers.</li>
            <li><strong>Systemic Change:</strong> Efforts to protect survivors' rights and connect them with essential resources.</li>
          </ul>

          <h2>Education and Awareness Initiatives</h2>
          <ul>
            <li><strong>Awareness Campaigns:</strong> Summaries of campaigns aimed at raising public awareness about domestic violence.</li>
            <li><strong>Community Outreach:</strong> Insights into community response and increased understanding and support.</li>
          </ul>

          <h2>Financial Transparency</h2>
          <ul>
            <li><strong>Funding Breakdown:</strong> Clear breakdown of funding sources, expenditures, and financial health.</li>
            <li><strong>Accountability:</strong> Ensuring accountability to supporters and stakeholders.</li>
          </ul>

          <h2>Celebrating Survivors</h2>
          <p>
            The impact of our work is best reflected through personal testimonies and success stories. These narratives honor the journeys of survivors, highlighting their resilience and courage.
          </p>
          <ul>
            <li><span class="highlight">Inspiring Journeys:</span> Personal testimonies that inspire and affirm the importance of our mission.</li>
            <li><span class="highlight">Profound Impact:</span> Stories that underscore the transformative effect of our programs.</li>
          </ul>
          <p>
            Guiding Light’s annual reports serve as a testament to our ongoing commitment to supporting survivors of domestic violence. By documenting our achievements and reflecting on our challenges, we aim to continuously improve and expand our services, ensuring that we remain a beacon of hope and empowerment for all those affected by domestic violence.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-section {
  background: url('https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_reports_01.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  height: 400px; /* Adjusted for the content */
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

.text-section {
  background-color: #f6f6f8;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.report-container {
  text-align: left;
  color: #333;
}

.report-inner {
  max-width: 80%;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.report-inner h1 {
  text-align: center;
  color: #0056b3;
  font-size: x-large;
  margin-bottom: 1em;
}

.report-inner h2 {
  text-align: center;
  color: #0056b3;
  font-size: large;
  margin-top: 1em;
}

.report-inner p {
  margin: 10px 0;
}

.report-inner ul {
  margin: 20px 0;
  padding: 0;
  list-style: none;
}

.report-inner ul li {
  background: #e0f7fa;
  margin: 10px 0;
  padding: 10px;
  border-left: 5px solid #00796b;
  border-radius: 4px;
}

.highlight {
  background-color: #ffe0b2;
  padding: 5px;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .top-section {
    padding: 20px;
    height: 300px; /* Adjusted for mobile */
  }

  .top-section h1 {
    font-size: 1.5em;
  }

  .text-section {
    padding: 20px;
  }

  .report-inner h1 {
    font-size: 1.5em;
  }

  .report-inner h2 {
    font-size: 1.2em;
  }

  .report-inner p {
    font-size: 1em;
  }

  .report-inner ul li {
    font-size: 0.9em;
  }
}
</style>
