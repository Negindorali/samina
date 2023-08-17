<script>
import TableHead from "@/views/components/tableHead.vue";
import ModalCustom from "@/views/components/modalCustom.vue";
import SelectBox from "@/components/uiComponents/selectBox.vue";

export default {
  name: "dataTable",
  components: {SelectBox, ModalCustom, TableHead},
  data() {
    return {
      showModal: false,
      cardStatus:{
        title: 'وضعیت کارتخوان',
        params:[
          {title:'فعال',value:'active'},
          {title:'غیرفعال',value:'deactive'},
        ]
      },
      pageHeadeInfo: {
        title: 'تعریف حساب بانکی',
        subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
        accountLength: 120
      }
    }
  }
}
</script>

<template>
  <div>
    <table-head :data="pageHeadeInfo" class="mt-5"></table-head>
    <modal-custom v-model="showModal">
      <template v-slot:modalHead>
        <div class="flex items-center">
          <button class=" border-[#D0D5DD] border p-2 mr-2 rounded-lg" type="button">
            <img src="@/assets/icons/extra/Filter.png" alt="">
          </button>
          <h1 class="mr-3 font-semibold">فیلترها</h1>
        </div>
      </template>
      <template v-slot:modalContent>
        <div class="w-full p-5">
          <select-box v-model="cardStatus"></select-box>
        </div>
      </template>
      <template v-slot:modalActions>
        <div class="grid grid-cols-2 text-center items-center px-5">
          <button
              class="bg-primary font-semibold text-center  text-white text-sm py-2 mr-2 rounded-lg"
              type="button">
            تایید
          </button>

          <button
              class="border border-1 border-light-gray font-semibold text-center  text-gray text-sm py-2 mr-2 rounded-lg"
              type="button">
            انصراف
          </button>
        </div>
      </template>
    </modal-custom>
    <div class="relative overflow-x-auto p-5 sm:rounded-lg mt-5">
      <div class="flex items-center justify-between pb-4">
        <div class="flex">
          <div class="relative">
            <div class="absolute inset-y-0 right-[14px] flex items-center pl-3 pointer-events-none">
              <img src="@/assets/icons/extra/Search.png" alt="">
            </div>
            <input type="text" id="table-search"
                   class="block p-2 pl-10 pr-9 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 border-[#D0D5DD] focus:border-none"
                   placeholder="جستجو">
          </div>
          <button @click="showModal=true" class=" border-[#D0D5DD] border p-3 mr-2 rounded-lg" type="button">
            <img src="@/assets/icons/extra/Filter.png" alt="">
          </button>
        </div>
        <div class="flex justify-end">
          <button class=" border-[#D0D5DD] border p-2 mr-2 rounded-lg" type="button">
            <img src="@/assets/icons/extra/printer 2.svg" alt="">
          </button>
          <button class=" border-[#D0D5DD] border p-2 mr-2 rounded-lg" type="button">
            <img src="@/assets/icons/extra/Filter.png" alt="">
          </button>
          <button class=" border-[#D0D5DD] border p-2 mr-2 rounded-lg" type="button">
            <img src="@/assets/icons/tableIcons/Delete.png" alt="">
          </button>
          <button
              class="bg-primary font-semibold px-[10px] inline-flex items-center text-white text-sm py-1 mr-2 rounded-lg"
              type="button">
            <img src="@/assets/icons/tableIcons/Plus.png" class="ml-1" alt="">
            حساب جدید
          </button>
        </div>

      </div>
      <table class="w-full text-sm text-right rounded-lg text-gray-500 text-gray">
        <thead class="text-xs text-gray-700 uppercase bg-[#F9FAFB]">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                     class="w-4 h-4 text-[#155EEF] bg-[#D1E0FF] border-gray-300 rounded-lg focus:ring-none">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap ">
            عنوان حساب
          </th>
          <td class="px-6 py-4">
            کد حساب
          </td>
          <td class="px-6 py-4">
            شماره حساب
          </td>
          <td class="px-6 py-4">
            شماره شبا
          </td>
          <td class="px-6 py-4">
            شماره کارت
          </td>
          <th scope="col" class="px-6 py-3">

          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in 5" :key="item"
            class="bg-white border-b border-[#EAECF0] hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox"
                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap ">
            عنوان حساب
          </th>
          <td class="px-6 py-4">
            کد حساب
          </td>
          <td class="px-6 py-4">
            شماره حساب
          </td>
          <td class="px-6 py-4">
            شماره شبا
          </td>
          <td class="px-6 py-4">
            شماره کارت
          </td>
          <td class="mt-2 flex items-center">
            <button type="button" class="btn p-2 mx-auto  font-medium">
              <img src="@/assets/icons/tableIcons/Show.png" alt="">
            </button>
            <button type="button" class="btn p-2 mx-auto  font-medium">
              <img src="@/assets/icons/tableIcons/Edit-Square.png" alt="">
            </button>
            <button type="button" class="btn p-2 mx-auto  font-medium">
              <img src="@/assets/icons/tableIcons/Delete.png" alt="">
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<style scoped>

</style>