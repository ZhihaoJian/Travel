<template>
<div>
    <home-header/>
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
    
</div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios
        .get(`http://localhost:3000/index?city=${this.city}`)
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res) {
        const { iconList, recommendList, swiperList, weekendList } = res;
        this.swiperList = swiperList;
        this.iconList = iconList;
        this.recommendList = recommendList;
        this.weekendList = weekendList;
      }
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>