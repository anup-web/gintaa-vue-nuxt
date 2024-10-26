<template>
  <div class="flex" v-if="listingerror">
    <div class="ml-3">
      <div class="mt-2 text-sm text-red-700" >
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li>{{getListingFailedErroMsg(listingerror)}}</li>
        </ul>
      </div>
    </div>
  </div>
 

</template>
<script lang="ts">
import { mapState, mapGetters } from 'vuex'
import Vue from 'vue'
export default Vue.extend({
 // middleware: "authenticated",
  name: 'ListingError',
  props: ['listingerror'],
    computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
    data () {
    return {
    viewloginModal :false
    }
    },
    mounted(){ 
   console.log(this.listingerror)
    },
    methods:{
    getListingFailedErroMsg(listingUploadFailedReason:any) {
      if (listingUploadFailedReason.includes('VIDEO') && listingUploadFailedReason.includes('IMAGE')) {
        return this.$t('bothErrorMsg')
      } else {
        if (listingUploadFailedReason.includes('VIDEO_THUMBNAIL') || listingUploadFailedReason.includes('VIDEO')) {

          return this.$t('videoErrorMsg')

        } else {

          if (listingUploadFailedReason.includes('IMAGE_THUMBNAIL') || listingUploadFailedReason.includes('IMAGE')) {
            return this.$t('imageErrorMsg')

          } else {
            if (listingUploadFailedReason.includes('IMAGE_THUMBNAIL')) {
              return this.$t('imageTumbnilError')
            } else {
              if (listingUploadFailedReason.includes('VIDEO_THUMBNAIL')) {
                return this.$t('videoTumbnilError')
              }else{
                
                if(listingUploadFailedReason.includes('TEXT')){
                  return this.$t('fraudListingMessage')  
                }
                
               
              }
            }
          }

        }

      }
    },


    }


})

</script>



<style>
.fav-color path{
  fill:#EE2a7b !important;
}
</style>

