<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="form.subject" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        subject: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/contact', this.form);
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: auto;
}
.contact-form div {
  margin-bottom: 10px;
}
.contact-form label {
  display: block;
  margin-bottom: 5px;
}
.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 8px;
}
.contact-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.contact-form button:hover {
  background-color: #0056b3;
}
</style>


<!--<template>-->
<!--  <v-container>-->
<!--    <v-row>-->
<!--      <v-col cols="6">-->
<!--        <v-card class="pa-5">-->
<!--          <h2>Contact Us</h2>-->
<!--          <p>Please fill out the form on the right to get in touch with us.</p>-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--      <v-col cols="6">-->
<!--        <v-card class="pa-5">-->
<!--          <v-form ref="form" v-model="valid">-->
<!--            <v-text-field-->
<!--              v-model="name"-->
<!--              label="Name"-->
<!--              :rules="[v => !!v || 'Name is required']"-->
<!--              required-->
<!--            ></v-text-field>-->
<!--            <v-text-field-->
<!--              v-model="subject"-->
<!--              label="Subject"-->
<!--              :rules="[v => !!v || 'Subject is required']"-->
<!--              required-->
<!--            ></v-text-field>-->
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
<!--import axios from 'axios';-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      name: '',-->
<!--      subject: '',-->
<!--      email: '',-->
<!--      message: '',-->
<!--      valid: false-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    async submitForm() {-->
<!--      if (this.$refs.form.validate()) {-->
<!--        try {-->
<!--          const response = await axios.post('http://localhost:3000/api/contact', {-->
<!--            name: this.name,-->
<!--            subject: this.subject,-->
<!--            email: this.email,-->
<!--            message: this.message-->
<!--          });-->
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
<!--</style>-->



<!--<template>-->
<!--  <div class="contact-form">-->
<!--    <h2>Contact Us</h2>-->
<!--    <form @submit.prevent="submitForm">-->
<!--      <div>-->
<!--        <label for="name">Name:</label>-->
<!--        <input type="text" id="name" v-model="form.name" required>-->
<!--      </div>-->
<!--      <div>-->
<!--        <label for="subject">Subject:</label>-->
<!--        <input type="text" id="subject" v-model="form.subject" required>-->
<!--      </div>-->
<!--      <div>-->
<!--        <label for="email">Email:</label>-->
<!--        <input type="email" id="email" v-model="form.email" required>-->
<!--      </div>-->
<!--      <div>-->
<!--        <label for="message">Message:</label>-->
<!--        <textarea id="message" v-model="form.message" required></textarea>-->
<!--      </div>-->
<!--      <button type="submit">Send</button>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from 'axios';-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        name: '',-->
<!--        subject: '',-->
<!--        email: '',-->
<!--        message: ''-->
<!--      }-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    async submitForm() {-->
<!--      try {-->
<!--        const response = await axios.post('http://localhost:3000/api/contact', this.form);-->
<!--        console.log('Form submitted successfully:', response.data);-->
<!--      } catch (error) {-->
<!--        console.error('Error submitting form:', error);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.contact-form {-->
<!--  max-width: 600px;-->
<!--  margin: auto;-->
<!--}-->
<!--.contact-form div {-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--.contact-form label {-->
<!--  display: block;-->
<!--  margin-bottom: 5px;-->
<!--}-->
<!--.contact-form input, .contact-form textarea {-->
<!--  width: 100%;-->
<!--  padding: 8px;-->
<!--}-->
<!--.contact-form button {-->
<!--  padding: 10px 20px;-->
<!--  background-color: #007bff;-->
<!--  color: white;-->
<!--  border: none;-->
<!--  cursor: pointer;-->
<!--}-->
<!--.contact-form button:hover {-->
<!--  background-color: #0056b3;-->
<!--}-->
<!--</style>-->

