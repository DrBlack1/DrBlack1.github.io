<template>
  <div class="home">
    <div class="row">
      <!-- User search location -->
      <div class="col-4 offset-2 mt-4 mb-4">
        <div class="input-group mb-3">
        <input v-model="location" @keyup.enter="updateLocation" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Go</button>
  </div>
</div>
      </div>
      <!-- Current weather display -->
      <div class="col-4 offset-2 text-center" v-if="forecast">
        <div class="card bg-secondary mb-3">
          <div class="card-header">CURRENT WEATHER in {{ address.name }} {{ address.street }}</div>
          <div class="card-body">
           <h4 class="card-title"> {{ forecast.currently.summary }}</h4>
           <span class="card-text icon">
            {{ icons[forecast.currently.icon] }}
            </span>
          <div class="card-text temp">
            {{ forecast.currently.temperature }} ℉
          <div class="card-text">
            {{ forecast.currently.precipProbability}}% chance of rain
        </div>
      </div>
     </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import API from '@/lib/API';


export default {
  name: 'home',
// Function that returns an object
  data() {
    return {
    address:'',
    location: '',
    forecast: null,
    icons: {
      'clear-day':'☀️',
      'clear-night': '✨',
      'rain': '🌧',
      'snow': '❄️',
      'sleet': '🌨',
      'wind': '💨',
      'fog': '🌫',
      'cloudy': '☁️',
      'partly-cloudy-day': '⛅️',
      'partly-cloudy-night': '🌙☁️',
      'hail': '🌧',
      'thunderstorm': '🌩',
      'tornado': '🌪'
    },
    };
  },
  mounted() {
    this.loadWeather('53.4808', '2.2426');
  },
  methods: {
    loadWeather(lat, lng) {
    API.getAddress(lat, lng).then(result => {
      this.address = result;
    });
      API.getForecast(lat, lng).then(result => {
      this.forecast = result;
    });
    },
    updateLocation() {
      API.getCoordinates(this.location).then(result => {
        this.loadWeather(result.latitude, result.longitude);
      })
    }
  }

};
</script>

<style>
body, .temp {
  font-size: 1em;
}

.icon {
  font-size: 6em;
}
</style>
