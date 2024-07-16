<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';

const breadcrumbs = [
  { label: 'About Us', path: '/About-us' },
  { label: 'Partnerships', path: '/About_us/partnerships' },
];

const head = {
  title: 'Partners - Guiding-Light',
  meta: [
    { hid: 'description', name: 'description', content: 'Discover the partners and collaborators of Guiding-Light who support our mission.' },
    { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Partners, Collaborations, Supporters' },
  ],
};
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
    </div>
    <div class="text-section">
      <div class="partnerships-container">
        <div class="partnerships-inner">
          <h1>Guiding Light Partnerships</h1>
          <p>
            At <strong>Guiding Light</strong>, our mission to support and empower survivors of domestic violence is strengthened by the invaluable partnerships we forge with a diverse array of organizations and individuals. Our partners play a crucial role in enhancing our programs, expanding our reach, and ensuring that survivors receive the comprehensive care and support they need.
          </p>

          <h2>Healthcare Collaborations</h2>
          <ul>
            <li><strong>Local Healthcare Providers:</strong> Delivering essential medical services through health check-ups and medical camps, enabling free or low-cost care for survivors.</li>
          </ul>

          <h2>Legal Support Partnerships</h2>
          <ul>
            <li><strong>Legal Professionals and Advocacy Groups:</strong> Providing survivors with necessary legal support, representation, and advice to ensure their rights are protected.</li>
          </ul>

          <h2>Educational Collaborations</h2>
          <ul>
            <li><strong>Educational Institutions and Community Organizations:</strong> Partnering for skill-building workshops on financial literacy, job readiness, and personal development, empowering survivors to build brighter futures.</li>
          </ul>

          <h2>Mental Health Support</h2>
          <ul>
            <li><strong>Mental Health Professionals and Counseling Centers:</strong> Offering trauma-informed therapy to help survivors process experiences and build resilience.</li>
          </ul>

          <h2>Wellness Partnerships</h2>
          <ul>
            <li><strong>Fitness Centers and Wellness Experts:</strong> Contributing to yoga, meditation, and self-defense programs, creating safe environments that promote healing and confidence.</li>
          </ul>

          <h2>Community Support Networks</h2>
          <ul>
            <li><strong>Community-Based Organizations and Shelters:</strong> Ensuring access to safe housing, childcare services, and other critical resources to address the diverse needs of survivors.</li>
          </ul>

          <h2>Impact of Partnerships</h2>
          <p>
            The impact of our partnerships is profound. By leveraging the expertise and resources of our partners, <strong>Guiding Light</strong> can offer a wide range of services that address the physical, emotional, and psychological needs of survivors. Together, we create a stronger, more supportive community that empowers individuals to reclaim their lives and build a hopeful future.
          </p>

          <p>
            Guiding Light is deeply grateful for the dedication and collaboration of our partners. Their commitment to our mission enhances our ability to support survivors of domestic violence and fosters a collective effort towards healing, empowerment, and systemic change.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-section {
  background: url('https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_partners_01.jpg') no-repeat center center fixed;
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

.text-section {
  background-color: #f6f6f8;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.partnerships-container {
  text-align: left;
  color: #333;
}

.partnerships-inner {
  max-width: 80%;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.partnerships-inner h1 {
  text-align: center;
  color: #0056b3;
  font-size: x-large;
  margin-bottom: 1em;
}

.partnerships-inner h2 {
  text-align: center;
  color: #0056b3;
  font-size: large;
  margin-top: 1em;
}

.partnerships-inner p {
  margin: 10px 0;
}

.partnerships-inner ul {
  margin: 20px 0;
  padding: 0;
  list-style: none;
}

.partnerships-inner ul li {
  background: #e0f7fa;
  margin: 10px 0;
  padding: 10px;
  border-left: 5px solid #00796b;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .top-section {
    padding: 20px;
  }

  .top-section h1 {
    font-size: 1.5em;
  }

  .text-section {
    padding: 20px;
  }

  .partnerships-inner h1 {
    font-size: 1.5em;
  }

  .partnerships-inner h2 {
    font-size: 1.2em;
  }

  .partnerships-inner p {
    font-size: 1em;
  }

  .partnerships-inner ul li {
    font-size: 0.9em;
  }
}
</style>
