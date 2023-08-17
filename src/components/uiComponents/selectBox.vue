<script>
export default {
  name: "selectBox",
  props: {
    value: Object
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
  methods:{
    getValue(val){
      this.selectedItem=val
    }
  }
}
</script>

<template>
  <div>

    <label for="countries"
           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ value.title }}</label>
    <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-none">
      <option v-for="(item,index) in value.params" @change="getValue(item.value)" :key="index" :value="item.value">
        {{ item.title }}
      </option>
    </select>

  </div>
</template>

<style scoped>

</style>