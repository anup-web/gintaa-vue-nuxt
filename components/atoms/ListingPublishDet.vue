<template>
  <div class="day-status text-[9px] text-gray-400 listing-date">
    {{ convertpublishDate(cDate) }}
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// import "moment/locale/bn";
// import "moment/locale/hi";
import "moment/locale/en-gb";
export default Vue.extend({
  name: "listingPublishDet",
  props: ["cDate"],

  data() {
    return {
      isSearchPage: false,
    };
  },
  created() {
    
  },
  mounted() {
   
  },
  methods: {
    convertpublishDate(pDate: any) {
   //   this.$moment.locale(this.$i18n.locale); //For changing Language
      const diffDays = this.$moment().diff(pDate, "days");
      if (diffDays <= 10 || diffDays > 365) {
        var m = this.$moment(pDate);
        return m.fromNow(); 
      } else {
        return this.$moment(pDate).format("MMM DD");
      }
    },
  },
});
</script>

<style scoped>
    @media only screen and (min-device-width: 0px) and (max-device-width: 450px){
   .listing-date{ display: none; }
}

</style>