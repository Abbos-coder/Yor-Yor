<template>
   <section>
      <div class="accordion-main wrapper">
         <div class="accordion__title" data-aos="fade-right">
            {{ $t("titles.faq") }}
         </div>
         <div class="accordions">
            <div class="accordion">
               <dl>
                  <dt>
                     <a
                        href="#accordion1"
                        aria-expanded="false"
                        aria-controls="accordion1"
                        class="accordion-title accordionTitle js-accordionTrigger"
                        >Этот сайт для всех пользователей?
                     </a>
                  </dt>
                  <dd
                     class="accordion-content accordionItem is-collapsed"
                     id="accordion1"
                     aria-hidden="true"
                  >
                     <p>
                        Да, этот сайт предназначен для пользователей всех
                        возрастов. Создан, чтобы самим найти себе пару
                     </p>
                  </dd>
                  <dt>
                     <a
                        href="#accordion2"
                        aria-expanded="false"
                        aria-controls="accordion2"
                        class="accordion-title accordionTitle js-accordionTrigger"
                     >
                        Этот сайт для всех пользователей?</a
                     >
                  </dt>
                  <dd
                     class="accordion-content accordionItem is-collapsed"
                     id="accordion2"
                     aria-hidden="true"
                  >
                     <p>
                        Да, этот сайт предназначен для пользователей всех
                        возрастов. Создан, чтобы самим найти себе пару
                     </p>
                  </dd>
                  <dt>
                     <a
                        href="#accordion3"
                        aria-expanded="false"
                        aria-controls="accordion3"
                        class="accordion-title accordionTitle js-accordionTrigger"
                     >
                        Этот сайт для всех пользователей?
                     </a>
                  </dt>
                  <dd
                     class="accordion-content accordionItem is-collapsed"
                     id="accordion3"
                     aria-hidden="true"
                  >
                     <p>
                        Да, этот сайт предназначен для пользователей всех
                        возрастов. Создан, чтобы самим найти себе пару
                     </p>
                  </dd>
               </dl>
            </div>
            <div class="accordion">
               <dl>
                  <dt>
                     <a
                        href="#accordion1"
                        aria-expanded="false"
                        aria-controls="accordion1"
                        class="accordion-title accordionTitle js-accordionTrigger"
                        >Этот сайт для всех пользователей?
                     </a>
                  </dt>
                  <dd
                     class="accordion-content accordionItem is-collapsed"
                     id="accordion1"
                     aria-hidden="true"
                  >
                     <p>
                        Да, этот сайт предназначен для пользователей всех
                        возрастов. Создан, чтобы самим найти себе пару
                     </p>
                  </dd>
                  <dt>
                     <a
                        href="#accordion2"
                        aria-expanded="false"
                        aria-controls="accordion2"
                        class="accordion-title accordionTitle js-accordionTrigger"
                     >
                        Этот сайт для всех пользователей?
                     </a>
                  </dt>
                  <dd
                     class="accordion-content accordionItem is-collapsed"
                     id="accordion2"
                     aria-hidden="true"
                  >
                     <p>
                        Да, этот сайт предназначен для пользователей всех
                        возрастов. Создан, чтобы самим найти себе пару
                     </p>
                  </dd>
                  <dt>
                     <a
                        href="#accordion3"
                        aria-expanded="false"
                        aria-controls="accordion3"
                        class="accordion-title accordionTitle js-accordionTrigger"
                     >
                        Этот сайт для всех пользователей?
                     </a>
                  </dt>
                  <dd
                     class="accordion-content accordionItem is-collapsed"
                     id="accordion3"
                     aria-hidden="true"
                  >
                     <p>
                        Да, этот сайт предназначен для пользователей всех
                        возрастов. Создан, чтобы самим найти себе пару
                     </p>
                  </dd>
               </dl>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   mounted() {
      (function() {
         var d = document,
            accordionToggles = d.querySelectorAll(".js-accordionTrigger"),
            setAria,
            setAccordionAria,
            switchAccordion,
            touchSupported = "ontouchstart" in window,
            pointerSupported = "pointerdown" in window;

         let skipClickDelay = function(e) {
            e.preventDefault();
            e.target.click();
         };

         let setAriaAttr = function(el, ariaType, newProperty) {
            el.setAttribute(ariaType, newProperty);
         };
         setAccordionAria = function(el1, el2, expanded) {
            switch (expanded) {
               case "true":
                  setAriaAttr(el1, "aria-expanded", "true");
                  setAriaAttr(el2, "aria-hidden", "false");
                  break;
               case "false":
                  setAriaAttr(el1, "aria-expanded", "false");
                  setAriaAttr(el2, "aria-hidden", "true");
                  break;
               default:
                  break;
            }
         };
         //function
         switchAccordion = function(e) {
            console.log("triggered");
            e.preventDefault();
            var thisAnswer = e.target.parentNode.nextElementSibling;
            var thisQuestion = e.target;
            if (thisAnswer.classList.contains("is-collapsed")) {
               setAccordionAria(thisQuestion, thisAnswer, "true");
            } else {
               setAccordionAria(thisQuestion, thisAnswer, "false");
            }
            thisQuestion.classList.toggle("is-collapsed");
            thisQuestion.classList.toggle("is-expanded");
            thisAnswer.classList.toggle("is-collapsed");
            thisAnswer.classList.toggle("is-expanded");

            thisAnswer.classList.toggle("animateIn");
         };
         for (var i = 0, len = accordionToggles.length; i < len; i++) {
            if (touchSupported) {
               accordionToggles[i].addEventListener(
                  "touchstart",
                  skipClickDelay,
                  false
               );
            }
            if (pointerSupported) {
               accordionToggles[i].addEventListener(
                  "pointerdown",
                  skipClickDelay,
                  false
               );
            }
            accordionToggles[i].addEventListener(
               "click",
               switchAccordion,
               false
            );
         }
      })();
   },
};
</script>

<style lang="scss" scoped>
//updated ver
* {
   box-sizing: border-box;
}
.accordion-main {
   margin-bottom: 140px;
}
.accordions {
   display: flex;
   justify-content: space-evenly;
   gap: 30px;
   @media (max-width: 414px) {
      flex-wrap: wrap;
      gap: 0px;
   }
}
.accordion__title {
   @include mainTitle;
   margin-bottom: 40px;
   @media (max-width: 414px) {
      font-size: 30px;
      display: flex;
      align-items: center;
      line-height: 40px;
   }
}
.heading-primary {
   font-size: 2em;
   padding: 2em;
   text-align: center;
}

.accordion dd,
.accordion__panel {
   font-size: 1em;
   line-height: 1.5em;
}
.accordion p {
   padding: 1em 1em 2em 5em;
   max-width: 558px;
   background-color: #fff;
   border-radius: 0 0 10px 10px;

   font-weight: 500;
   font-size: 16px;
   line-height: 150.7%;
   letter-spacing: 0.1px;
   color: rgba(#7d7987, 0.7);
}

.accordion {
   position: relative;
}

.accordionTitle,
.accordion__Heading {
   max-width: 558px;
   padding: 35px 2em;
   display: flex;
   align-items: center;
   text-decoration: none;
   transition: all 0.5s ease-in-out;
   background: #ffffff;
   box-sizing: border-box;
   box-shadow: 10px 30px 50px rgba(227, 222, 222, 0.4);
   border-radius: 10px;
   font-weight: 600;
   font-size: 18px;
   color: rgba(#292626, 0.88);

   &:before {
      content: url("@/assets/img/main/plus.png");
      font-size: 35px;
      line-height: 0.5em;
      float: left;
      margin-right: 40px;
      transition: transform 0.3s ease-in-out;
   }
   &:hover {
      background-color: #f9f9f9;
   }
}
.accordionTitleActive,
.accordionTitle.is-expanded {
   background-color: #ffffff;
   border-radius: 10px 10px 0 0;
   &:before {
      content: url("@/assets/img/main/minus.png");
      transform: rotate(-180deg);
      margin-top: 15px;
      color: $mainColor;
   }
}
.accordionItem {
   height: auto;
   overflow: hidden;
   max-height: 50em;
   transition: max-height 1s;
   @media screen and (min-width: 48em) {
      max-height: 15em;
      transition: max-height 0.5s;
   }
}

.accordionItem.is-collapsed {
   max-height: 0;
}
.no-js .accordionItem.is-collapsed {
   max-height: auto;
}
.animateIn {
   animation: accordionIn 0.45s normal ease-in-out both 1;
}
.animateOut {
   animation: accordionOut 0.45s alternate ease-in-out both 1;
}
@keyframes accordionIn {
   0% {
      opacity: 0;
      transform: scale(0.9) rotateX(-60deg);
      transform-origin: 50% 0;
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
}

@keyframes accordionOut {
   0% {
      opacity: 1;
      transform: scale(1);
   }
   100% {
      opacity: 0;
      transform: scale(0.9) rotateX(-60deg);
   }
}
</style>
