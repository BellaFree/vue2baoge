<template>
<div class="LayoutView">
  <NavigationBar />
  <div :class="{'layout-container': isNav}">
    <router-view />
  </div>
</div>
</template>

<script>
import { browser } from '@/util'
import NavigationBar from '../components/NavigationBar.vue'
export default {
  name: 'LayoutView',
  components: {
    NavigationBar
  },
  data () {
    return {
      isNav: true
    }
  },
  mounted() {
    const os = browser()
    this.isNav = (!os.isApp && !os.isWeixin)
    console.log(os.isApp, os.isWeixin)
  }
}
</script>

<style>

</style>
