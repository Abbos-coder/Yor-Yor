<template>
   <section class="sidebar">
      <div class="sidebar__body">
         <div class="sidebar__userinfo">
            <div class="sidebar__userinfo-avatar">
               <div class="sidebar__userinfo-img" @click="openSidebar">
                  <img src="@/assets/img/user-img.png" alt="user avatar" />
               </div>
               <div class="sidebar__userinfo-fullname">
                  Рустам <br />
                  Илёсов
               </div>
            </div>
            <div class="sidebar__userinfo-fullinfo">
               <div class="sidebar__quession">
                  <p>Возраст:</p>
                  <p>Нация:</p>
                  <p>Рост:</p>
                  <p>Вес:</p>
                  <p>Образование:</p>
               </div>
               <div class="sidebar__answer">
                  <p>38 года</p>
                  <p>Русский</p>
                  <p>170</p>
                  <p>70</p>
                  <p>Выше</p>
               </div>
            </div>
         </div>
         <ul class="sidebar__menu">
            <li>
               <nuxt-link
                  :to="localePath('/application-form')"
                  class="sidebar__menu-link"
               >
                  <svg
                     width="32"
                     height="24"
                     viewBox="0 0 32 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M13.6127 10.8916H6.20703V18.5881H13.6127V10.8916Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M17.8379 11.0488H25.7978"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                     />
                     <path
                        d="M17.8379 14.7363H25.7978"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                     />
                     <path
                        d="M17.8379 18.4248H25.7978"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                     />
                     <path
                        d="M3.10059 6.51953H28.8994"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M5.23831 3.79891C5.23831 3.99887 5.0753 4.16176 4.87502 4.16176C4.67474 4.16176 4.51172 3.99887 4.51172 3.79891C4.51172 3.59895 4.67474 3.43652 4.87502 3.43652C5.0753 3.43652 5.23831 3.59895 5.23831 3.79891Z"
                        fill="#7D7987"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M8.34475 4.16176C8.54539 4.16176 8.70804 3.99924 8.70804 3.79891C8.70804 3.59859 8.54539 3.43652 8.34475 3.43652C8.1441 3.43652 7.98145 3.59859 7.98145 3.79891C7.98145 3.99924 8.1441 4.16176 8.34475 4.16176Z"
                        fill="#7D7987"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M11.8155 4.16176C12.0161 4.16176 12.1787 3.99924 12.1787 3.79891C12.1787 3.59859 12.0161 3.43652 11.8155 3.43652C11.6148 3.43652 11.4521 3.59859 11.4521 3.79891C11.4521 3.99924 11.6148 4.16176 11.8155 4.16176Z"
                        fill="#7D7987"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M31 21.3402C31 22.2516 30.2501 23 29.3372 23H2.66279C1.74523 23 1 22.2516 1 21.3402V2.66027C1 1.74418 1.74988 1 2.66279 1H29.3372C30.2548 1 31 1.74883 31 2.66027V21.3402Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                  </svg>
                  <span>{{ $t("sidebar.appForm") }}</span>
               </nuxt-link>
            </li>
            <li>
               <nuxt-link :to="localePath('/main')" class="sidebar__menu-link">
                  <svg
                     width="31"
                     height="26"
                     viewBox="0 0 31 26"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M19.8323 13.8794H22.2127L26.4329 18.7762V13.8794H27.5757C28.8628 13.8794 29.9148 12.8274 29.9148 11.5403V3.33906C29.9148 2.05194 28.8628 1 27.5757 1H15.2903C14.0031 1 12.9512 2.05194 12.9512 3.33906V5.1544"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M19.9273 9.55591L21.4455 11.111L24.952 7.52222C25.7895 6.66414 25.8019 5.26976 24.9809 4.42818C24.16 3.5866 22.8027 3.59901 21.9611 4.46122L21.4455 4.993L20.9298 4.46122C20.0923 3.60313 18.731 3.5866 17.91 4.42818C17.6295 4.71696 17.4438 5.0676 17.3613 5.44301"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M13.0221 10.4184C12.2011 9.57683 10.8439 9.58924 10.0023 10.4514L9.48248 10.9796L8.9668 10.4514C8.12935 9.59337 6.7721 9.57683 5.94702 10.4184C5.12194 11.26 5.13844 12.6544 5.9759 13.5125L9.48248 17.1016L12.9891 13.5125C13.8306 12.6503 13.8471 11.26 13.0221 10.4184Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M4.48574 24.7499V19.853H3.343C2.05588 19.853 1.00391 18.801 1.00391 17.5139V9.3127C1.00391 8.02558 2.05588 6.97363 3.343 6.97363H15.6284C16.9155 6.97363 17.9675 8.02558 17.9675 9.3127V17.5139C17.9675 18.801 16.9155 19.853 15.6284 19.853H8.70601L4.48574 24.7499Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>
                     {{ $t("sidebar.feedback") }}
                  </span>
               </nuxt-link>
            </li>
            <li>
               <a href="#" class="sidebar__menu-link">
                  <svg
                     width="26"
                     height="26"
                     viewBox="0 0 26 26"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M5.20677 17.6306L3.30652 20.2781L5.72661 22.6978L8.37386 20.7977C9.10339 21.2302 9.89844 21.5666 10.7415 21.7806L11.2876 25.0045H14.7124L15.2628 21.7806C16.1059 21.5622 16.901 21.2302 17.6305 20.7977L20.2778 22.6978L22.6979 20.2781L20.7976 17.6306C21.2344 16.8968 21.5708 16.0931 21.7849 15.2412L25 14.7127V11.2879L21.7849 10.7594C21.5708 9.91627 21.2388 9.12093 20.8063 8.38704L22.6935 5.72248L20.2734 3.30237L17.6087 5.19392C16.8791 4.76145 16.0841 4.42935 15.2366 4.2153L14.708 1H11.2832L10.7546 4.21956C9.91154 4.43361 9.11649 4.76572 8.38697 5.19819L5.72224 3.30664L3.30215 5.72675L5.19367 8.3913C4.76556 9.11646 4.43356 9.90751 4.21951 10.7419L1 11.2879V14.7127L4.21951 15.2587C4.43793 16.1062 4.76993 16.9011 5.20677 17.6306Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M11.6803 9.75474C12.0866 9.58874 12.5365 9.49707 13.0039 9.49707C14.9391 9.49707 16.5117 11.0654 16.5117 13.005C16.5117 14.9402 14.9435 16.513 13.0039 16.513C11.0687 16.513 9.49609 14.9446 9.49609 13.005C9.49609 12.673 9.54415 12.3497 9.63151 12.0439"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>{{ $t("sidebar.settings") }}</span>
               </a>
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/my-likes')"
                  class="sidebar__menu-link"
               >
                  <svg
                     width="23"
                     height="32"
                     viewBox="0 0 23 32"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M14.6845 9.33738C15.382 8.63986 16.5132 8.6303 17.1965 9.31368C17.8799 9.99706 17.8705 11.1282 17.173 11.8257L14.2556 14.7384L11.3383 11.8257C10.6408 11.1282 10.6313 9.99706 11.3147 9.31368C11.9981 8.6303 13.1292 8.63986 13.8267 9.33738L14.2556 9.76611L14.6845 9.33738Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M6.68359 20.2425V7.43733C6.68359 6.7021 7.28685 6.10352 8.01736 6.10352H20.4926C21.2279 6.10352 21.8264 6.70681 21.8264 7.43733V16.1847C21.8264 16.9199 21.2232 17.5185 20.4926 17.5185H9.74704L6.68359 20.2425Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M17.25 19.7104V29.1364C17.25 29.8716 16.6467 30.4702 15.9162 30.4702H2.26737C1.53214 30.4702 0.933594 29.8716 0.933594 29.1364V2.33358C0.933594 1.59836 1.53214 1 2.26737 1H15.9115C16.6467 1 17.2452 1.59836 17.2452 2.33358V4.0303"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M0.923828 24.6875H17.2496"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M7.97852 27.5156H10.1983"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M0.923828 24.6875H17.2496"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>{{ $t("sidebar.myLike") }}</span>
               </nuxt-link>
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/wallet')"
                  class="sidebar__menu-link"
               >
                  <svg
                     width="26"
                     height="26"
                     viewBox="0 0 26 26"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7.9082 5.06835L17.4553 1L19.2773 5.14424"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M23.1427 19.8512V22.7674C23.1427 23.9955 22.1501 25.0003 20.9368 25.0003H3.20589C1.99265 25.0003 1 23.9955 1 22.7674V9.44583C1 8.21771 1.99265 7.21289 3.20589 7.21289H20.9368C22.1501 7.21289 23.1427 8.21771 23.1427 9.44583V12.2771"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M16.6921 16.1082C16.6921 16.3003 16.5377 16.4565 16.348 16.4565C16.1583 16.4565 16.0039 16.3003 16.0039 16.1082C16.0039 15.9162 16.1583 15.7598 16.348 15.7598C16.5422 15.7598 16.6921 15.9162 16.6921 16.1082Z"
                        fill="#7D7987"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M15.2684 19.7567C14.0551 19.7567 13.0625 18.7519 13.0625 17.5237V14.6968C13.0625 13.4687 14.0551 12.4639 15.2684 12.4639H25.0008V19.7567H15.2684Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>{{ $t("sidebar.wallet") }}</span>
               </nuxt-link>
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/favorite-products')"
                  class="sidebar__menu-link"
               >
                  <svg
                     width="20"
                     height="24"
                     viewBox="0 0 20 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M13.6049 14.2868C14.4678 13.3964 14.4821 11.9533 13.637 11.0845C12.792 10.2121 11.3943 10.2264 10.5349 11.1167L10.0001 11.6624L9.46881 11.1167C8.60593 10.2264 7.21179 10.2121 6.36674 11.0845C5.52169 11.9568 5.53594 13.4 6.39882 14.2868L10.0036 18.0025L13.6049 14.2868Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M6.39258 8.64326V4.65107C6.39258 2.64422 8.01493 1 10.001 1C11.9835 1 13.6094 2.64063 13.6094 4.65107V8.63975"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M2.8418 20.2822H17.1577"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                     <path
                        d="M6.52539 6.41406H12.0307"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M13.7137 6.41406H18.2742L18.998 21.6755C19.0443 22.6771 18.2849 23.0002 17.258 23.0002H2.74234C1.71544 23.0002 0.952396 22.6807 1.00232 21.6755L1.72615 6.41406H4.81753"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>{{ $t("sidebar.fovProduct") }}</span>
               </nuxt-link>
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/survey')"
                  class="sidebar__menu-link"
               >
                  <svg
                     width="22"
                     height="25"
                     viewBox="0 0 22 25"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M17.3465 21.2271C17.3465 21.2271 11.7171 16.9623 11.4727 16.7665C11.2282 16.5668 10.7274 16.5785 10.4349 16.8017C10.0743 17.0758 4.46484 21.2271 4.46484 21.2271"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M18.973 12.0869V2.17487C18.973 1.52869 18.4321 1 17.771 1H4.04382C3.38271 1 2.8418 1.52869 2.8418 2.17487V9.62354"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M10.9074 12.8111L15.0384 8.67557C16.024 7.68476 16.044 6.07916 15.0744 5.10794C14.1048 4.13672 12.5061 4.15232 11.5164 5.14313L10.9034 5.75026L10.2944 5.14313C9.3087 4.15232 7.706 4.13672 6.73637 5.10794C5.76674 6.07916 5.78276 7.68476 6.77243 8.67557L10.9074 12.8111Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M12.3359 17.3079L20.3855 11.0381"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M9.4779 17.307L1.4043 11.0254V22.9582C1.4043 23.53 1.89312 23.9998 2.48612 23.9998H19.3185C19.9155 23.9998 20.4043 23.53 20.4043 22.9582V11.0254H19.046"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>{{ $t("sidebar.survey") }}</span>
               </nuxt-link>
            </li>
            <li>
               <nuxt-link :to="localePath('/shop')" class="sidebar__menu-link">
                  <svg
                     width="30"
                     height="26"
                     viewBox="0 0 30 26"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M15 5.21387L5.27539 13.9065V25.0001H12.488V18.6892H17.5169V25.0001H24.7295V13.9065L15 5.21387Z"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M29 13.1784L14.9951 1L8.41544 6.71313V3.05864H5.37197V9.35515L1 13.1784"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                     />
                  </svg>
                  <span>{{ $t("sidebar.myShop") }}</span>
               </nuxt-link>
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/')"
                  exact
                  class="sidebar__menu-link"
                  @click="logout"
               >
                  <svg
                     width="21"
                     height="26"
                     viewBox="0 0 21 26"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M19.9924 10.6201H10.9492"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M17.3379 13.3265L19.9998 10.6316L17.3379 7.91406"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M15.1889 12.2207V20.2306H8.51562"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M1.35123 1.36647L8.4053 5.76927V25L1 20.2384V1H15.1895V8.92043"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M6.19141 12.6055V14.7324"
                        stroke="#7D7987"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>{{ $t("sidebar.exit") }}</span>
               </nuxt-link>
            </li>
         </ul>
      </div>
   </section>
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
      async logout() {
         console.log("AUTH" + this.$auth);
         await this.$auth.logout();
      },
   },
   mounted() {
      this.openSidebar();

      // window.addEventListener("scroll", () => {
      //    if (window.scrollY > 90) {
      //       const block = (document.querySelector(
      //          ".main-id__userfull--info"
      //       ).style.marginLeft = "68px");

      //       const sidebar = (document.querySelector(".sidebar").style = `
      // 			position: fixed;
      // 			top: 0;
      // 			left: 0;
      // 			z-index: 100;
      // 			max-width: 68px;
      // 		`);
      //    } else {
      //       const sidebar = (document.querySelector(".sidebar").style = `
      // 			position: static;
      // 			top: 0;
      // 			left: 0;
      // 		`);

      //       const block = (document.querySelector(
      //          ".main-id__userfull--info"
      //       ).style.marginLeft = "10px");
      //    }
      // });
   },
};
</script>

<style lang="scss" scoped>
.sidebar {
   background: #ffffff;
   box-shadow: 10px 0px 50px rgba(227, 222, 222, 0.4);
   min-width: 285px;
   padding: 10px 30px 200px 30px;
   transition: all ease-in-out 0.2s;
   max-height: 900px;
   &.active {
      @media (max-width: 414px) {
         min-width: 78px;
         padding: 10px 10px 200px 10px;
      }
      min-width: 100px;
      padding: 10px 20px 200px 10px;
      max-height: 750px;
   }
   &.active &__userinfo-img {
      margin-left: -5px;
   }

   // .sidebar__userinfo

   &__userinfo {
      margin-bottom: 50px;
   }

   // .sidebar__userinfo-avatar

   &__userinfo-avatar {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
   }

   // .sidebar__userinfo-img

   &__userinfo-img {
      @media (max-width: 414px) {
         min-width: 50px;
         min-height: 50px;
      }
      min-width: 85px;
      min-height: 85px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
         width: 100%;
         height: 100%;
         object-position: center;
         object-fit: cover;
      }
   }

   // .sidebar__userinfo-fullname

   &__userinfo-fullname {
      font-weight: 600;
      font-size: 18px;
      line-height: 130%;
      color: #7d7987;
      margin-left: 20px;
      @include trs;
      &.active {
         opacity: 0;
         visibility: hidden;
         display: none;
      }
   }
   &__userinfo-fullinfo {
      display: flex;
      align-items: center;
      gap: 33px;
      @include trs;
      &.active {
         opacity: 0;
         visibility: hidden;
         display: none;
      }
   }
   // .sidebar__menu
   &__quession p {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #7d7987;
      margin: 0px 0px 7px 0px;
   }
   &__answer p {
      font-size: 14px;
      line-height: 17px;
      color: #292626;
      margin: 0px 0px 7px 0px;
   }
   &__menu {
      padding: 0;
      list-style: none;
      a {
         margin-bottom: 20px;
         min-height: 44px;
         display: flex;
         align-items: center;
         padding-left: 13px;
      }
      a.nuxt-link-active {
         background: #ff477e;
         box-shadow: 0px 6px 12px rgba(255, 71, 126, 0.3);
         border-radius: 5px;
      }
      a.nuxt-link-active {
         color: #ffffff;
      }
      a.nuxt-link-active svg path {
         stroke: #ffffff;
      }
      a:hover {
         background: #ff477e;
         box-shadow: 0px 6px 12px rgba(255, 71, 126, 0.3);
         border-radius: 5px;
      }
      a:hover {
         color: #ffffff;
      }
      a:hover svg path {
         stroke: #fff;
      }
   }

   // .sidebar__menu-link

   &__menu-link {
      font-size: 16px;
      line-height: 20px;
      color: #7d7987;
      text-decoration: none;
      svg {
         margin-right: 12px;
         width: 30px;
         height: 30px;
      }
      &.active span {
         display: none;
      }
      &.active {
         justify-content: center;
      }
   }
}
</style>
