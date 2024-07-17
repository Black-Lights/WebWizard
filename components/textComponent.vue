<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  text: String,
});
</script>
<template>
  <div class="text-section">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.text-section {
  background-color: #f6f6f8;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.text-section h1 {
  margin: 2px;
  font-size: 2.5em;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.text-section p {
  margin: 2px 100px;
  color: #000000;
  font-size: 1.3em;
  line-height: 1.6;
  text-align: justify;
  display: inline-block;
  padding: 10px;
}

@media (max-width: 600px) {
  .text-section {
    padding: 20px;
  }

  .text-section h1 {
    font-size: 1.5em;
    margin: 2px;
    color: #000000;
    text-align: justify;
    display: inline-block;
  }

  .text-section p {
    font-size: 1em;
    margin: 2px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }
}
</style>
