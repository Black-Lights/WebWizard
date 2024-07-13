<script setup>
import circularImgContentBoxLeft from '~/components/main/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/main/circularImgContentBoxRight.vue';
import CircularImageCard from '~/components/main/CircularImageCard.vue';
</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Legal Rights</h1>
    <p>Legal rights content goes here.</p>
  </div>
</template>



<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <div>
        <h1>Legal Rights</h1>
      </div>
      <p>Legal rights content goes here.</p>
    </div>
    <div class="text-section">
      <div>
        <h1 class="wrap">About Legal Rights</h1>
      </div>
      <p>Understanding your legal rights is crucial for women facing maltreatment by family members. Knowing your rights empowers you to take action, seek protection, and access justice. This page provides essential information about the legal protections available to you, helping you to navigate the legal system with confidence. By being informed, you can better advocate for yourself and ensure your safety and well-being. Below, you will find detailed explanations of the legal rights and protections that can assist you in overcoming abuse and reclaiming control over your life.</p>
    </div>
    <div class="card-section">
      <circular-img-content-box-left
        title="Legal right 1"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/team">
      </circular-img-content-box-left>
      <circular-img-content-box-right
        title="Legal right 2"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/partnerships">
      </circular-img-content-box-right>
    </div>
    <div class="circular-card-section">
      <div>
        <h1>Meet Our Legal Advisors</h1></div>
      <p>Explore the profiles of our experts who are dedicated to helping others through their expertise and experience.</p>
      <div class="circular-image-card-container">
        <div style="margin: 20px auto">
          <circular-image-card
            title="Advisor 1"
            text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="https://picsum.photos/id/11/100/60"
            link="/About_us/team">
          </circular-image-card>
        </div>
        <div style="margin: 20px auto">
          <circular-image-card
            title="Advisor 2"
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
        { label: 'Legal Rights', path: '/Blogs/legal_rights' },
        // Add more breadcrumb items as needed
      ];
    }
  }
}
</script>

<style scoped>
.top-section {
  background: url('static/img_legal_rights_01.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  height: 600px;
  margin-top: 20px; /* Add some margin for spacing */
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
  background: url('static/img_legal_rights_02.jpg') no-repeat center center fixed;
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
  background: url('static/img_legal_rights_03.jpg') no-repeat center center fixed;
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
  background: url('static/img_legal_rights_04.jpg') no-repeat center center fixed;
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
    flex-direction: column; /* Stack the cards vertically on small screens */
  }
}
</style>

