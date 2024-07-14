<template>
  <div class="flex flex-col min-h-screen">
    <v-app>
      <!-- Header and Navbar for larger screens -->
      <header v-if="$vuetify.breakpoint.mdAndUp" class="bg-gray-800 text-white">
        <Header />
        <Navbar />
      </header>

      <!-- Mobile Navigation for smaller screens -->
      <div v-else>
        <MobileNavbar />
      </div>

      <!-- Main Content -->
      <v-main class="flex-1">
        <Nuxt />
      </v-main>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white mt-auto">
        <Footer />
      </footer>

      <!-- Chatbot component as an overlay -->
      <Chatbot />

      <!-- Quick Exit Button -->
      <QuickExit />
    </v-app>
  </div>
</template>


<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Chatbot from '@/components/Chatbot.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';
import Navbar from '@/components/NavBar.vue';
import QuickExit from '@/components/QuickExit.vue'; // Import QuickExit component

export default {
  components: {
    Footer,
    Header,
    Chatbot,
    MobileNavbar,
    Navbar,
    QuickExit, // Include QuickExit component in components list
  },
};
</script>


<style scoped>
/* Add any global styles here if needed */
</style>
