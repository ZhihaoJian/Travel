<template>
<div class="wrapper" >
  <swiper :options="swiperOption" v-if="showSwiper" >
    <swiper-slide v-for="swiper of this.swiperList" :key="swiper.id" >
        <img class="swiper-img" :src='swiper.imgUrl' />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        },
        // autoplay: true,
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length > 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
