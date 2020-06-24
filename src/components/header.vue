<template>
  <header class="bg-white w-screen text-gray-900 flex justify-between pr-3">
    <a class="text-3xl sideBarTrigger" href="#">
      <i class="uil uil-bars"></i>
    </a>
    <button type="button" @click="logout" aria-label="Logout">
      <i class="uil uil-exit" aria-hidden="true" />
    </button>
  </header>
</template>
<script>
import { logUserOut } from '../utils/auth';

export default {
  methods: {
    logout() {
      logUserOut();
      this.$router.push({
        name: 'login',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  border-bottom: 1px solid #d3d3d3;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
