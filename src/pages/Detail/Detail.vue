<template>
    <div>
        <detail-banner 
            :sightName="sightName" 
            :bannerImg="bannerImg" 
            :gallaryImgs="gallaryImgs" 
        />
        <detail-header/>
        <div class='content'>
            <detail-list :list="list" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DetailBanner from './components/Banner';
    import DetailHeader from './components/Header';
    import DetailList from './components/List';
    
    export default {
        name:'Detail',
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return {
                sightName:"",
                bannerImg:'',
                gallaryImgs:[],
                list:[]
            }
        },
        methods:{
            getDetailInfo(){
                const id = this.$route.params.id;
                axios.get(`http://localhost:3000/detail?id=${id}`).then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc(res){
                const data = res.data;
                if(data){
                    const { sightName, bannerImg, gallaryImgs, categoryList } = data;
                    this.sightName = sightName;
                    this.bannerImg = bannerImg;
                    this.gallaryImgs = gallaryImgs;
                    this.list = categoryList;
                }
            }
        },
        mounted() {
            this.getDetailInfo();
        }
    }
</script>

<style lang="stylus"  scoped>
    .content{
        height:50rem;
    }
</style>