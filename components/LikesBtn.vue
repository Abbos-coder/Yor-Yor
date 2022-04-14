<template>
   <div class="mylikes__main--filters">
      <nuxt-link :to="localePath('/my-likes')" exact>{{
         $t("btns.likedMe")
      }}</nuxt-link>
      <nuxt-link :to="localePath('/my-likes/i-liked')">{{
         $t("btns.iLiked")
      }}</nuxt-link>
      <nuxt-link :to="localePath('/my-likes/sympathy')">{{
         $t("btns.sympathy")
      }}</nuxt-link>
      <b-form-select
         v-model="mylikesFilter.status"
         :options="mylikesFilter.statusOption"
      ></b-form-select>
   </div>
</template>

<script>
export default {
   data: () => ({
      mylikesFilter: {
         status: "online",
         statusOption: [
            { value: "all", text: "Все" },
            { value: "online", text: "Онлайн" },
            { value: "offline", text: "Oфлайн" },
         ],
      },
   }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_myLikes.scss";
</style>
