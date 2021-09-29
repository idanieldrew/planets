<template>
  <div
    class="
      navbar
      flex
      py-2
      px-3
      container
      mx-auto
      w-full
      bg-transparent
      fixed
      z-20
      text-red-500
    "
  >
    <div class="w-1/2 pl-5">logo</div>
    <div class="flex w-1/2 justify-end">
      <div class="px-5">
        <nuxt-link to="signin">SignIn</nuxt-link>
      </div>
      <div class="px-5">
        <nuxt-link to="about">About us</nuxt-link>
      </div>
      <div class="px-5">
        <nuxt-link to="info">Info</nuxt-link>
      </div>
    </div>
  </div>
</template>