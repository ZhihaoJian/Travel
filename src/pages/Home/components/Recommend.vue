<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id" >
                <img :src="item.imgUrl" alt="" class="item-img" >
                <div class="item-info" >
                    <p class="item-title" >{{item.title}}</p>
                    <p class="item-desc" >{{item.desc}}</p>
                    <button class="item-btn" >查看详情</button>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
          title: "广州正佳极地海洋世界",
          desc: "近期小伙伴们收藏最！多！的景点😊"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201403/10/304b115ac96857308547caf29b96158c.jpg_200x200_af9b3589.jpg",
          title: "广东科学中心",
          desc: "帅的人都去过了😎，你还等什么~"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201307/23/5fb6f106b676770ac8d65eac.jpg_200x200_3ae983f6.jpg",
          title: "白水寨",
          desc: "记录唯美爱情，拍摄婚纱的好去处"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/6a/6aa18b6abc19fedf90.img.jpg_200x200_a29e162b.jpg",
          title: "黄金海岸水上乐园",
          desc: "这里最近很火哦，好多人都在点评它呢！"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1504/3d/3d096f06abb5c7a5.water.jpg_200x200_f62c3108.jpg",
          title: "广州星期8小镇",
          desc: "旋转观光舱，各个角度观赏广州迷人夜景"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/mixins.styl';

.title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}

.item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }

    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;

        .item-title {
            line-height: 0.4rem;
            font-size: 0.32rem;
            ellipse();
        }

        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            ellipse();
        }

        .item-btn {
            background: #ff9300;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
            margin-top: 0.16rem;
            color: #fff;
            line-height: 0.44rem;
        }
    }
}
</style>
