<script>
export default {
  name: "avatarSection"
}
</script>

<template>
  <div class="flex items-center">
    <div class="flex items-center ml-8">
      <button type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-example" >
        <img src="@/assets/icons/extra/Category 3.svg" class="ml-2" alt="">
        <span class="flex-1 ml-3 text-right whitespace-nowrap">سالی مالی ۱۴۰۲</span>
        <img src="@/assets/icons/menuIcons/Stroke-1.png" alt="">
      </button>
    </div>
    <div class="flex items-center">
      <img src="@/assets/icons/menuIcons/Category 3.svg" alt="" class="ml-2">
      <img src="@/assets/icons/extra/Frame 81.png" alt="" class="ml-2">
      <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
              aria-expanded="false" data-dropdown-toggle="dropdown-user">
        <span class="sr-only">Open user menu</span>
        <img class="w-[46px] h-[46px] rounded-full" src="@/assets/icons/logo/Component 2.png"
             alt="user photo">
      </button>
    </div>

  </div>
</template>

<style scoped>

</style>