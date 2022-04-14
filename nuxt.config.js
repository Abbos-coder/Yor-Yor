export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
      title: "yor-yor",
      htmlAttrs: {
         lang: "en",
      },
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         { hid: "description", name: "description", content: "" },
         { name: "format-detection", content: "telephone=no" },
      ],
      link: [
         { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
         {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
         },
         {
            rel: "stylesheet",
            href:
               "https://fonts.google.com/share?selection.family=Montserrat%20Alternates:wght@400;500;700%7CRaleway:wght@400;500;600;700",
         },
         {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
         },
      ],
      script: [
         {
            src:
               "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
            body: true,
         },
         {
            src:
               "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
            body: true,
         },
         {
            class: "jsbin",
            src: "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",
            body: true,
         },
      ],
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: ["~/assets/css/swiper-bundle.css"],
   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [
      "~/plugins/aos.client.js",
      "~/plugins/swiper.client.js",
      "~/plugins/vee-validate",
      "~/plugins/emoji.js",
      "~/plugins/lightbox.js",
   ],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,
   loading: {
      color: "red",
   },

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: ["@nuxtjs/style-resources"],
   styleResources: {
      scss: ["./assets/vars/*.scss", "./assets/abstracts/_mixin.scss"],
   },

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/bootstrap
      "bootstrap-vue/nuxt",
      // https://go.nuxtjs.dev/axios
      "@nuxtjs/axios",
      "@nuxtjs/i18n",
      "@nuxtjs/auth",
      "@nuxtjs/toast",
      "nuxt-vue-multiselect",
   ],
   toast: {
      position: "top-right",
      duration: 5000,
   },
   i18n: {
      useCookie: false,
      alwaysRedirect: true,
      locales: [
         {
            code: "ru",
            iso: "ru-RU",
            name: "Russian",
            file: "ru/index.js",
         },
         {
            code: "uz",
            iso: "uz-UZ",
            name: "O'zbek",
            file: "uz/index.js",
         },
      ],
      lazy: true,
      seo: false,
      langDir: "locales/",
      defaultLocale: "ru",
      parsePages: false,
   },

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
      baseURL: "http://45.150.64.34:5055/api",
   },

   router: {
      middleware: ["auth"],
   },
   auth: {
      strategies: {
         local: {
            endpoints: {
               login: { url: "/auth", method: "post" },
               logout: true,
               user: false,
            },
            tokenRequired: true,
            tokenType: "Bearer",
         },
         google: {
            clientId:
               "1048855685386-82qi3ko138vplr8cb2g0c8oujo0amb7r.apps.googleusercontent.com",
            // codeChallengeMethod: "",
            // responseType: "code",
            // endpoints: {
            //    token: "http://localhost:8000", //
            //    userInfo: "http://192.168.1.106:8000", // the endpoint to get the user info after you recived the token
            // },
         },
      },
      redirect: {
         login: "/auth",
         logout: "/",
         callback: "/auth",
         home: "/main",
         user: "/main",
      },
   },

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {
      transpile: ["vee-validate/dist/rules"],
      extend(config, ctx) {},
   },
   server: {
      host: "0",
      port: 8000,
   },
};
