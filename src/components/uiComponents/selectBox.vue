<script>
export default {
  name: "selectBox",
  props: {
    value: String,
    informations: Object
  },
  data() {
    return {
      selectedItem: ''
    }
  },
  watch: {
    selectedItem: {
      handler(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    getValue(val) {
      this.selectedItem = val.target.value
    }
  }
}
</script>

<template>
  <div>
    <label class="block mb-2 text-sm font-semibold text-gray text-right">{{ informations.title }}</label>
    <select
        @change="getValue($event)"
        class="bg-white border border-1 border-[#D0D5DD] text-gray text-sm rounded-lg focus:ring-none focus:border-[#D0D5DD] block w-full p-2.5">
      <option v-for="(item,index) in informations.params" :key="index" :value="item.value">
        {{ item.title }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>