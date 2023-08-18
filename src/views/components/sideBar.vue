<script>
import NavBar from "@/views/components/navBar.vue";
import MenuPage from "@/views/components/menuPage.vue";
import ContentPage from "@/views/components/contentPage.vue";

export default {
  name: "sideBar",
  components: {ContentPage, MenuPage, NavBar}
}
</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <content-page></content-page>
    <menu-page></menu-page>
  </div>
</template>

<style scoped>

</style>