<script>
export default {
  name: "modalCustom",
  props: {
    value: Boolean
  },
  watch: {
    value(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<template>
  <div>

    <!-- Main modal -->
    <div v-show="false" tabindex="-1" aria-hidden="true"
         class="fixed top-0 left-0 right-0 z-50 bottom-0 w-full rounded-2xl p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

          <div class="flex items-center border-b-2 border border-light-gray">
            <button type="button"
                    class="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal">
              <img src="@/assets/icons/extra/Close remove 1.png" alt="">
              <span class="sr-only">Close modal</span>
            </button>

            <div class="px-6 py-6 lg:px-8">
              <slot name="modalHead"/>
            </div>
          </div>

          <div class="w-full items-center">
            <slot name="modalContent"/>
          </div>

          <div class="w-full border border-t-2 p-5 border-light-gray">
            <slot name="modalActions"/>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<style scoped>

</style>