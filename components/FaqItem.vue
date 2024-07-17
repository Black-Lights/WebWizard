<template>
  <v-card class="faq-item" flat>
    <v-card-title @click="toggleAnswer">
      <span class="faq-question">{{ question }}</span>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="toggleAnswer">
        <v-icon>{{
          isExpanded ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-if="isExpanded" class="faq-answer">
        {{ answer }}
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
.faq-item {
  width: 80%;
  margin: 10px auto;
  background-color: rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.faq-question {
  font-weight: bold;
  font-size: 20px;
}

.faq-answer {
  font-size: 18px;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .faq-item {
    width: 95%;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 12px;
  }
}
</style>
