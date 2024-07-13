
<template>
  <div class="flex flex-col min-h-screen">
    <v-app>

      <!-- Header ONLY for Mobile -->
      <header class="bg-gray-800 text-white">
        <Header v-if="$vuetify.breakpoint.lgAndUp" />
      </header>

      <!-- Render mobile navigation on small screens -->
      <MobileNavbar v-if="$vuetify.breakpoint.smAndDown" />

      <!-- Render desktop navigation on larger screens -->
      <Navbar v-else />

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
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import Chatbot from '@/components/Chatbot.vue'
import MobileNavbar from '@/components/MobileNavbar.vue';
import Navbar from '@/components/NavBar.vue';
import QuickExit from '@/components/QuickExit.vue'; // Import QuickExit component

export default {
  components: {
    Footer,
    Header,
    HeaderMobile,
    Chatbot,
    MobileNavbar,
    Navbar,
    QuickExit // Include QuickExit component in components list
  }
}
</script>

<style scoped>
/* Add any global styles here if needed */
</style>
