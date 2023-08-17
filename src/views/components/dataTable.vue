<script>
import TableHead from "@/views/components/tableHead.vue";
import ModalCustom from "@/views/components/modalCustom.vue";
import SelectBox from "@/components/uiComponents/selectBox.vue";
import TableComponent from "@/views/components/tableComponent.vue";

export default {
  name: "dataTable",
  components: {TableComponent, SelectBox, ModalCustom, TableHead},
  data() {
    return {
      showModal: false,
      cardStatus: {
        title: 'وضعیت کارتخوان',
        params: [
          {title: 'همه', value: 'all'},
          {title: 'فعال', value: 'active'},
          {title: 'غیرفعال', value: 'deactive'},
        ]
      },
      portStatus: {
        title: 'وضعیت درگاه',
        params: [
          {title: 'همه', value: 'all'},
          {title: 'فعال', value: 'active'},
          {title: 'غیرفعال', value: 'deactive'},
        ]
      },
      pageHeadeInfo: {
        title: 'تعریف حساب بانکی',
        subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
        accountLength: 120
      },
      filters: {
        cardStatus: '',
        portStatus: ''
      }
    }
  }
}
</script>

<template>
  <div>
    <table-head :data="pageHeadeInfo" class="mt-5"></table-head>

    <modal-custom :width="'max-w-sm'" v-model="showModal">
      <template v-slot:modalHead>
        <div class="flex items-center">
          <button class="border-[#D0D5DD] border p-3 rounded-lg" type="button">
            <img src="@/assets/icons/extra/Filter.png" alt="">
          </button>
          <h1 class="mr-3 font-semibold text-[18px]">فیلترها</h1>
        </div>
      </template>

      <template v-slot:modalContent>

        <div class="w-full p-5">
          <select-box class="my-3" v-model="filters.cardStatus" :informations="cardStatus"></select-box>
          <select-box class="mt-2" v-model="filters.portStatus" :informations="portStatus"></select-box>
        </div>
      </template>

      <template v-slot:modalActions>

        <div class="grid grid-cols-2 text-center items-center px-2">
          <button
              class="bg-primary font-semibold text-center  text-white text-sm py-2 mr-2 rounded-lg"
              type="button">
            تایید
          </button>
          <button
              @click="showModal=!showModal"
              class="border border-1 border-[#D0D5DD] font-semibold text-center  text-gray text-sm py-2 mr-2 rounded-lg"
              type="button">
            انصراف
          </button>
        </div>
      </template>
    </modal-custom>

    <table-component @openFilter="(val)=>{this.showModal=val}" v-model="pageHeadeInfo.accountLength" class="mt-8"></table-component>

  </div>
</template>

<style scoped>

</style>