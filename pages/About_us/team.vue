<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />

    <div class="top-section"></div>
    <div>
      <text-component
        title="Our Team"
        text="At Guiding Light, we believe in the power of community and compassion. Our dedicated team of professionals and volunteers work tirelessly to support women facing family maltreatment. With a blend of personal experience, professional expertise, and a shared mission to create a safer world, each team member plays a crucial role in driving our cause forward."
      >
      </text-component>
    </div>

    <v-container>
      <v-row class="justify-center">
        <v-col
          v-for="person in persons"
          :key="person.id"
          cols="12"
          sm="4"
          md="3"
          class="fade-in-card"
        >
          <PersonCard :person="person" @learn-more="openDetail" />
        </v-col>
      </v-row>
    </v-container>
    <PersonDetail
      v-if="showDetail"
      :person="selectedPerson"
      @back="closeDetail"
    />
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import PersonCard from "~/components/PersonCard.vue";
import PersonDetail from "~/components/PersonDetail.vue";

export default {
  head() {
    return {
      title: "Team - Guiding-Light",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Meet the dedicated team members of Guiding-Light who work tirelessly for our cause.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Guiding-Light, Team, Meet Our Team, Nonprofit",
        },
      ],
    };
  },
  components: {
    Breadcrumbs,
    PersonCard,
    PersonDetail,
  },
  data() {
    return {
      breadcrumbs: [
        { label: "About Us", path: "/About-us" },
        { label: "Team", path: "/About_us/team" },
      ],
      persons: [],
      selectedPerson: null,
      showDetail: false,
    };
  },
  async mounted() {
    const { data, error } = await this.$supabase
      .from("persons")
      .select("*")
      .order("priority", { ascending: true })
      .order("id", { ascending: true }); // Ensure a stable order when priorities are the same

    if (error) {
      console.error("Error fetching persons:", error);
    } else {
      this.persons = data;
      this.$nextTick(() => {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll(); // Trigger scroll effect on initial load
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    openDetail(person) {
      this.selectedPerson = person;
      this.showDetail = true;
    },
    closeDetail() {
      this.showDetail = false;
      this.selectedPerson = null;
    },
    handleScroll() {
      const cards = document.querySelectorAll(".fade-in-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          card.classList.add("fade-in");
        }
      });
    },
  },
};
</script>

<style scoped>
.top-section {
  background: url("static/img_team_01.jpg") no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  height: 600px;
  margin-top: 20px;
  text-align: center;
}

.fade-in-card {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-card.fade-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.title {
  font-size: 3em !important; /* Increased font size */
  text-align: center;
  margin: 30px;
}
.h2 {
  font-size: 2em !important;
  margin-left: 1%;
  font-weight: bold;
}
p {
  margin-left: 3%;
  margin-right: 3%;
}

.fade-in-card {
  animation: zoomIn 0.5s ease-out;
}

@media (max-width: 600px) {
  .top-section {
    padding: 20px;
  }
}
</style>
