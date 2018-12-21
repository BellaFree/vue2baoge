<template>
  <nav class="nav-bar">
    <h1>{{heading}}</h1>
    <span>
      <i @click="leftClick"><icon :name="leftIcon" class="icon"></icon></i>
      <i @click="leftClick">leftTitle</i>
    </span>
    <span>
      <i @click="rightClick">rightClick</i>
      <i @click="rightClick">rightTitle</i>
    </span>
  </nav>
</template>
<script>
export default {
  name: 'sdsds',
  // props: {
  //
  // },
  data() {
    return{
      heading: '123'
    }
  },
  method: {
    leftClick (e) {

    },
    rightClick (e) {

    }
  }
}
</script>
<style lang="scss">
  nav.nav-bar {
    background: gray;
  }
</style>
