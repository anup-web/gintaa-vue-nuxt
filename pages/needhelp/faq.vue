<template>
  <div>
    <Header v-if="isFromWeb()" />
    <section :class="isFromWeb()? 'pt-[90px]' : 'pt-[1px]'" class="bg-[#ffffff] min-h-[500px] flex flex-col  md:pt-0">
      <div class="py-8 pt-4 lg:pt-28 lg:pb-20">
        <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
          <div class="flex flex-col w-full mx-auto max-w-[1200px]">

           <div>
              <h1 v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">{{$t('faq')}}</h1>
           
          
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
            <!-- <FaqEnglish v-if="$i18n.locale == 'en'" />
            <FaqHindi v-if="$i18n.locale == 'hi'" />
            <FaqBengali v-if="$i18n.locale == 'bn'" />             -->
          </div>
        </div>  
      </div>
    </section>
    <Footer v-if="isFromWeb()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  name: 'FaqPage',
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
         'Accept-Language': this.$i18n.locale
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

    isFromWeb(){
  if(this.$route.query.fromMobileApp === null){
    return false
  }else{
    return true
  }
    }

    
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
  },

  head() {  
    return {
      title: "FAQ | What is gintaa coin | gintaa",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "Beginners guide to know about the terms, procedures, and other information about gintaa. Browse through the list of FAQs to find answers."
      }]
    }
  }
}
</script>
