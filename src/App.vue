<template>
  <div id="app">
    <TabSet :tab-set="tabSet"></TabSet>
    <router-view></router-view>
  </div>
</template>

<script>
import TabSet from './components/TabSet.vue'

export default {
  name: 'app',
  components: {
    TabSet,
  },
  data() {
    return {
      tabSet: [
        {
          text: 'tab item',
          id: 'foo'
        },
        {
          text: 'tab item',
          id: 'bar'
        },
        {
          text: 'tab item',
          id: 'int'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
}
</style>
