<template>
    <div>
       <city-header/>
       <city-search :cities="cities" />
       <city-list :letter="letter" :cities="cities" :hotCities="hotCities" />
       <city-alphabet @change="handleLetterChange" :cities="cities" />
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
      hotCities: [],
      letter: ""
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
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
