<template>
  <div class="w-full flex flex-col mt-4 px-4 sm:px-4 md:px-4 lg:px-6 xl:px-6 2xl:px-6 bg-white">
    <div class="flex w-full text-gray-900 text-base font-medium pt-2">
      {{$t('freequently_asked_question')}}
    </div>
    <div class="w-full flex flex-col mt-5">

      <div v-if="walletQuestions.length > 0" id="accordionFlushExample" class="accordion accordion-flush">
        <div v-for="(item,index) in walletQuestions" :key="index" class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
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
            <div  v-nl2br class="accordion-body py-4  text-xsb text-gray-500">
              {{ item.answer }}.
            </div>
          </div>
        </div>
      </div>
    
    </div>

    <div v-show="loading" class=" py-6 flex justify-center">
      <Spinner />
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'QuestionsRegardingWallet',

  data () {
    return {
      loading: true,
      walletQuestions: []

    }
  },
  created () {
    if (process.client) {
      this.setAllFaq()
    }
  },
  mounted () {
   //  this.getfaq()
  },
  methods: {

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
         const faq = await this.$axios.$post(url, { data: { collectionName: 'app_faq' } }, { headers })

      console.log("faq",faq.result)
       if (faq && faq.result.message) {
            this.walletQuestions.push(...faq.result.message)
          }
          this.loading = false

        }catch(error) {
        this.walletQuestions = []
        this.loading = false
        console.log(error)

        }


    },

  replaceNcharacter(el:any){
    el.innerHTML = el.textContent.replace(/\n/g, '<br />')

    console.log("============",el.textContent.replace(/\n/g, '<br />'))
   // let a =  el.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
   // p.replace('\\n2', '%0D%0A')
    //return a
  }
   



    // async setAllFaq (): any {
    //   const headers = {
    //     lang: 'hi'

    //   }
    //   await this.$fire.appCheck.activate(this.$fire.auth._delegate.app._options.appCheckReCapchaV3Key)
    //   try {
    //     const requestPayloadData = {"collectionName" : "app_faq"}
    //     this.$fire.functions.httpsCallable('faq')(requestPayloadData).then((resp) => {
    //       if (resp.data) { console.log('resp.data', resp.data.message) }
    //       if (resp.data.message && resp.data.message.length > 0) {
    //         this.walletQuestions.push(...resp.data.message)
    //       }
    //       this.loading = false
    //     // console.log('seenAll resp', resp)
    //     })
    //   } catch (error) {
    //     this.walletQuestions = []
    //     this.loading = false
    //     console.log(error)
    //   }
    //   // return firebaseFun(requestPayloadData)
    // }

    //
  },
  directives: {
    nl2br: {
     // console.log(" simplified example,") 
      inserted(el) {
        console.log(" simplified example,") 
        // works only for nodes without any child elements
        el.innerHTML = el.textContent.replace(/\\n/g, '<br/>')
        //return el.innerHTML
      }
    }
  }

}
</script>
