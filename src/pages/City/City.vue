<template>
    <div>
       <city-header/>
       <city-search/>
       <city-list :cities="cities" :hotCities="hotCities" />
       <city-alphabet :cities="cities" />
    </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data: function() {
    return {
      cities: {},
      hotCities: []
    };
  },
  methods: {
    getCityInfo() {
      axios.get("http://localhost:3000/cities").then(this.handleGetCityInfo);
    },
    handleGetCityInfo(res) {
      const data = res.data;
      if (data) {
        const { cities, hotCities } = data;
        this.cities = cities;
        this.hotCities = hotCities;
      }
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
