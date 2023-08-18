<script>
import DateTime from "@/views/components/dateTime.vue";
import AvatarSection from "@/views/components/avatarSection.vue";

export default {
  name: "navBar",
  components: {AvatarSection, DateTime}
}
</script>

<template>
  <nav class="sticky top-0 bg-white z-30 border-b border-[#EAECF0]">
    <div class="px-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <date-time></date-time>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <avatar-section></avatar-section>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>