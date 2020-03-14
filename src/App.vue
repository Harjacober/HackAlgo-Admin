<template>
  <div id="app">
    <component
      :is='layout'
      v-bind:routeName="this.$router.currentRoute.name">
        <router-view/>
    </component>
  </div>
</template>
<script>
const defaultLayout = 'default';

export default {
  name: 'home',
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};
</script>
