<script>
export default {
  name: "tableHead",
  props: {
    data: {}
  }
}
</script>

<template>
  <div>
    <div class="w-full flex items-center px-5">

      <div class="text-right mr-3">
        <div class="flex items-center">
          <h1 class="font-extrabold text-black text-[24px]">{{ data.title }}</h1>
          <span class="bg-light-gray text-gray-800 text-xs font-semibold mr-3 px-3 py-1 rounded-full">{{data.accountLength |persianNum}} حساب</span>
        </div>
        <p class="font-[16px] mt-2">{{ data.subTitle }}</p>
      </div>

      <div class="mr-auto flex">
        <button class="border-[#D0D5DD] border p-3 mr-2 rounded-lg" type="button">
          <img src="@/assets/icons/extra/Document pdf.svg" alt="">
        </button>
        <button class="float-left border-[#D0D5DD] inline-flex items-center border p-2 px-6 mr-2 rounded-lg"
                type="button">
          <img src="@/assets/icons/extra/Video.png" class="ml-2" alt="" width="18">
          آموزشی ویدیویی
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>