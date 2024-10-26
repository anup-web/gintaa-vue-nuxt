<template>
             <div>
            <h1 class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">FAQ</h1>
           
          <!-- <div class="accordion-item border-0  rounded-sm bg-gray-50 ">
                            <h2 class="accordion-header mb-0 font-medium text-sm px-8 border-b border-gray-200" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 
                            text-sm text-gray-800 text-left  border-0 rounded-none transition
                            focus:outline-none bg-gray-100  font-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                             <span>How to sign up on gintaa? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show p-8"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body   text-xsb text-gray-500">
                                gintaa Coin is a reusable virtual coin that users can earn or acquire by getting engaged with gintaa app or the platform. Users can earn & redeem these coins to close exciting exchange offers & deals on gintaa. The users can also buy gintaa coins. 
                                
                                </div>
                            </div>
                        </div> -->
                    <div v-if="faqQuestions.length > 0" id="accordionFlushExample" class="accordion accordion-flush">
        <div v-for="(item,index) in faqQuestions" :key="index" class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 id="flush-headingOne" class="accordion-header mb-0">
            <button
              class="accordion-button relative flex items-center w-full py-4
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none"
              type="button"
              :id = index
              data-bs-toggle="collapse"
              :data-bs-target="'#flush-collapseOne'+`${index}`"
              aria-expanded="false"
              :aria-controls="'#flush-collapseOne'+`${index}`"
            >
              <div  class="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span class="text-xs text-gray-900">{{ index+1 }}</span>
              </div> <span>{{ item.question }} </span>
            </button>
          </h2>
          <div
            :id="'flush-collapseOne'+index"
            class="accordion-collapse border-0 collapse "
            :class="{ 'show': index === 0 }"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div  v-nl3br class="accordion-body py-4  text-xsb text-gray-500">
              {{ item.answer }}.
            </div>
          </div>
        </div>
      </div>
           
<div v-show="loading" class=" py-6 flex justify-center">
      <Spinner />
    </div>

            </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FaqEnglish',

  
  data () {
    return {
      loading: true,
      faqQuestions: []

    }
  },
  created () {
    if (process.client) {
      this.setAllFaq()
    }
  },

methods:{
       async setAllFaq(){
        const projectId = this.$fireModule.apps[0].options.projectId
        const region = this.$fire.functions._region
        const url = `https://${region}-${projectId}.cloudfunctions.net/faq`

        try{

         const appcheckToken = await this.$fire.appCheck.getToken()
         const headers = {
         'X-Firebase-AppCheck': appcheckToken.token,
         'Accept-Language': 'hi'//this.$i18n.locale
         }
         const faq = await this.$axios.$post(url, { data: { collectionName: 'faq' } }, { headers })

      console.log("faq",faq.result)
       if (faq && faq.result.message) {
            this.faqQuestions.push(...faq.result.message)
          }
          this.loading = false

        }catch(error) {
         this.faqQuestions = []
         this.loading = false
         console.log(error)

        }


    },



  },

  directives: {
    nl3br: {
     // console.log(" simplified example,") 
      inserted(el) {
        console.log(" simplified example,") 
        // works only for nodes without any child elements
        el.innerHTML = el.textContent.replace(/\\n/g, '<br/>')
        //return el.innerHTML
      }
    }
  }


  
})
</script>
<style scoped>
.accordion-button:not(.collapsed) {
    color: rgba(0,0,0,0.8) !important;
    background: none;
    box-shadow: none;
}
.accordion-item:first-of-type .accordion-button{
    border-radius: 0 !important;
    background: none !important;
}
h2{
    font-weight: 700;
}
button{
     font-weight: 700 !important;

}
</style>