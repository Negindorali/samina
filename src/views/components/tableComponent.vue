<template>
  <div>
    <div class="flex px-5 items-center justify-between pb-4">
      <div class="flex">
        <div class="relative">
          <div class="absolute inset-y-0 right-[14px] flex items-center pl-3 pointer-events-none">
            <img src="@/assets/icons/extra/Search.png" alt="">
          </div>
          <input type="text" v-model="searchField"
                 class="block p-2 pl-10 pr-9 text-sm text-gray-900 border  border-1 rounded-lg w-80 bg-gray-50 border-[#D0D5DD] focus:outline-none "
                 placeholder="جستجو">
        </div>
        <button @click="showModal=!showModal" class=" border-[#D0D5DD] border p-3 mr-2 rounded-lg" type="button">
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
    <div class="w-full border border-1 border-[#EAECF0] bg-[#F9FAFB] rounded-[16px]">
      <div class="max-w-full overflow-x-scroll whitespace-nowrap relative rounded-[16px]">
        <table class="text-sm text-right rounded-lg text-gray-500 text-gray">
          <thead class="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" class="p-4 sticky bg-white right-0">
              <div class="flex items-center">
                <input @change="selectAll($event)" type="checkbox"
                       id="selectAll"
                       class="w-4 h-4 text-[#155EEF] bg-[#D1E0FF] rounded-lg focus:ring-none">
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="row" class="px-6 py-4 w-12 font-medium text-gray whitespace-nowrap sticky bg-white right-12">
              عنوان حساب
            </th>
            <td class="px-6 py-4 w-12">
              کد حساب
            </td>
            <td class="px-6 py-4 w-12">
              شماره حساب
            </td>
            <td class="px-6 py-4 w-12">
              شماره شبا
            </td>
            <td class="px-6 py-4 w-12">
              شماره کارت
            </td>

            <td class="px-6 py-4 w-12">
              وضعیت درگاه
            </td>
            <td class="px-6 py-4 w-12">
              وضعیت کارتخوان
            </td>

            <th scope="col" class="px-6 py-3 sticky left-0 w-40 z-50 bg-[#F9FAFB]">

            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in tableInfos" :key="index"
              class="bg-white border-b border-[#EAECF0] hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4 sticky bg-white right-0">
              <div class="flex items-center">
                <input type="checkbox"
                       :value="index"
                       @change="selectAll($event)"
                       class="w-4 h-4 text-[#D1E0FF] rounded-xl bg-gray border border-1 border-[#155EEF] focus:ring-none focus:ring-2">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 w-40 font-medium text-gray whitespace-nowrap sticky bg-white right-12">
              {{ item.accountTitle | trimSring }}
            </th>
            <td class="px-6 py-4 w-40">
              {{ item.accountCode }}
            </td>
            <td class="px-6 py-4 w-40">
              {{ item.accountNumber }}
            </td>
            <td class="px-6 py-4 w-40">
              {{ item.sheba }}
            </td>
            <td class="px-6 py-4 w-40">
              {{ item.cardNumber }}
            </td>
            <td class="px-6 py-4 w-40">
              {{ item.portStatus === 'active' ? 'متصل' : 'غیرمتصل' }}
            </td>
            <td class="px-6 py-4 w-40">
              {{ item.cardStatus === 'active' ? 'متصل' : 'غیرمتصل' }}
            </td>


            <td class="mt-2 sticky left-0  bg-white">
              <div class="flex w-40">
                <button type="button" class="btn p-2 mx-auto  font-medium">
                  <img src="@/assets/icons/tableIcons/Show.png" alt="">
                </button>
                <button type="button" class="btn p-2 mx-auto font-medium">
                  <img src="@/assets/icons/tableIcons/Edit-Square.png" alt="">
                </button>
                <button type="button" class="btn p-2 mx-auto font-medium">
                  <img src="@/assets/icons/tableIcons/Delete.png" alt="">
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="flex pb-5 items-center mx-auto mt-5">
        <button class="inline-flex items-center mx-auto" @click="limitation = limitation+10">
          مشاهده بیشتر
          <img src="@/assets/icons/tableIcons/Arrow - Down 2.png" alt="" class="mr-2">
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "tableComponent",
  props: {
    value: String
  },
  data() {
    return {
      tableData: [
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳...",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "active",
          "cardStatus": "active"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان تهران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان مازندران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان مازندران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان مازندران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان مازندران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان مازندران",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان خوزستان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان خوزستان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان خوزستان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان خوزستان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
        {
          "accountTitle": "بانک ملی شعبه خواجو استان اصفهان",
          "accountCode": "۵۶۹۸۷۴۵۲۱۴۵۹۸۷۴۵۶",
          "accountNumber": "۵۵۴۸۷۵۵۲",
          "sheba": "IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۰۸۹۰۰۰۰۰۰",
          "cardNumber": "۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶",
          "portStatus": "deactive",
          "cardStatus": "deactive"
        },
      ],
      showMore: false,
      showModal: false,
      limitation: 10,
      selectedRow: [],
      searchField: ''
    }
  },
  computed: {
    tableInfos() {
      this.$emit('input', this.tableData.length);
      return this.tableData.slice(0, this.limitation);
      // eslint-disable-next-line no-unreachable
    },

  },
  methods: {
    selectAll(e) {
      console.log(e.target.value)
    }
  },
  watch:{
    showModal(value){
      this.$emit('openFilter',value)
    }
  }
}
</script>

<style scoped>

</style>