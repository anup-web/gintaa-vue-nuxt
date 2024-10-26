<template>
<section class="rounded  min-h-screen flex flex-col justify-center md:py-6 sm:px-6 lg:px-8 bg-login-bg bg-cover bg-top">
  <div class="sm:mx-auto sm:w-full sm:max-w-md" >
  <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
      <div  class="flex items-center justify-center mt-4">
        <a  href="/" title="gintaa" class="block"><svg  width="145" height="36" viewBox="0 0 169 41" fill="none" xmlns="http://www.w3.org/2000/svg" ><g  clip-path="url(#clip0_947_112)"><path  d="M107.8 23.8C107.8 24.7 107.9 25.4 108.2 26C108.5 26.6 109.2 26.9 110.3 26.9C110.8 26.9 111.3 26.9 111.7 26.8V31.5C110.8 31.6 110 31.6 109.2 31.6C107.6 31.6 106.3 31.5 105.4 31.2C104.4 30.9 103.7 30.4 103.1 29.7C102.6 29 102.3 27.9 102.3 26.5V15.2H99.8001V10.3H102.3V4.90002H107.8V10.3H111.9V15.2H107.8V23.8V23.8ZM60.7001 25.3C61.6001 24.8 62.2001 24.2 62.7001 23.3C63.2001 22.4 63.4001 21.5 63.4001 20.5C63.4001 19.5 63.2001 18.5 62.7001 17.7C62.2001 16.9 61.5001 16.2 60.7001 15.7C59.8001 15.2 58.9001 15 57.9001 15C56.2001 15 54.9 15.5 53.8 16.6C52.8 17.6 52.3 19 52.3 20.5C52.3 22.1 52.8 23.5 53.8 24.5C54.8 25.5 56.2001 26 57.9001 26C58.9001 26.1 59.9001 25.8 60.7001 25.3ZM66 36.2C64.2 37.9 61.7001 38.7 58.4001 38.7C54.5001 38.7 51.3001 37.7 48.7001 35.6L51.4001 31.7C52.2001 32.4 53.2001 32.9 54.4001 33.3C55.5001 33.7 56.8 33.9 58 33.9C61.5 33.9 63.2001 32.3 63.2001 29.2V28.9C61.7001 30.1 59.8 30.7 57.5 30.7C55.4 30.7 53.5 30.2 51.8 29.3C50.2 28.4 48.9 27.2 48.1 25.6C47.2 24 46.8 22.3 46.8 20.5C46.8 18.6 47.2 16.9 48.1 15.3C49 13.8 50.2 12.5 51.8 11.6C53.4 10.7 55.3 10.2 57.5 10.2C59.8 10.2 61.7001 10.8 63.2001 12V10.6H68.7V29.2C68.7 32.2 67.8 34.5 66 36.2ZM71.5 31.1H77.1V10.7H71.5V31.1ZM98.6 19C98.6 16.2 98 14.1 96.7 12.6C95.4 11.1 93.4 10.3 90.6 10.3C89.7 10.3 88.7 10.5 87.7 10.9C86.7 11.3 85.8 11.8 85.2 12.5V10.7H79.7V31.1H85.2V20.3C85.2 18.3 85.5001 16.9 86.3001 16.1C87.1001 15.3 88 14.9 89 14.9C91.6 14.9 92.9001 16.3 92.9001 19V31H98.6V19ZM123.3 15.1C125 15.1 126.4 15.6 127.4 16.7C128.4 17.8 128.9 19.2 128.9 20.9C128.9 22.7 128.4 24.1 127.4 25.1C126.4 26.1 125 26.6 123.3 26.6C121.6 26.6 120.3 26.1 119.2 25C118.2 23.9 117.7 22.5 117.7 20.9C117.7 19.2 118.2 17.8 119.2 16.7C120.2 15.6 121.6 15.1 123.3 15.1ZM126.2 30.7C127.3 30.2 128.2 29.6 128.6 29V31H134.1V10.7H128.6V12.8C128 12.1 127.2 11.4 126.1 11C125 10.5 123.8 10.3 122.4 10.3C120.3 10.3 118.5 10.8 116.9 11.7C115.4 12.6 114.2 13.9 113.4 15.5C112.6 17.1 112.2 18.9 112.2 20.9C112.2 22.9 112.6 24.7 113.4 26.3C114.2 27.9 115.4 29.2 116.9 30.1C118.4 31 120.3 31.5 122.4 31.5C123.8 31.5 125.1 31.2 126.2 30.7ZM150.8 16.7C149.8 15.6 148.4 15.1 146.7 15.1C145 15.1 143.6 15.6 142.6 16.7C141.6 17.8 141.1 19.2 141.1 20.9C141.1 22.6 141.6 23.9 142.6 25C143.6 26.1 145 26.6 146.7 26.6C148.4 26.6 149.8 26.1 150.8 25.1C151.8 24.1 152.3 22.7 152.3 20.9C152.3 19.2 151.8 17.8 150.8 16.7ZM152.1 29C151.6 29.6 150.8 30.2 149.7 30.7C148.6 31.2 147.3 31.5 145.9 31.5C143.8 31.5 142 31 140.4 30.1C138.9 29.2 137.7 27.9 136.9 26.3C136.1 24.7 135.7 22.9 135.7 20.9C135.7 18.9 136.1 17.1 136.9 15.5C137.7 13.9 138.9 12.6 140.4 11.7C141.9 10.8 143.8 10.3 145.9 10.3C147.3 10.3 148.5 10.5 149.6 11C150.7 11.5 151.5 12.1 152.1 12.8V10.7H157.6V31.1H152.1V29V29Z" fill="#8EC23C"></path> <path  d="M76.4 7.69998C75.8 8.29998 75.1 8.59998 74.3 8.59998C73.4 8.59998 72.7 8.29998 72.1 7.69998C71.5 7.09998 71.2 6.39998 71.2 5.59998C71.2 4.79998 71.5 4.09998 72.1 3.49998C72.7 2.89998 73.4 2.59998 74.3 2.59998C75.1 2.59998 75.9 2.89998 76.4 3.49998C77 3.99998 77.3 4.69998 77.3 5.49998C77.3 6.39998 77 7.09998 76.4 7.69998Z" fill="#48CEF3"></path> <path  d="M34.2 40.2999C36.9 40.2999 39.1 38.1 39.1 35.4V6.09995C39.1 3.39995 36.9 1.19995 34.2 1.19995H4.9C2.2 1.19995 0 3.39995 0 6.09995V35.5C0 38.2 2.2 40.4 4.9 40.4H34.2V40.2999Z" fill="#8EC23C"></path> <path  d="M19.3 19.5C17.6 19.5 16 20 14.7 20.9L18.6 23.4V24.8C18.8 24.7 19.1 24.7 19.3 24.7C21 24.7 22.4 26.1 22.4 27.8C22.4 29.5 21 30.9 19.3 30.9C17.6 30.9 16.2 29.5 16.2 27.8C16.2 26.9 16.6 26.1 17.2 25.5C15.4 25.1 13.8 24.3 12.4 23.2C11.6 24.5 11 26 11 27.8C11 32.4 14.7 36.1 19.3 36.1C23.9 36.1 27.6 32.4 27.6 27.8C27.6 23.2 23.9 19.5 19.3 19.5Z" fill="#CAFC9D"></path> <path  d="M28.9 15C28.9 20.3 24.6 24.6 19.3 24.6C14 24.6 9.69995 20.3 9.69995 15C9.69995 9.70002 14 5.40002 19.3 5.40002C24.6 5.50002 28.9 9.80002 28.9 15Z" fill="#CAFC9D"></path> <path  d="M27.3 8C28.4 8 29.3 6.6 29.3 5.5H23.9C25.2 6.1 26.4 6.9 27.3 8Z" fill="#CAFC9D"></path> <path  d="M19.3 19.5C16.8 19.5 14.6 20.6 13 22.3C14.6 23.7 16.7 24.6 19 24.6C19.1 24.6 19.2 24.6 19.3 24.6C19.4 24.6 19.5 24.6 19.6 24.6C21.9 24.5 24 23.7 25.6 22.3C24.1 20.6 21.8 19.5 19.3 19.5Z" fill="#FCF5FF"></path> <path  d="M163.5 1.59998C160.6 1.59998 158.2 3.99998 158.2 6.89998C158.2 9.79998 160.6 12.2 163.5 12.2C166.4 12.2 168.8 9.79998 168.8 6.89998C168.8 3.99998 166.4 1.59998 163.5 1.59998ZM163.5 11C161.2 11 159.4 9.19998 159.4 6.89998C159.4 4.59998 161.2 2.79998 163.5 2.79998C165.8 2.79998 167.6 4.59998 167.6 6.89998C167.6 9.09998 165.8 11 163.5 11ZM164.9 7.49998C165.4 7.19998 165.7 6.69998 165.7 6.09998C165.7 5.09998 164.9 4.39998 164 4.39998H162.4C162.1 4.39998 161.8 4.69998 161.8 4.99998V8.89998C161.8 9.19998 162.1 9.49998 162.4 9.49998C162.7 9.49998 163 9.19998 163 8.89998V7.89998H163.8L164.7 9.19998C164.8 9.39998 165 9.39998 165.2 9.39998C165.3 9.39998 165.4 9.39998 165.5 9.29998C165.8 9.09998 165.8 8.79998 165.6 8.49998L164.9 7.49998ZM163.9 6.69998H162.9V5.49998H163.9C164.2 5.49998 164.5 5.79998 164.5 6.09998C164.5 6.39998 164.2 6.69998 163.9 6.69998Z" fill="#00540A"></path></g> <defs ><clipPath  id="clip0_947_112"><rect  width="168.7" height="41" fill="white"></rect></clipPath></defs></svg></a> </div>
  
      <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green mt-10">            
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
     </div>

     <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Thank you for showing your interest!!!</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">The premium Ad tag will be live on gintaa soon. Hold tight!! Some cool features are on the way!!</p>
            </div>
          </div>
        
        <div class="mt-5 sm:mt-6 flex items-center justify-center">
          <a href="/" type="button" class="inline-flex w-[200px] justify-center rounded-md border border-transparent bg-green px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm">Go to Home</a>
        </div>
      
     
    </div>
  </div> 
   
   </section> 
    </template>
    
    
    <script lang="ts">
    
    import Vue from 'vue'
    
    
    export default Vue.extend({     
      name: 'thankyou',
      mounted() {
        const uIddd = this.$route.query.uid
        console.log('uId:', uIddd)
        if(this.$route.query.uId && this.$route.query.uId != ''){
          const uId: string = this.$route.query.uId
          console.log('uId:', uId)
          this.callFireFunctionForStoreWaitListData(uId)
        }
      },
      methods: {
        async callFireFunctionForStoreWaitListData(uId: string){
          const fireFunctionName: string = 'addWaitlistedUserForPromotion';
          const projectId = this.$fireModule.apps[0].options.projectId
          const region = this.$fire.functions._region
          const url = `https://${region}-${projectId}.cloudfunctions.net/${fireFunctionName}`
          try{

            const appcheckToken = await this.$fire.appCheck.getToken()
            const headers = {
              'X-Firebase-AppCheck': appcheckToken.token,
              'Accept-Language': this.$i18n.locale
            }

            let requestPayloadData =  {data : {uid: uId}};

            const saveWaitListResp = await this.$axios.$post(url, requestPayloadData, { headers })

            console.log("saveWaitListResp:", saveWaitListResp)
            

            } catch(error) {
              console.log(error)
            }
        }
      }
    })
    
    </script>
    
    