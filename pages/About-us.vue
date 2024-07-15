<script setup>
import circularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';
import textComponent from '~/components/main/textComponent.vue';

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
    </div>
    <div>
      <text-component
        title="About Us"
        text="Guiding Light is a non-profit organization dedicated to supporting and empowering women who have experienced maltreatment by their families. Founded on the principles of compassion and resilience, our mission is to provide a safe and nurturing environment where women can heal and rebuild their lives. We offer a range of comprehensive services including safe shelters, counseling, educational programs, physical wellness initiatives, and mentorship opportunities. Our dedicated team of professionals and volunteers work tirelessly to ensure that each woman receives personalized care and the resources necessary to achieve self-sufficiency and well-being. At Guiding Light, we believe in the strength and potential of every woman and are committed to advocating for their rights and dignity. Together, we strive to create a brighter, more equitable future where every woman can live free from abuse and with the opportunity to thrive.">
      </text-component>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        title="Missions"
        text="At Guiding Light, our mission is to empower and support women who have been maltreated by their families. We provide safe shelters, comprehensive counseling, educational programs, physical wellness initiatives, and mentorship to help women rebuild their lives. Our goal is to foster resilience, independence, and a sense of hope, enabling women to thrive and achieve their full potential. We are dedicated to creating a world where every woman can live free from abuse, with dignity and respect. Through our unwavering commitment and the support of our partners, we strive to make a lasting impact in the lives of the women we serve."
        image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_mission_01.jpg"
        link="/About_us/mission">
      </circular-img-content-box-left>
      <circular-img-content-box-right
        title="Team"
        text="At Guiding Light, our team is composed of dedicated professionals committed to supporting and empowering women who have been maltreated by their families. Our staff includes experienced counselors, social workers, educators, and health professionals who work collaboratively to provide comprehensive care and support. Each team member brings a wealth of knowledge and a compassionate approach, ensuring that every woman receives personalized and effective assistance. Our leadership team is passionate about our mission and works tirelessly to advocate for the rights and well-being of women. Together, we strive to create a safe, nurturing environment where women can heal, grow, and thrive."
        image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_team_01.jpg"
        link="/About_us/team">
      </circular-img-content-box-right>
    </div>
    <div>
      <text-component
        title="Our Impact and Partnerships"
        text="At Guiding Light, our commitment to transparency and accountability is reflected in our annual reports, which provide detailed insights into our activities, achievements, and financial stewardship over the past year. These reports highlight the profound impact we have made in the lives of women who have been maltreated by their families. Through the dedicated efforts of our team and the invaluable support of our partners, we have been able to expand our services and reach more women in need. Our partners, ranging from local businesses to healthcare providers and educational institutions, play a crucial role in our mission. Their support enables us to offer comprehensive care and resources, fostering empowerment and resilience among the women we serve. We are deeply grateful for the unwavering dedication of our partners and look forward to continuing our collaborative efforts to create a safer and more equitable world for all women.">
      </text-component>
    </div>

    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <v-container>
          <div>
            <circular-image-card
              title="Partners"
              text="Guiding Light collaborates with diverse partners, including businesses, healthcare providers, educational institutions, and non-profits, to empower women. These partnerships provide expertise, funding, and volunteer support, enhancing our services and impact. Together, we strive for a world where every woman can live free from abuse, and we deeply appreciate their dedication."
              image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_partners_01.jpg"
              link="/About_us/partnerships">
            </circular-image-card>
          </div>
        </v-container>
        <v-container>
          <div>
            <circular-image-card
              title="Annual Report"
              text="Our Annual Report details Guiding Light's yearly progress, program impacts, and financial stewardship. It highlights the support of partners and donors, essential to our mission. By sharing these insights, we demonstrate our commitment to transparency and the significant difference made in empowering women facing familial maltreatment."
              image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_reports_01.jpg"
              link="/About_us/partnerships">
            </circular-image-card>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  head() {
    return {
      title: 'About Us - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn more about Guiding-Light, our mission, and the people behind our efforts.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, About Us, Mission, Team, Partners' },
      ],
    };
  },
  name: 'AboutUs',
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [
        { label: 'About Us', path: '/About-us' }
        // Add more breadcrumbs as needed
      ]
    };
  },
}
</script>


<style scoped>
.top-section {
  background: url('static/img_about_us_01.jpg') no-repeat center center fixed;
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

.card-section {
  background: url('static/img_about_us_02.jpg') no-repeat center center fixed;
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
  background: url('static/img_stories_04.jpg') no-repeat center center fixed;
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

<style scoped>
.top-section {
  background: url('static/img_about_us_01.jpg') no-repeat center center fixed;
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

.card-section {
  background: url('static/img_about_us_02.jpg') no-repeat center center fixed;
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
  background: url('static/img_about_us_03.jpg') no-repeat center center fixed;
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
</Style>