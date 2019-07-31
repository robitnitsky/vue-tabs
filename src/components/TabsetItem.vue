<template>
  <div>
    <router-link :to="link">{{ text }} {{ id }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'TabsetItem',
  props: [
    'text',
    'id'
  ],
  computed: {
    link () {
      return `/tab/${this.id}`
    }
  },
}
</script>

<style scoped>
</style>
