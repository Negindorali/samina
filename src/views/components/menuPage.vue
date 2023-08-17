<template>
  <div>
    <aside id="logo-sidebar"
           class="fixed top-0 right-0 z-40  w-[20%] h-screen pt-10 transition-transform -translate-x-full bg-white border-l border-[#EAECF0] sm:translate-x-0 "
           aria-label="Sidebar">
      <img src="@/assets/icons/menuIcons/Frame 123.png" class="absolute left-[-13px] z-50" alt="">
      <div class="h-full px-3 pb-4 overflow-y-auto relative bg-white">
        <div class="flex items-center justify-start">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <a href="https://payampardaz.com/" class="flex ml-2 md:mr-15">
            <img src="@/assets/icons/logo/Image.png" class="h-8 mr-3" alt=" Logo"/>
            <span class="self-center text-xl font-semibold mr-3 sm:text-2xl whitespace-nowrap">ثمینا</span>
          </a>
        </div>
        <ul class="space-y-2 mt-9 font-medium">
          <button type="button"
                  class="flex font-semibold p-2 px-4 mb-8 items-center w-full rounded-lg transition duration-75 bg-[#F9FAFB]">
            <img src="@/assets/icons/menuIcons/Rectangle 82.png" width="32" class="img-fluid" alt="">
            <span
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <span class="ml-3">شرکت اپل</span>
            </span>
            <img src="@/assets/icons/menuIcons/Bank Card swap 1.svg" class="mr-auto" alt="">
          </button>
          <li class="px-4 flex items-center" v-for="(item,index) in menuList" :key="index">
            <img v-if="item.hasParent === false" :src="require('@/assets/icons/menuIcons/Category 2.png')" alt="">
            <a @click="toggleMenu(item.name,item.isParent)"
               v-if="item.isParent === false && item.parent_id === '' "
               :class="item.isActive ? 'flex items-center font-semibold p-2 text-primary  cursor-pointer rounded-lg hover:bg-gray-100 group' : 'flex items-center p-2 text-gray rounded-lg font-semibold hover:bg-gray-100 group' ">
              <span class="ml-3">{{ item.title }}</span>
            </a>
            <button @click="toggleMenu(item.name,item.isParent)" v-if="item.isParent && item.parent_id === '' "
                    type="button"
                    class="flex items-center cursor-pointer font-semibold w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                    aria-controls="dropdown-example" :data-collapse-toggle="item.name">
              <img :src="item.icon" alt="">
              <span
                  :class="item.isActive ? 'flex-1 ml-3 text-right text-primary whitespace-nowrap' : 'flex-1 ml-3 text-right whitespace-nowrap' ">{{
                  item.title
                }}</span>
              <img src="@/assets/icons/menuIcons/Stroke-1.png" alt="">
            </button>
            <ul v-if="item.isParent && item.name === activeMenu" :id="item.name"
                :class="showSubMenu ? 'py-2 space-y-2' : 'hidden py-2 space-y-2'">
              <li class="px-4 flex items-center" v-for="subMenu in menuList.filter((x)=>x.parent_id !== '')"
                  :key="subMenu.id">
                <a v-if="item.id === subMenu.parent_id" @click="toggleMenu(subMenu.name,subMenu.isParent)"
                   class="flex items-center font-semibold cursor-pointer p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">{{
                    subMenu.title
                  }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>

  </div>
</template>

<script>
export default {
  name: "menuPage",
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: 'dashboard',
          title: 'داشبورد',
          icon: 'Category 2.png',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
        {
          id: 2,
          name: 'accountOwner',
          title: 'طرف حساب',
          icon: '2 users.svg',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: false
        },
        {
          id: 3,
          name: 'product/service',
          title: 'کالا و خدمات',
          icon: 'Delivery Box 1 1.svg',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
        {
          id: 4,
          name: 'storePlace',
          title: 'انبارداری',
          icon: 'Home 1.svg',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
        {
          id: 5,
          name: 'sale',
          title: 'فروش',
          icon: 'Buy.png',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
        {
          id: 6,
          name: 'dataBase',
          title: 'خزانه داری',
          icon: 'Coins 1 1.svg',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
        {
          id: 7,
          name: 'newBankAccount',
          title: 'تعریف حساب بانکی',
          icon: '',
          parent_id: 6,
          link: '',
          isActive: false,
          hasParent: true,
          isParent: false
        },
        {
          id: 8, name: 'option2', title: 'آپشن 2', icon: '', parent_id: 6, link: '',
          isActive: false, hasParent: true, isParent: false
        },
        {
          id: 9, name: 'option3', title: 'آپشن3', icon: '', parent_id: 6, link: '1',
          isActive: false, hasParent: true, isParent: false
        },
        {
          id: 10,
          name: 'accounting',
          title: 'حسابداری',
          icon: 'Calculate 1.svg',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
        {
          id: 11,
          name: 'setting',
          title: 'تنظیمات',
          icon: 'Setting 1.svg',
          parent_id: '',
          link: '',
          isActive: false,
          hasParent: false,
          isParent: true
        },
      ],
      showSubMenu: false,
      activeMenu: '',
    }
  },
  methods: {
    toggleMenu(name) {
      this.activeMenu = name;
      this.showSubMenu = !this.showSubMenu;
    }
  },
  watch: {
    activeMenu(newValue, oldValue) {
      if (oldValue !== "")
        this.menuList.find((item) => item.name === oldValue).isActive = false;

      this.menuList.find((item) => item.name === newValue).isActive = true;
    }
  }
}
</script>

<style scoped>

</style>