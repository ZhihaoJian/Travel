<template>
    <div class="icons" >
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index" >
                <div class="icon"  v-for="item of page" :key="item.id" >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.url">
                    </div>
                    <p class="icon-desc" >{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {},
      icons: [
        {
          id: "001",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: "002",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          title: "广州必游"
        },
        {
          id: "003",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          title: "动植物园"
        },
        {
          id: "004",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          title: "游乐场"
        },
        {
          id: "005",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
          title: "两江夜游"
        },
        {
          id: "006",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          title: "夏日玩水"
        },
        {
          id: "007",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          title: "一日游"
        },
        {
          id: "008",
          url:
            "http://img1.qunarzz.com/piao/fusion/1808/8d/747c9a29b8dba402.png",
          title: "网红打卡"
        },
        {
          id: "009",
          url:
            "http://img1.qunarzz.com/piao/fusion/1808/8d/747c9a29b8dba402.png",
          title: "测试数据"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) pages[page] = [];
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/variable.styl';
@import '../../../assets/css/mixins.styl';

.icons>>>.swiper-container {
    height: 0;
    padding-bottom: 50%;
}

.icon {
    position: relative;
    overflow: hidden;
    width: 25%;
    height: 0;
    float: left;
    padding-bottom: 25%;

    .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;

        .icon-img-content {
            display: block;
            margin: 0 auto;
            height: 100%;
        }
    }

    .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        color: $darkTextColor;
        text-align: center;
        ellipse();
    }
}
</style>
