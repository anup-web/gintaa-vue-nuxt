<template>
             <div class="flex flex-col w-full mt-5" v-if="userAllRatingDetails.length">
            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                 <div class="w-full flex flex-col" v-for="rating of userAllRatingDetails" :key="rating.dealRefId" >
                  <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="~/assets/images/profile/profile.jpg" :alt="rating.provider.name">
                  </div>
                  <div class="ml-3">
                    <div class="text-sm font-normal text-gray-900">{{rating.provider.name}}</div>
                    <div class="flex items-center space-x-1 mt-0.5">
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                  </div>
                </div>
                
                <div class="w-full mt-2">
                     <!-- <p class="text-xs text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p> -->
                </div>    

                 </div>


                

            </div>
            </div>   

</template>

<script lang="ts">
export default {
  name: "UserAllFeedback",
  props: ["userdetails"],

  mounted() {
   console.log("this.userdetails",this.userdetails?.identityId)
  this.getUserAllFeedback(this.userdetails?.identityId);
  },

  data() {
    return {
      product: null,
      listingItems:[{}],
      userAllRatingDetails : [{}]
    };
  },
  methods: {
     async getUserAllFeedback(uid:string) {
      try {
        let url = `/users/v1/user/rating/all/${uid}`
        const data = await this.$axios.$get(url);
        console.log("Data",data.payload)
        if(data.payload){
            this.userAllRatingDetails = data.payload;
        //   const naimObj =   Obj.forEach(function (arrayItem) {
        //     console.log("//////////////////////",arrayItem?.provider?.name)
        //     console.log("//////////////////////",arrayItem?.rating)
        //     console.log("//////////////////////",arrayItem?.provider.imageUrl)
        //    let reviewDet = {provider:arrayItem?.provider?.name , comment: arrayItem?.comment , rating:arrayItem?.rating ,imageUrl:arrayItem?.provider.imageUrl }
            
           // this.listingItems = potentialObj.map(a => a.sourceAsMap);
        }
       //this.listingItems = data.payload.slice(0, 12);
      } catch (error) {
        console.log(error);
      }
    },

getName(name:string){
console.log("Name:",name)
},


  },
};
</script>
