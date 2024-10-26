<template>
    <div
      v-if="showShareOptionModal"
      class="inline-block transition-all absolute w-[450px] -left-[194px]  md:-left-[404px] mt-[15px] sharec-1"
    >
    <div class="fixed left-0 top-12 bg-white bg-opacity-0 w-full h-screen z-30 sharec-2"  v-on:click="hideModal()"></div>
      <div class="bg-white p-5 rounded-md shadow-lg relative drop z-40 sharec-3">
        <div class="flex shareoptions sharedetails items-center sharec-4">
         
          <ShareNetwork
            v-for="item in sharingOpt"
            :key="item.name"
            :network="item.network"
            :url="item.url"
            :title="item.title"
          >
            <span @click="netWorkType(item)"
              v-if="item.network === 'pinterest'"
              class="flex justify-center items-center p-2 border border-[#AD0015] rounded-full m-1 w-10 h-10 md:w-12 md:h-12 sharec-5"
            >
              <svg class="sharec-6"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.399994C4.6984 0.399994 0.400002 4.69839 0.400002 9.99999C0.400002 14.0672 2.9304 17.5408 6.5016 18.9392C6.4176 18.18 6.3416 17.0144 6.5352 16.1856C6.7096 15.4368 7.6608 11.4136 7.6608 11.4136C7.6608 11.4136 7.3736 10.8384 7.3736 9.98879C7.3736 8.65359 8.1472 7.65759 9.1104 7.65759C9.9296 7.65759 10.3248 8.27279 10.3248 9.00959C10.3248 9.83359 9.8008 11.0648 9.5296 12.2056C9.3032 13.1616 10.0088 13.9408 10.9512 13.9408C12.6576 13.9408 13.9688 12.1416 13.9688 9.54479C13.9688 7.24639 12.3176 5.63919 9.9592 5.63919C7.228 5.63919 5.6248 7.68799 5.6248 9.80559C5.6248 10.6304 5.9424 11.5152 6.3392 11.9968C6.4176 12.092 6.4288 12.1752 6.4056 12.272C6.3328 12.5752 6.1712 13.2272 6.1392 13.3608C6.0976 13.5368 6 13.5736 5.8184 13.4888C4.6192 12.9304 3.8696 11.1776 3.8696 9.76959C3.8696 6.74159 6.0696 3.95999 10.2128 3.95999C13.5432 3.95999 16.1312 6.33279 16.1312 9.50479C16.1312 12.8136 14.0448 15.476 11.1496 15.476C10.1768 15.476 9.2624 14.9704 8.9496 14.3736C8.9496 14.3736 8.468 16.2064 8.3512 16.656C8.1344 17.4896 7.5496 18.5352 7.1576 19.1728C8.056 19.4496 9.0104 19.6 10 19.6C15.3016 19.6 19.6 15.3016 19.6 9.99999C19.6 4.69839 15.3016 0.399994 10 0.399994Z"
                  fill="#AD0015"
                />
              </svg>
            </span>
    
            <!--//////////////////////////what  sapp////////////////////////////////-->
            <span @click="netWorkType(item)"
              v-if="item.network === 'whatsapp'"
              class="flex justify-center items-center p-2 border border-[#2CA63B] rounded-full m-1 w-10 h-10 md:w-12 md:h-12 sharec-9"
              ><svg width="18" height="18" class="sharec-10" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0.200012C4.1402 0.200012 0.200001 4.14021 0.200001 9.00001C0.200001 10.6509 0.663718 12.1901 1.45469 13.5103L0.278777 17.8L4.66016 16.6499C5.94153 17.3784 7.42076 17.8 9 17.8C13.8598 17.8 17.8 13.8598 17.8 9.00001C17.8 4.14021 13.8598 0.200012 9 0.200012ZM5.98789 4.89506C6.13089 4.89506 6.27782 4.89419 6.40469 4.90079C6.56162 4.90446 6.73243 4.91595 6.89596 5.27749C7.0903 5.70722 7.51344 6.78528 7.56771 6.89454C7.62198 7.00381 7.66043 7.13253 7.5849 7.27553C7.51303 7.4222 7.47565 7.51097 7.37005 7.64077C7.26079 7.7669 7.14106 7.92356 7.04206 8.01889C6.93279 8.12816 6.81996 8.24797 6.94609 8.46577C7.07223 8.68357 7.51028 9.39757 8.15781 9.97397C8.99015 10.7176 9.6924 10.9461 9.91094 11.0554C10.1295 11.1646 10.256 11.1476 10.3822 11.0009C10.512 10.8579 10.9273 10.3672 11.074 10.1487C11.217 9.93018 11.3629 9.96799 11.5609 10.0399C11.7619 10.1117 12.8334 10.6396 13.052 10.7488C13.2705 10.8581 13.4137 10.9122 13.4688 11.0009C13.5252 11.0926 13.5253 11.529 13.3441 12.0379C13.163 12.5461 12.2735 13.0375 11.8746 13.072C11.472 13.1094 11.0963 13.253 9.25781 12.5292C7.04021 11.6558 5.64169 9.38444 5.53242 9.23777C5.42316 9.09477 4.6444 8.05688 4.6444 6.98621C4.6444 5.91188 5.20768 5.38573 5.40495 5.1672C5.60588 4.94867 5.84122 4.89506 5.98789 4.89506Z" fill="#2CA63B"/>
  </svg>
            </span>
            {{ item.name }}
          </ShareNetwork>
  
           <div class="relative sharec-15">
  
             <div v-if="showCopiedModal" class="bg-black bg-opacity-70 p-1 text-white absolute -top-3 text-[10px] sharec-16">Copied</div>
                <a class="flex cursor-pointer  justify-center items-center p-2 border border-[#48CEF3] rounded-full m-1 w-10 h-10 md:w-12 md:h-12 sharec-17"
                 
                  v-clipboard:copy="delAddress"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                    <svg width="20" height="20" sharec-18 viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M13.3333 0.833344H3.33334C2.41667 0.833344 1.66667 1.58334 1.66667 2.50001V14.1667H3.33334V2.50001H13.3333V0.833344ZM15.8333 4.16668H6.66667C5.75 4.16668 5.00001 4.91668 5.00001 5.83334V17.5C5.00001 18.4167 5.75 19.1667 6.66667 19.1667H15.8333C16.75 19.1667 17.5 18.4167 17.5 17.5V5.83334C17.5 4.91668 16.75 4.16668 15.8333 4.16668ZM15.8333 17.5H6.66667V5.83334H15.8333V17.5Z" fill="#37C5EC"/>
       </svg>
                </a>
                <span class="block text-[11px] text-gray-500 text-center sharec-19">{{$t('scopy')}}</span>
           </div>
              
        </div>
      </div>
  
  
    </div>
  </template>
  <script lang="ts">
  import Vue from "vue";
  import VueClipboard from "vue-clipboard2";
  VueClipboard.config.autoSetContainer = true;
  Vue.use(VueClipboard);
  import { mapState, mapGetters } from 'vuex';
  
  export default Vue.extend({
    name: "SharingOpt",
    props: ["showSahreModal","delAddress"],
  
      computed: { ...mapState({
        authUser: (state:any) => state.authUser
      }),
      ...mapGetters({
        isLoggedIn: 'isLoggedIn'
      })},
    mounted() {
      console.log("This.delivery", this.delAddress);
    },
  
    data() {
      return {
        showShareOptionModal: true,//this.showSahreModal,
        showCopiedModal: false,
        referralLink:'',
        textMsg: "",
        sharingOpt: [
          {
            network: "whatsapp",
            url: this.delAddress,
            title: "",
            name: this.$t('whatsapp'),
            img: "fb.svg",
          },
        ],
      };
    },
    methods: {
      netWorkType(netWorkTyp:any){
       console.log("netWorkTyp",netWorkTyp)
      // this.logEvent(netWorkTyp.network)
      },
      hideModal() {
        this.showShareOptionModal = false;
        this.$emit("closeShareModal", true);
      },
  
      imgsrc(img: string) {
        return '~/assets/network/"' + img + '"';
      },
  
      getsvg() {
        return '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.132 23.3335L15.1493 15.0066H18.528L18.6666 11.6667H15.1493L15.132 9.41497C15.132 8.95087 15.2106 8.58462 15.368 8.31489C15.524 8.04648 15.8986 7.92086 16.4893 7.93938H18.5666L18.6493 4.82158C18.3906 4.78456 18.128 4.76208 17.86 4.75282C17.592 4.74357 17.348 4.72902 17.1266 4.71051C16.868 4.692 16.6093 4.68275 16.3506 4.68275C15.5386 4.62721 14.8413 4.7158 14.26 4.94719C13.6773 5.1799 13.1973 5.50384 12.82 5.92167C12.4413 6.33817 12.16 6.81681 11.9746 7.35495C11.7906 7.8931 11.6986 8.4405 11.6986 8.99715L11.716 11.6667H9.33331V15.0066H11.716L11.6986 23.3335H15.132Z" fill="#4F5FB5"/>';
      },
  
      onCopy: function (e: any) {
        console.log("copy suc")
        this.showCopiedModal = !this.showCopiedModal;
        setTimeout(() => {this.showCopiedModal = !this.showCopiedModal},2000);
        this.textMsg = "Successfully Copied To Clipboard";
        //alert('You just copied: ' + e.text)
      },
      onError: function (e: any) {
        this.textMsg = "Failed to copy";
        //alert('Failed to copy texts')
      },
  

  
      closePopup() {
        this.showCopiedModal = false;
        this.hideModal()
      },
    },
  });
  </script>
  <style scoped>
  .shareoptions a {
    font-size: 11px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 15px;
    text-align: center;
  }
  .shareoptions a:last-child {
    margin-right: 0;
  }
  
  .drop::before{
    content: '';
    border-bottom: 10px solid #ffffff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    right: 20px;
    top:-8px;
  
  }
  .drop{
    box-shadow: rgb(165 165 165) -1px -1px 10px 0px;
  }
  @media only screen and (max-width: 600px) {
     .shareoptions a {
     margin-right: 10px;
    
  }
  
  }
  </style>