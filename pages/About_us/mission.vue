<script setup>
import circularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
    </div>
    <div class="text-section">
      <div>
        <h1 class="wrap">Mission</h1>
      </div>
      <p>Guiding Light is a dedicated non-profit organization committed to empowering women who have been maltreated by their families. Our mission is to provide a safe haven, comprehensive support, and transformative opportunities for these women to rebuild their lives. We believe in the inherent strength and resilience of women and strive to create an environment where they can heal, grow, and thrive. Our services include shelter, counseling, education, physical wellness programs, and mentorship. Through our holistic approach, we aim to restore hope and foster self-sufficiency. At Guiding Light, we envision a world where every woman can live free from abuse and with dignity and respect. Our mission is not just to support survivors but to inspire them to reach their full potential and become beacons of hope for others. Together, we are lighting the path to a brighter, more equitable future.</p>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        title="Team"
        text="At Guiding Light, our team is composed of dedicated professionals committed to supporting and empowering women who have been maltreated by their families. Our staff includes experienced counselors, social workers, educators, and health professionals who work collaboratively to provide comprehensive care and support. Each team member brings a wealth of knowledge and a compassionate approach, ensuring that every woman receives personalized and effective assistance. Our leadership team is passionate about our mission and works tirelessly to advocate for the rights and well-being of women. Together, we strive to create a safe, nurturing environment where women can heal, grow, and thrive."
        image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_about_team_01.jpg"
        link="/About_us/team">
      </circular-img-content-box-left>
      <circular-img-content-box-right
        title="Partners"
        text="Guiding Light is proud to collaborate with a diverse network of partners who share our commitment to empowering women. Our partnerships include local businesses, healthcare providers, educational institutions, and other non-profit organizations. These collaborations enable us to offer a wide range of services and resources to the women we support. Our partners provide invaluable expertise, funding, and volunteer support, enhancing our ability to meet the complex needs of our community. By working together, we amplify our impact and move closer to our vision of a world where every woman can live free from abuse. We are deeply grateful for the ongoing support and dedication of our partners."
        image="https://csuapvtpzklxyzwrwttj.supabase.co/storage/v1/object/public/Images/img_partners_01.jpg"
        link="/About_us/partnerships">
      </circular-img-content-box-right>
    </div>

    <div class="text-section">
      <div>
        <h1>Meet Our Experts</h1>
      </div>
      <p>Explore the profiles of our experts who are dedicated to helping others through their expertise and experience.</p>
    </div>
    <div class="circular-card-section">
      <div class="circular-image-card-container">
        <v-container>
          <div >
            <circular-image-card
              title="Expert 1"
              text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="https://picsum.photos/id/11/100/60"
              link="/About_us/team">
            </circular-image-card>
          </div>
        </v-container>
        <v-container>
          <div>
            <circular-image-card
              title="Expert 2"
              text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="https://picsum.photos/id/11/100/60"
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
        // Add more breadcrumb items as needed
      ];
    }
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
  background: url('static/img_expert_advice_03.jpg') no-repeat center center fixed;
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
</style>

<style scoped>
.top-section {
  background: url('static/img_expert_advice_01.jpg') no-repeat center center fixed;
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
  background: url('static/img_expert_advice_03.jpg') no-repeat center center fixed;
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
</style>