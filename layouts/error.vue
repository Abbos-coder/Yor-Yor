<template>
   <div>
      <div v-if="error.statusCode === 404">
         <div class="page_404">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 ">
                     <div class="col-sm-12 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                           <h1 class="text-center ">404</h1>
                        </div>

                        <div class="contant_box_404">
                           <h3 class="h2">
                              Похоже, ты заблудился
                           </h3>

                           <p>страница, которую вы ищете, недоступна!</p>

                           <nuxt-link to="/main" class="link_404"
                              >Go to Home</nuxt-link
                           >
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div v-else class="d-flex justify-center flex-column align-items-center">
         <h1 class="text-center">Произошла ошибка</h1>
         <h1>{{ error.statusCode }}</h1>
         <NuxtLink to="/" class="text-center btn btn-primary mt-5"
            >Home page</NuxtLink
         >
      </div>
   </div>
</template>

<script>
export default {
   props: ["error"],
   layout: "no-footer", // you can set a custom layout for the error page
};
</script>
<style>
body {
   background: #fff !important;
}
.page_404 {
   padding: 40px 0;
   background: #ffff;
   font-family: "Raleway", sans-serif;
}

.page_404 img {
   width: 100%;
}

.four_zero_four_bg {
   background-image: url(@/assets/page-404/404.gif);
   height: 400px;
   width: 100%;
   margin: 0 auto;
   background-position: center center;
}

.four_zero_four_bg h1 {
   font-size: 80px;
}

.four_zero_four_bg h3 {
   font-size: 80px;
}

.link_404 {
   color: #fff !important;
   padding: 10px 20px;
   background: #39ac31;
   margin: 20px 0;
   display: inline-block;
}
.contant_box_404 {
   margin-top: -50px;
}
</style>
