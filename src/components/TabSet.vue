<template>
  <div>
    <ul>
      <li v-for="tabItem in tabSet" :key="tabItem.id">
        <TabsetItem :text="tabItem.text" :id="tabItem.id"></TabsetItem>
      </li>
    </ul>
  </div>
</template>

<script>
import TabsetItem from './TabsetItem.vue'

export default {
  name: 'TabSet',
  components: {
    TabsetItem
  },
  props: [
    'tabSet'
  ]
}
</script>

<style scoped>
</style>
