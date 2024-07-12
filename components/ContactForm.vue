<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-5">
          <h2>Contact Us</h2>
          <p>Please fill out the form on the right to get in touch with us.</p>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-form ref="form" v-model="valid">
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
.pa-5 {
  padding: 24px;
}
</style>
