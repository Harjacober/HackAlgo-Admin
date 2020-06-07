<template>
  <header class="bg-white w-screen text-gray-900 flex justify-between items-center pr-3">
    <a class="text-3xl sideBarTrigger" href="#">
      <i class="uil uil-bars"></i>
    </a>
    <router-link to="/profile">
      <i class="uil uil-user"></i>
    </router-link>
  </header>
</template>
<style lang="scss" scoped>
header {
  border-bottom: 1px solid #d3d3d3;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
<script>
export default {};
</script>
