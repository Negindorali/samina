<script>
import DateTime from "@/views/components/dateTime.vue";
import AvatarSection from "@/views/components/avatarSection.vue";

export default {
  name: "navBar",
  components: {AvatarSection, DateTime}
}
</script>

<template>
  <div>
    <nav class="fixed top-0 z-40 w-[80%] left-0 bg-white h-[13%] border-b border-[#EAECF0]">
      <div class="px-3 pb-3 lg:px-5 lg:pl-3">
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

  </div>
</template>

<style scoped>

</style>