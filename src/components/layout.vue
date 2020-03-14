<template>
  <div id="layout">
    <ffHeader/>
    <div class="flex flex-row">
      <sideBar/>
      <div class="flex flex-col flex-no-wrap p-2 lg:p-5 content-holder
        ml-3 lg:ml-64 mt-10 w-full lg:w-9/12">
        <p class="font-light py-2 text-xl uppercase tracking-wider">{{routeName}}</p>
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
import ffHeader from '@/components/header.vue';
import sideBar from '@/components/sidebar.vue';

export default {
  name: 'home',
  props: ['routeName'],
  components: {
    ffHeader, sideBar,
  },
};
</script>
<style lang="scss" scoped>
</style>
