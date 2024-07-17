<template>
  <v-container class="subscribe-form" fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card>
          <v-card-title class="v-card-title"
            >Subscribe to our Blog</v-card-title
          >
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-alert v-if="errorMessage" type="error">{{
                errorMessage
              }}</v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="subscribe" :disabled="!valid"
              >Subscribe</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      valid: false,
      errorMessage: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async subscribe() {
      if (this.$refs.form.validate()) {
        try {
          const { data, error } = await this.$supabase
            .from("subscribers")
            .insert([{ email: this.email, created_at: new Date() }]);
          if (error) {
            this.errorMessage = error.message;
          } else {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
            this.$toast.success("Subscribed successfully!");
          }
        } catch (error) {
          this.errorMessage = error.message;
        }
      }
    },
  },
};
</script>

<style scoped>
.subscribe-form {
  opacity: 0.7;
  padding: 40px;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-card-title {
  color: black !important;
  justify-content: center !important;
  font-weight: bold;
  font-size: 1.5em;
}

.v-card {
  background: rgba(255, 255, 255, 0.9);
}

.v-btn {
  width: 100%;
}
/* Responsive styles */
@media (max-width: 600px) {
  .rectangular-content-box {
    padding: 10px; /* Reduce padding on smaller screens */
  }
  .subscribe-form {
    opacity: 0.7;
    padding: 10px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v-card-title {
    font-size: 1.2em;
  }

  .rectangular-content-box__text {
    font-size: 0.9em;
  }
}
</style>
