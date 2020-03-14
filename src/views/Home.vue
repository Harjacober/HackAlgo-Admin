<template>
  <div class="home flex flex-col">
    <section>
      <ul class="flex flex-row">
        <li class="flex m-2">
          <router-link class="flex flex-col justify-center items-center flex-no-wrap p-5 bg-white rounded" to="/problemset">
            <p class="uppercase font-light tracking-widest"><i class='uil uil-processor'></i>Problem Set</p>
            <p class="text-5xl font-bold text-gray-800">15</p>
          </router-link>
        </li>
        <li class="flex m-2">
          <router-link class="flex flex-col justify-center items-center flex-no-wrap p-5 bg-white rounded" to="/problemset">
            <p class="uppercase font-light tracking-widest"><i class='uil uil-trophy'></i>Contests</p>
            <p class="text-5xl font-bold text-gray-800">03</p>
          </router-link>
        </li>
        <li class="flex m-2">
          <router-link class="flex flex-col justify-center items-center flex-no-wrap p-5 bg-white rounded" to="/problemset">
            <p class="uppercase font-light tracking-widest"><i class='uil uil-users-alt'></i>o-Gees</p>
            <p class="text-5xl font-bold text-gray-800">1,520</p>
          </router-link>
        </li>
        <li class="flex m-2">
          <router-link class="flex flex-col justify-center items-center flex-no-wrap p-5 bg-white rounded" to="/problemset">
            <p class="uppercase font-light tracking-widest"><i class='uil uil-constructor'></i>Admin</p>
            <p class="text-5xl font-bold text-gray-800">12</p>
          </router-link>
        </li>
      </ul>
    </section>
    <section>
      <div class="flex flex-col flex-no-wrap bg-white rounded p-5 max-w-sm m-2">
        <p class="text-xs uppercase tracking-widest text-gray-500"><i class='uil uil-chat-info'></i>Help</p>
        <p class="font-bold py-3">Getting Started</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nihil architecto quos id beatae exercitationem quidem ullam. Non dolor quos quis impedit quia? Distinctio obcaecati eius asperiores amet pariatur voluptate?</p>
        <router-link to="/help" class="text-normal uppercase rounded-full tracking-widest text-blue-600 py-3">Read On ...</router-link>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>

</style>
