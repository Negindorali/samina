<script>
import BreadCrumbs from "@/views/components/breadCrumbs.vue";
import DataTable from "@/views/components/dataTable.vue";

export default {
  name: "contentPage",
  components: {DataTable, BreadCrumbs}
}
</script>

<template>
  <div>
    <div class="p-4 w-[80%] mt-3 mr-[19rem] sm:ml-64">
        <bread-crumbs></bread-crumbs>
      <data-table></data-table>
    </div>

  </div>
</template>

<style scoped>

</style>