<template>
   <nav class="navbar">
      <div class="navbar__control">
         <nuxt-link :to="localePath('/')" class="navbar__logo">
            <img src="@/assets/img/navbar-logo.png" alt="nav logo" />
         </nuxt-link>
         <div class="navbar__bars" @click="openSidebar">
            <img src="@/assets/img/icons/bars.svg" alt="bars btn" />
         </div>
      </div>
      <div class="navbar__body">
         <ul class="navbar__list">
            <li>
               <nuxt-link :to="localePath('/main')" class="navbar__link">
                  {{ $t("navbar.main") }}
               </nuxt-link>
            </li>
            <li>
               <nuxt-link :to="localePath('/search')" class="navbar__link">
                  {{ $t("navbar.search") }}
               </nuxt-link>
            </li>
            <li>
               <nuxt-link :to="localePath('/chat')" class="navbar__link">{{
                  $t("navbar.chat")
               }}</nuxt-link>
            </li>
            <li>
               <nuxt-link :to="localePath('/forum')" class="navbar__link">{{
                  $t("navbar.forum")
               }}</nuxt-link>
            </li>
            <li>
               <nuxt-link :to="localePath('/quiz')" class="navbar__link">{{
                  $t("navbar.quiz")
               }}</nuxt-link>
            </li>
            <li>
               <a href="#" class="navbar__link">{{ $t("navbar.advice") }}</a>
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/for-wedding')"
                  class="navbar__link"
                  >{{ $t("navbar.wedding") }}</nuxt-link
               >
            </li>
         </ul>
         <ul class="navbar__list-lang">
            <li>
               <a href="#" class="navbar__link" id="selected">
                  <span>{{ $t("lang") }}</span>
                  <img
                     src="@/assets/img/icons/lang-icon.svg"
                     alt="down angle"
                  />
               </a>
            </li>
            <div class="lang-list">
               <nuxt-link :to="switchLocalePath('uz')">
                  Uzb
                  <img
                     src="@/assets/img/icons/uz.png"
                     alt="flag icon"
                     class="ml-1"
                  />
               </nuxt-link>
               <!-- <a href="#">
                  Eng
                  <img
                     src="@/assets/img/icons/eng.png"
                     alt="flag icon"
                     class="ml-1"
                  />
               </a> -->
               <nuxt-link :to="switchLocalePath('ru')">
                  Rus
                  <img
                     src="@/assets/img/icons/ru.png"
                     alt="flag icon"
                     class="ml-1"
                  />
               </nuxt-link>
            </div>
         </ul>

         <div class="navbar__burger" @click="openBurger">
            <span class="material-icons">
               more_vert
            </span>
         </div>
      </div>
   </nav>
</template>

<script>
export default {
   methods: {
      openSidebar() {
         const sidebar = document.querySelector(".sidebar");
         const fullName = document.querySelector(".sidebar__userinfo-fullname");
         const fullInfo = document.querySelector(".sidebar__userinfo-fullinfo");
         const menuLink = document.querySelectorAll(".sidebar__menu-link");
         sidebar.classList.toggle("active");
         fullName.classList.toggle("active");
         fullInfo.classList.toggle("active");
         menuLink.forEach((link) => {
            link.classList.toggle("active");
         });
      },

      openBurger() {
         const burger = document.querySelector(".navbar__burger");
         const menuList = document.querySelector(".navbar__list");
         menuList.classList.toggle("active");
         burger.classList.toggle("active");
      },
   },
   mounted() {
      const langs = document.querySelectorAll(".navbar__list-lang a");
      const selected = document.querySelector("#selected span");
      langs.forEach((lang) => {
         lang.addEventListener("click", (e) => {
            let value = lang.textContent;
            selected.textContent = value;
         });
      });
   },
};
</script>

<style lang="scss" scoped>
.navbar {
   background: #ffffff;
   padding: 20px 10px 20px 0;
   display: flex;
   align-items: flex-end;
   // position: fixed;
   // z-index: 100;
   // width: 100%;
   // .navbar__body

   &__body {
      display: flex;
      align-items: flex-end;
      max-width: 1330px;
      margin: 0 auto;
      @media (max-width: 768px) {
         margin: 0;
      }
   }
   &__control {
      @media (max-width: 375px) {
         width: 200px !important;
      }
      width: 260px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      @media (max-width: 414px) {
         width: 260px;
         padding-left: 15px;
      }
   }
   &__logo {
      width: 130px;
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         object-position: center;
      }
   }

   // .navbar__bars
   &__burger {
      cursor: pointer;
      display: none;
      margin-left: 20px;
      margin-bottom: 8px;
      @media (max-width: 768px) {
         display: block;
      }
      span {
         @include trs;
         color: $mainColor;
         font-size: 30px;
      }
   }
   &__burger.active {
      cursor: pointer;
      @include trs;
      span {
         transform: rotate(-90deg);
      }
   }

   &__bars {
      cursor: pointer;
      margin-left: auto;
   }

   // .navbar__list

   &__list {
      display: flex;
      gap: 1.5em;
      list-style: none;
      padding: 0;
      @include trs;
      @media (max-width: 1024px) {
         gap: 0.5em;
      }
      @media (max-width: 768px) {
         transform: translateY(-100%);
         flex-direction: column;
         position: absolute;
         z-index: -1;
         top: 100px;
         right: 0;
         background: #f8f8f8;
         min-height: 50vh;
         min-width: 375px;
         padding-top: 50px;
         align-items: center;
         @include trs;
         &.active {
            z-index: 2;
            transform: translateY(-10px);
         }
         a {
            font-size: 18px;
         }
         li {
            margin-bottom: 12px;
         }
      }
   }
   &__list-lang {
      list-style: none;
      padding: 0 0 0 1.2em;
      position: relative;
      &:hover .lang-list {
         transform: translateY(0);
         opacity: 1;
         visibility: visible;
      }
   }
   .lang-list {
      @include trs;
      position: absolute;
      z-index: 100;
      top: 20px;
      left: 15px;
      width: 80px;
      padding: 5px;
      background: #fff;
      transform: translateY(50px);
      opacity: 0;
      visibility: hidden;

      a {
         padding-top: 10px;
         display: block;
         color: #7d7987;
         text-decoration: none;
         font-size: 16px;
         @include trs;
         &:hover {
            color: #48454f;
         }
         img {
            width: 20px;
         }
      }
   }
   // .navbar__link

   &__link {
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      color: #7d7987;
      @include trs;
      &:hover {
         color: #48454f;
      }
      img {
         margin-left: 7px;
      }
   }
   &__link.nuxt-link-active::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: $mainColor;
   }
}
</style>
