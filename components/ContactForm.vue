<!--<template>-->
<!--  <v-container>-->
<!--    <v-row>-->
<!--      <v-col cols="12" md="6">-->
<!--        <v-card class="pa-5">-->
<!--          <h2 class="title">Contact Us</h2>-->
<!--          <p class="description">Please fill out the form on the right to get in touch with us.</p>-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--      <v-col cols="12" md="6">-->
<!--        <v-card class="pa-5">-->
<!--          <v-form ref="form" v-model="valid">-->
<!--            <v-text-field-->
<!--              v-model="name"-->
<!--              label="Name"-->
<!--              :rules="[v => !!v || 'Name is required']"-->
<!--              required-->
<!--            ></v-text-field>-->
<!--            <v-select-->
<!--              v-model="subject"-->
<!--              :items="subjects"-->
<!--              label="Subject"-->
<!--              :rules="[v => !!v || 'Subject is required']"-->
<!--              required-->
<!--            ></v-select>-->
<!--            <v-text-field-->
<!--              v-model="email"-->
<!--              label="Email"-->
<!--              :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"-->
<!--              required-->
<!--            ></v-text-field>-->
<!--            <v-textarea-->
<!--              v-model="message"-->
<!--              label="Message"-->
<!--              :rules="[v => !!v || 'Message is required', v => v.length <= 150 || 'Message must be less than 150 words']"-->
<!--              required-->
<!--            ></v-textarea>-->
<!--            <v-btn :disabled="!valid" @click="submitForm">Send</v-btn>-->
<!--          </v-form>-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-container>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      name: '',-->
<!--      subject: '',-->
<!--      email: '',-->
<!--      message: '',-->
<!--      valid: false,-->
<!--      subjects: ['General Inquiry', 'Support', 'Sales', 'Feedback']-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    async submitForm() {-->
<!--      if (this.$refs.form.validate()) {-->
<!--        try {-->
<!--          const { data, error } = await this.$supabase-->
<!--            .from('contact_form')-->
<!--            .insert([-->
<!--              { name: this.name, subject: this.subject, email: this.email, message: this.message }-->
<!--            ]);-->

<!--          if (error) throw error;-->

<!--          alert('Message sent successfully!');-->
<!--          this.name = '';-->
<!--          this.subject = '';-->
<!--          this.email = '';-->
<!--          this.message = '';-->
<!--        } catch (error) {-->
<!--          alert('Failed to send message.');-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.pa-5 {-->
<!--  padding: 24px;-->
<!--}-->

<!--@media (max-width: 600px) {-->
<!--  .pa-5 {-->
<!--    padding: 16px;-->
<!--  }-->

<!--  .title {-->
<!--    font-size: 1.5em;-->
<!--  }-->

<!--  .description {-->
<!--    font-size: 1em;-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5 card-content">
          <v-form ref="form" v-model="valid">
            <div class="form-title">
              <h1>Form</h1>
            </div>
            <v-text-field
              v-model="name"
              label="Name"
              :rules="[v => !!v || 'Name is required']"
              required
            ></v-text-field>
            <v-select
              v-model="subject"
              :items="subjects"
              label="Subject"
              :rules="[v => !!v || 'Subject is required']"
              required
            ></v-select>
            <v-text-field
              v-model="email"
              label="Email"
              :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              label="Message"
              :rules="[v => !!v || 'Message is required', v => v.length <= 150 || 'Message must be less than 150 words']"
              required
            ></v-textarea>
            <v-btn :disabled="!valid" @click="submitForm">Send</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      subject: '',
      email: '',
      message: '',
      valid: false,
      subjects: ['General Inquiry', 'Support', 'Sales', 'Feedback']
    };
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        try {
          const { data, error } = await this.$supabase
            .from('contact_form')
            .insert([
              { name: this.name, subject: this.subject, email: this.email, message: this.message }
            ]);

          if (error) throw error;

          alert('Message sent successfully!');
          this.name = '';
          this.subject = '';
          this.email = '';
          this.message = '';
        } catch (error) {
          alert('Failed to send message.');
        }
      }
    }
  }
};
</script>

<style scoped>
.form-title {

  align-content: center;
  height: 50px;
  background-color: #2d2d31;
}

.form-title h1 {
  font-size: x-large !important;
  text-align: center;
  color: #f6f6f8;
}

.card-content {
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  opacity: 0.8;
}

.pa-5 {
  padding: 24px;
}

@media (max-width: 600px) {
  .pa-5 {
    padding: 16px;
  }
}
</style>
