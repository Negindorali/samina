<script>
export default {
  name: "modalCustom",
  props: {
    value: Boolean,
    width:{
      type:String,
      default:'max-w-sm'
    }
  },
  watch: {
    value(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    closeDialog() {
      // eslint-disable-next-line vue/no-mutating-props
      this.value = !this.value
    }
  }
}
</script>

<template>
  <div>
    <!-- Main modal -->
    <div v-show="value" class="fixed flex top-0 left-0 right-0 z-50 w-full bg-[#34405473] p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1px)] max-h-full">
      <div :class="width" class="relative w-full max-h-full opacity-100 mx-auto my-auto">
        <!-- Modal content -->
        <div class="relative bg-white shadow border-none opacity-100 rounded">
          <div class="flex items-center border-b-2 border border-light-gray bg-white">
            <button type="button"
                    @click="closeDialog"
                    class="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal">
              <img src="@/assets/icons/extra/Close remove 1.png" alt="">
              <span class="sr-only">Close modal</span>
            </button>

            <div class="pl-6 pr-2 pt-3 pb-4 lg:px-8">
              <slot name="modalHead"/>
            </div>
          </div>

          <div class="w-full items-center">
            <slot name="modalContent"/>
          </div>

          <div class="w-full border border-t-2 py-5 px-3 border-light-gray">
            <slot name="modalActions"/>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<style scoped>

</style>