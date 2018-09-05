<template>
    <div>
        <div class='banner' @click='handleBannerClick' >
            <img class='banner-img' :src="bannerImg" />
            <div class='banner-info'>
                <div class='banner-title' >{{this.sightName}}</div>
                <div class='banner-number' ><span class='iconfont banner-icon'>&#xe692; </span>{{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <FadeAnimation>
            <Gallary @close='handleGrallaryClose' :imgs="this.gallaryImgs" v-show="showGrallary" />
        </FadeAnimation>
    </div>
</template>

<script>

    import Gallary from '../../../common/Gallary/Gallary';
    import FadeAnimation from '../../../common/FadeAnimation/FadeAnimation';

    export default {
        name:'DetailBanner',
         props:{
            sightName:String,
            bannerImg:String,
            gallaryImgs:Array
        },
        data(){
            return {
                showGrallary:false
            }
        },
        components:{
            Gallary,
            FadeAnimation
        },
        methods:{
            handleBannerClick(){
                this.showGrallary = true;
            },
            handleGrallaryClose(){
                this.showGrallary = false;
            }
        }
    }
</script>

<style lang="stylus"  scoped>
    .banner{
        position:relative;
        overflow:hidden
        height:0;
        padding-bottom:55%;
        .banner-img{
            width:100%;
        }
        .banner-info{
            background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            line-height:.6rem;
            color:#fff;
            display:flex;

            .banner-title{
                flex:1;
                font-size:.32rem;
                padding:0 .2rem;
            }

            .banner-number{
                margin-top:.14rem;
                padding:0 .4rem;
                line-height:.32rem;
                height:.32rem;
                border-radius:.2rem;
                background:rgba(0,0,0,.8);
                font-size:.24rem;

                .banner-icon{
                    font-size:.24rem;
                }
            }
        }
    }
</style>