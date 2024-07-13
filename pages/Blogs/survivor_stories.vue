<script setup>
import circularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';
import ContactForm from '~/components/ContactForm.vue'
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="survival-section">
      <div>
        <h1>Survivor Stories</h1>
      </div>
      <p>Survivor stories content goes here.</p>
    </div>
    <div class="text-section">
      <div>
        <h1 class="wrap">Stories of the Survivors</h1>
      </div>
      <p>Welcome to our Stories of the Survivors page, where we share inspiring narratives of women who have successfully escaped abusive environments and rebuilt their lives. These stories highlight their resilience, strength, and courage as they navigated through their darkest times to find safety and hope. Each story is a testament to the human spirit's capacity to overcome adversity and serves as a beacon of hope for others facing similar challenges. Below, you will find the powerful journeys of these remarkable women, offering insight, support, and inspiration to those in need.</p>
    </div>
    <div class="story-card-section">
      <circular-img-content-box-left
        title="Story 1"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/team">
      </circular-img-content-box-left>
      <circular-img-content-box-right
        title="Story 2"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/partnerships">
      </circular-img-content-box-right>
    </div>
    <div class="circular-card-section">
      <div>
      <h1>Meet Our Experts</h1></div>
      <p>Explore the profiles of our experts who are dedicated to helping others through their expertise and experience.</p>
      <div class="circular-image-card-container">
        <div style="margin: 20px auto">
        <circular-image-card
          title="Expert 1"
          text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://picsum.photos/id/11/100/60"
          link="/About_us/team">
        </circular-image-card>
        </div>
        <div style="margin: 20px auto">
        <circular-image-card
          title="Expert 2"
          text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://picsum.photos/id/11/100/60"
          link="/About_us/partnerships">
        </circular-image-card>
        </div>
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
        { label: 'Survivor Stories', path: '/Blogs/survivor_stories' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>
.survival-section {
  background: url('static/img_stories_01.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  height: 600px;
  margin-top: 20px; /* Add some margin for spacing */
  text-align: center;
}

.survival-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.survival-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.text-section {
  background: url('static/img_stories_02.jpg') no-repeat center center fixed;
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

.story-card-section {
  background: url('static/img_stories_03.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.story-card-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.story-card-section p {
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
  justify-content: center; /* Center items horizontally */
  gap: 20px; /* Space between the cards */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

@media (max-width: 600px) {
  .survival-section {
    padding: 20px;
  }

  .survival-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .survival-section p {
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

  .story-card-section {
    padding: 20px;
  }

  .story-card-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .story-card-section p {
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
    flex-direction: column; /* Stack the cards vertically on small screens */
  }
}
</style>
