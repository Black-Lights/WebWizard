<!--<template>-->
<!--  <v-dialog v-model="show" max-width="900px" max-height="80vh" scrollable @click:outside="closeDetail">-->
<!--    <v-card>-->
<!--      <v-card-title class="text-h5">{{ person.name }} {{ person.surname }}</v-card-title>-->
<!--      <v-card-subtitle>{{ person.telephone }}</v-card-subtitle>-->
<!--      <v-card-text>-->
<!--        <v-row>-->
<!--          <v-col cols="12" md="4" class="text-center">-->
<!--            <v-img :src="person.img_url" class="rounded-circle person-detail-image" height="300px" width="300px" />-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="8">-->
<!--            <p>{{ person.bio }}</p>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-card-text>-->
<!--      <v-card-actions>-->
<!--        <v-btn @click="closeDetail" color="primary">Back</v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--  </v-dialog>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'PersonDetail',-->
<!--  props: {-->
<!--    person: {-->
<!--      type: Object,-->
<!--      required: true,-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      show: true-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    closeDetail() {-->
<!--      this.$emit('back');-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.person-detail-image {-->
<!--  border: 2px solid #1976D2; /* Border color */-->
<!--}-->
<!--</style>-->
<template>
  <transition name="fade-zoom">
    <v-dialog v-model="show" max-width="900px" max-height="80vh" scrollable @click:outside="closeDetail">
      <v-card>
        <v-card-title class="text-h5">{{ person.name }} {{ person.surname }}</v-card-title>
        <v-card-subtitle class="contact-info">
          <div>Phone: {{ person.telephone }}</div>
          <div>Email: {{ person.email }}</div>
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <v-img :src="person.img_url" class="rounded-circle person-detail-image" height="300px" width="300px" />
            </v-col>
            <v-col cols="12" md="8">
              <p>{{ person.bio }}</p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDetail" color="primary">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </transition>
</template>

<script>
export default {
  name: 'PersonDetail',
  props: {
    person: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    closeDetail() {
      this.$emit('back');
    }
  }
}
</script>

<style scoped>
.person-detail-image {
/*  border: 2px solid #1976D2; /* Border color */
}


.contact-info {
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  gap: 4px; /* Small gap between the items */
}


.fade-zoom-enter-active, .fade-zoom-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-zoom-enter, .fade-zoom-leave-to /* .fade-zoom-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: scale(0.9);
}
</style>
