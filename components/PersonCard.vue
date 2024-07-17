<template>
  <v-card class="person-card pa-4">
    <v-img :src="person.img_url" class="rounded-circle person-image" height="200px" width="200px" />
    <v-card-title class="text-center mt-4">
      <div>
        <h3 class="person-name">{{ person.name }} {{ person.surname }}</h3>
        <p class="person-description">{{ person.bio }}</p>
        <v-btn @click="handleLearnMore" color="primary" class="learn-more-btn">Learn More</v-btn>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleLearnMore() {
      this.$emit('learn-more', this.person);
    }
  }
}
</script>

<style scoped>
.person-card {
  max-width: 100%; /* Fixed width */
  height: 480px; /* Fixed height */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden; /* Ensure that the overflow is hidden */
  border-radius: 10px; /* Rounded corners */
  background-color: #fff; /* White background */
  position: relative; /* For the overlay */
}

.person-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.05) translateY(-5px); /* Zoom effect */
}

.person-image {
  border-radius: 50%;
  /*  border: 3px solid #1976D2; /* Add border color */
  object-fit: cover; /* Ensure the image covers the space */
  margin-bottom: 1em;
}

.person-name {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 0.5em;
}

.person-description {
  color: #555;
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit text to 2 lines */
  -webkit-box-orient: vertical;
  margin-bottom: 1em;
}

.learn-more-btn {
  margin-top: 1em;
}
</style>
