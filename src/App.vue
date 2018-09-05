<template>
  <div>
    <keep-alive exclude='Detail' >
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang='stylus'>
</style>
