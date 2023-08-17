<script>
export default {
  name: "breadCrumbs"
}
</script>

<template>
<div>

  <nav class="flex items-center mt-16" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <img src="@/assets/icons/menuIcons/Category 2.png"  alt="">
      </li>
      <li>
        <div class="flex items-center">
          <img src="@/assets/icons/extra/leftArrow.png" class="mx-4"  alt="">
          <a href="#" class="text-sm font-semibold text-gray hover:text-blue-600">خزانه داری</a>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <img src="@/assets/icons/extra/leftArrow.png" class="ml-3" alt="">
          <span class=" text-sm font-semibold text-primary md:ml-2 dark:text-gray-400">تعریف حساب بانکی</span>
        </div>
      </li>
    </ol>
  </nav>

</div>
</template>

<style scoped>

</style>