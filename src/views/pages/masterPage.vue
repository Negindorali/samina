<template>
  <div class="grid grid-cols-5">
    <div class="z-50">
      <menu-page/>
    </div>

    <div class="col-span-4 relative overflow-y-auto max-h-screen">
      <nav-bar/>
      <content-page/>
    </div>
  </div>
</template>

<script>
import MenuPage from "@/views/components/menuPage.vue";
import ContentPage from "@/views/components/contentPage.vue";
import NavBar from "@/views/components/navBar.vue";

export default {
  name: "masterPage",
  components: {NavBar, ContentPage, MenuPage},
}
</script>

<style scoped>

</style>