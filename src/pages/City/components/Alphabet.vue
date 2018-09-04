<template>
    <div class="list">
        <ul>
            <li class="item" >A</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "CityAlphabet"
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/variable.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;

    .item {
        text-align: center;
        line-height: 0.4rem;
        color: $bgColor;
    }
}
</style>

