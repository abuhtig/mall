<template>
  <div id="app">
    <router-view/>
    <mine-tab-bar/>
  </div>
</template>

<script>
import MineTabBar from 'components/content/mainTabbar/MineTabBar'
  export default{
    name:'app',
    components: {
      MineTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css"
</style>
