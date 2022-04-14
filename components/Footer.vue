<template>
   <footer class="footer">
      <div class="footer__body wrapper">
         <nuxt-link :to="localePath('/')" class="footer__logo">
            <img src="@/assets/img/main/logo.png" alt="footer logo" />
         </nuxt-link>
         <div class="footer__menu">
            <div class="footer__menu-title">{{ $t("footer.menu") }}</div>
            <ul class="footer__menu-list">
               <li>
                  <nuxt-link
                     :to="localePath('/main')"
                     class="footer__menu-link"
                     >{{ $t("navbar.main") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/search')"
                     class="footer__menu-link"
                     >{{ $t("navbar.search") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/chat')"
                     class="footer__menu-link"
                     >{{ $t("navbar.chat") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/forum')"
                     class="footer__menu-link"
                     >{{ $t("navbar.forum") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/quiz')"
                     class="footer__menu-link"
                     >{{ $t("navbar.quiz") }}</nuxt-link
                  >
               </li>
               <!-- <li><nuxt-link href="#" class="footer__menu-link">{{$t('navbar.advice')}}</nuxt-link></li> -->
               <li>
                  <nuxt-link
                     :to="localePath('/for-wedding')"
                     class="footer__menu-link"
                     >{{ $t("navbar.wedding") }}</nuxt-link
                  >
               </li>
            </ul>
         </div>
         <div class="footer__address">
            <div class="footer__address-title">{{ $t("footer.address") }}</div>
            <ul class="footer__address-list">
               <li class="footer__address-item">
                  <i class="fas fa-map-marker-alt"></i>53 Амир Темур , Ташкент
                  Узб
               </li>
               <li class="footer__address-item">
                  <i class="fas fa-envelope"></i>yoryor@gmail.com
               </li>
               <li class="footer__address-item">
                  <i class="fas fa-phone-alt"></i>+998 90 137 39 31
               </li>
            </ul>
         </div>
         <div class="footer__messangers">
            <div class="footer__messangers-title">
               {{ $t("footer.massengers") }}
            </div>
            <div class="footer__messangers-list">
               <i class="fab fa-facebook-f"></i>
               <i class="fab fa-instagram"></i>
               <i class="fab fa-twitter"></i>
               <i class="fab fa-telegram-plane"></i>
            </div>
         </div>
      </div>
      <div class="footer__subfooter wrapper">
         {{ new Date().getFullYear() }} © {{ $t("footer.copyRight") }}
      </div>
   </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
   background-color: #fff;
   padding: 44px 0px 25px 0px;
   // .footer__body

   &__body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;
      @media (max-width: 768px) {
         justify-content: space-around;
      }
      @media (max-width: 480px) {
         // flex-direction: column;
         align-items: flex-start;
      }
   }

   // .footer__logo

   &__logo {
      width: 175px;
      height: 70px;
      img {
         object-fit: cover;
         object-position: center;
      }
   }

   // .footer__menu

   &__menu {
      @media (max-width: 480px) {
         width: 250px;
      }
   }

   // .footer__menu-title

   &__menu-title {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #1c1c1d;
      margin-bottom: 30px;
   }

   // .footer__menu-list

   &__menu-list {
      list-style: none;
      padding: 0;
      li {
         margin-bottom: 10px;
      }
   }

   // .footer__menu-link

   &__menu-link {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #7a7a7e;
      @include trs;
      &:hover {
         color: #313131;
      }
   }

   // .footer__address

   //   &__address {
   //   }

   // .footer__address-title

   &__address-title {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #1c1c1d;
      margin-bottom: 30px;
   }

   // .footer__address-list

   &__address-list {
      padding: 0;
      list-style: none;
   }

   // .footer__address-item

   &__address-item {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #7a7a7e;
      margin-bottom: 23px;
      i {
         margin-right: 12px;
         color: $mainColor;
      }
   }

   // .footer__messangers

   &__messangers {
      @media (max-width: 480px) {
         width: 250px;
      }
      i {
         font-size: 20px;
         color: $mainColor;
         width: 40px;
         height: 40px;
         display: flex;
         justify-content: center;
         align-items: center;
         background: #ffffff;
         box-shadow: 0px 10px 20px rgba(196, 196, 196, 0.4);
         border-radius: 5px;
         cursor: pointer;
         @include trs;

         &:hover {
            background: $mainColor;
            color: #fff;
            transform: scale(1.1);
         }
      }
   }
   &__messangers-list {
      display: flex;
      gap: 18px;
   }
   // .footer__messangers-title

   &__messangers-title {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #1c1c1d;
      margin-bottom: 30px;
   }

   // .footer__subfooter

   &__subfooter {
      font-weight: 500;
      font-size: 16px;
      color: #7d7987;
      border-top: 1px solid #e0e0e0;
      padding-top: 12px;
      margin-top: 15px;
      @media (max-width: 480px) {
         text-align: center;
      }
   }
}
</style>
