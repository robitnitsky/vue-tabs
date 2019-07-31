<template>
  <div>
    <h1>Tab heading {{ $route.params.id }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: ['text'],
}
</script>

<style scoped>
</style>
