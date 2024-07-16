<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
    </div>
    <div class="text-section">
      <div class="mission-container">
        <div class="mission-inner">
          <h1>Our Mission</h1>
          <p>
            At <strong>Guiding Light</strong>, our mission is to empower and support survivors of domestic violence by providing comprehensive resources and services that address their physical, emotional, and psychological needs. We are committed to fostering a safe and nurturing environment where individuals can heal, rebuild their lives, and regain their sense of self-worth and independence.
          </p>

          <h2>Holistic Care Programs</h2>
          <ul>
            <li><strong>Individual Counseling:</strong> Personalized sessions to help survivors navigate their healing journey.</li>
            <li><strong>Skill-Building Workshops:</strong> Programs designed to promote resilience and personal development.</li>
            <li><strong>Self-Defense Training:</strong> Practical training to enhance safety and confidence.</li>
            <li><strong>Yoga and Meditation:</strong> Sessions aimed at promoting mental and physical wellness.</li>
            <li><strong>Medical Camps and Health Check-ups:</strong> Ensuring access to essential healthcare services.</li>
            <li><strong>Advocacy Services:</strong> Protecting survivors' rights and connecting them with vital resources.</li>
          </ul>

          <h2>Education and Awareness</h2>
          <ul>
            <li><strong>Targeted Awareness Campaigns:</strong> Educating the community about domestic violence and reducing stigma.</li>
            <li><strong>Community Engagement:</strong> Encouraging collective action and support for those affected by abuse.</li>
          </ul>

          <h2>Community and Connection</h2>
          <ul>
            <li><strong>Supportive Networks:</strong> Fostering a sense of belonging and mutual support among survivors.</li>
            <li><strong>Empathy and Empowerment:</strong> Promoting a culture of empathy and empowerment to pave the way for brighter futures.</li>
          </ul>

          <h2>Significant Impact</h2>
          <p>
            The impact of our mission is profound. We aim to create a supportive and informed community that stands together against domestic violence and supports those affected by it. By addressing the diverse needs of survivors and promoting a culture of empathy and empowerment, we strive to pave the way for brighter, healthier futures for all those impacted by domestic violence.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  head() {
    return {
      title: 'Mission - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn about our mission at Guiding-Light.' },
      ],
    };
  },
  components: {
    Breadcrumbs,
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'About Us', path: '/About-us' },
        { label: 'Mission', path: '/About_us/mission' },
      ];
    }
  },
}
</script>

<style scoped>
.top-section {
  background: url('https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_mission_01.jpg') no-repeat center center fixed;
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
  padding: 40px;
  margin: 0 auto;
}

.mission-container {
  text-align: left;
  color: #333;
}

.mission-inner {
  max-width: 80%;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.mission-inner h1 {
  text-align: center;
  color: #0056b3;
  font-size: x-large;
  margin-bottom: 1em;
}

.mission-inner p {
  margin: 10px 0;
}

.mission-inner ul {
  margin: 20px 0;
  padding: 0;
  list-style: none;
}

.mission-inner ul li {
  background: #e0f7fa;
  margin: 10px 0;
  padding: 10px;
  border-left: 5px solid #00796b;
  border-radius: 4px;
}

.mission-inner h2 {
  color: #0056b3;
  margin-top: 1em;
}

.highlight {
  background-color: #ffe0b2;
  padding: 5px;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .top-section {
    padding: 20px;
  }

  .top-section h1 {
    font-size: 1.5em;
  }

  .top-section p {
    font-size: 1em;
  }

  .text-section {
    padding: 20px;
  }

  .mission-inner h1 {
    font-size: 1.5em;
  }

  .mission-inner p {
    font-size: 1em;
  }

  .mission-inner ul li {
    font-size: 0.9em;
  }
}
</style>
