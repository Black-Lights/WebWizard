<script setup>
import circularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';
import ContactForm from '~/components/ContactForm.vue'
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <div>
        <h1></h1>
      </div>
      <p></p>
    </div>
    <div class="text-section">
      <div>
        <h1 class="wrap">About Expert Advice</h1>
      </div>
      <p>Our Expert Advice page is dedicated to providing valuable insights and guidance for women facing maltreatment by family members. This page highlights the benefits of seeking expert advice, including gaining a clearer understanding of your situation, learning practical steps to ensure your safety, and finding resources for emotional and legal support. By leveraging expert knowledge, you can make informed decisions and take empowered actions towards a safer and healthier future. Below, you will find comprehensive advice from professionals to help you navigate these challenging circumstances and reclaim your life.</p>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        title="Expert 1"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/team">
      </circular-img-content-box-left>
      <circular-img-content-box-right
        title="Expert 2"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
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
  components: {
    Breadcrumbs,
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'Blogs', path: '/Blogs-' },
        { label: 'Expert Advice', path: '/Blogs/expert_advice' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>


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

