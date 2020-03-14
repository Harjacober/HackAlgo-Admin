<template>
  <div class="flex p-5 bg-white">
    <ul class="flex flex-col flex-no-wrap w-full problemset-ul">
      <li class="flex lg:justify-between w-full py-3 items-center">
        <router-link to="/" class="flex flex-col flex-no-wrap">
          <span class="flex flex-row flex-no-wrap items-center">
            <p class=" font-medium text-xl">Code gees Summmer of code</p>
            <p class="text-xl pl-4"><i class='uil uil-edit-alt'></i></p>
          </span>
          <p class=" tracking-widest text-xs text-gray-700">25.JAN.2020</p>
        </router-link>
        <span class="flex flex-no-wrap">
          <span class="flex flex-col flex-no-wrap items-center">
            <p class="solvedby">participants</p>
            <p class="flex font-semibold text-2xl">1,387</p>
          </span>
        </span>
      </li>
      <li class="flex lg:justify-between w-full py-3 items-center">
        <router-link to="/" class="flex flex-col flex-no-wrap">
          <span class="flex flex-row flex-no-wrap items-center">
            <p class=" font-medium text-xl">BenHaxe recuitment</p>
            <p class="text-xl pl-4"><i class='uil uil-edit-alt'></i></p>
          </span>
          <p class=" tracking-widest text-xs text-gray-700">02.JAN.2020</p>
        </router-link>
        <span class="flex flex-no-wrap">
          <span class="flex flex-col flex-no-wrap items-center">
            <p class="solvedby">participants</p>
            <p class="flex font-semibold text-2xl">501</p>
          </span>
        </span>
      </li>
      <li class="flex lg:justify-between w-full py-3 items-center">
        <router-link to="/" class="flex flex-col flex-no-wrap">
          <span class="flex flex-row flex-no-wrap items-center">
            <p class=" font-medium text-xl">Dejavu black hat contest</p>
            <p class="text-xl pl-4"><i class='uil uil-edit-alt'></i></p>
          </span>
          <p class=" tracking-widest text-xs text-gray-700">25.JAN.2020</p>
        </router-link>
        <span class="flex flex-no-wrap">
          <span class="flex flex-col flex-no-wrap items-center">
            <p class="solvedby">participants</p>
            <p class="flex font-semibold text-2xl">0</p>
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.problemset-ul {
  li {
    border-bottom: 1px solid #eee;
    a {
      i {
        color: #a1a1a1;
      }
    }
    a:hover {
      color: $secondary-color;
    }
  }
  li:last-child {
    border-bottom: none;
  }
  .solvedby {
    font-size: 9px;
    color: #666666;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
