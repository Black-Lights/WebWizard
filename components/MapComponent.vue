
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <!-- Search Box -->
        <div class="search-box-container">
          <v-text-field
            v-model="searchQuery"
            label="Search Location"
            prepend-icon="mdi-magnify"
            @keyup.enter="searchLocation"
            class="search-box"
            ref="searchBoxContainer"
          ></v-text-field>
        </div>
        <!-- Map Container -->
        <div ref="map" class="map"></div>
      </v-col>
    </v-row>
    <!-- Get Current Location Button -->
    <v-row>
      <v-col cols="12" md="12">
        <v-btn @click="getCurrentLocation" color="primary" class="location-button">Get Current Location</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  data() {
    return {
      map: null,
      marker: null,
      searchBox: null,
      searchQuery: '',
      directionsService: null,
      directionsRenderer: null,
      defaultLocation: { lat: 45.4642, lng: 9.1900 }, // Milan, Italy
      infoWindow: null,
    };
  },
  mounted() {
    this.loadGoogleMaps();
  },
  methods: {
    async loadGoogleMaps() {
      const loader = new Loader({
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });
      await loader.load();
      this.initMap();
    },
    initMap() {
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.defaultLocation,
        zoom: 14,
      });

      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.map);

      this.infoWindow = new google.maps.InfoWindow({
        content: `
          <v-card width="100%" max-width="400px" class="info-window-card">
            <v-card-title>
              <span class="headline">Guiding Light Office</span>
            </v-card-title>
            <v-card-text>
              <p style="font-size: 16px;">Via Larga 12, 20122, Milan Italy</p>
              <v-btn @click="getDirections()" color="primary">Get Directions</v-btn>
            </v-card-text>
          </v-card>
        `,
        ariaLabel: 'Guiding Light Office',
      });

      this.addDefaultMarker();
      this.initSearchBox();

      this.map.addListener('click', (event) => {
        this.placeMarker(event.latLng);
      });

      // Open the info window for the default marker when the page loads
      this.openInfoWindow();

      // Get the user's current location
      this.getCurrentLocation();
    },
    addDefaultMarker() {
      this.marker = new google.maps.Marker({
        position: this.defaultLocation,
        map: this.map,
        title: 'Guiding Light Office',
      });

      // Add a click listener to the marker to reopen the info window
      this.marker.addListener('click', () => {
        this.infoWindow.open(this.map, this.marker);
      });
    },
    initSearchBox() {
      this.searchBox = new google.maps.places.SearchBox(this.$refs.searchBoxContainer.querySelector('input'));

      this.searchBox.addListener('places_changed', () => {
        const places = this.searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log('Returned place contains no geometry');
            return;
          }

          const location = place.geometry.location;
          this.placeMarker(location);
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(location);
          }
        });
        this.map.fitBounds(bounds);
      });
    },
    placeMarker(location) {
      if (this.marker) {
        this.marker.setMap(null);
      }
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
      this.map.panTo(location);
    },
    searchLocation() {
      if (!this.searchQuery) return;

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.searchQuery }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const location = results[0].geometry.location;
          this.placeMarker(location);
          this.map.setCenter(location);
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
        }
      });
    },
    openInfoWindow() {
      this.infoWindow.open(this.map, this.marker);
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.map.setCenter(pos);
            this.placeMarker(pos);
            this.calculateAndDisplayRoute(pos, this.defaultLocation);
          },
          () => {
            console.error('Error getting the current location.');
          }
        );
      } else {
        console.error("Browser doesn't support Geolocation");
      }
    },
    getDirections() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const start = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.calculateAndDisplayRoute(start, this.defaultLocation);
          },
          () => {
            console.error('Error getting the current location for directions.');
          }
        );
      } else {
        console.error("Browser doesn't support Geolocation for directions");
      }
    },
    calculateAndDisplayRoute(start, end) {
      this.directionsService.route(
        {
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionsRenderer.setDirections(response);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        }
      );
    },
  },
};
</script>

<style>

.map {
  width: 60%;
  height: 60vh; /* Adjusted height to be responsive */
  position: relative;
  margin: 20px auto;
}

.search-box-container {
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 90%; /* Responsive width */
  max-width: 400px; /* Maximum width */
}


.search-box {
  width: 100%;
}

.v-card {
  font-size: 16px; /* Increase font size in the popup */
}

.v-btn {
  margin-top: 10px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .map {
    height: 50vh; /* Adjusted height for mobile */
    width: 90%;
  }

  .search-box-container {
    width: 95%; /* Adjust search box width for mobile */
  }

  .v-btn {
    font-size: 14px; /* Adjust button font size for mobile */
  }
}

.location-button {
  margin-top: 10px; /* Add some space above the button */
}
</style>
