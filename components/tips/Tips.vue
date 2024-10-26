<template>
<div class="w-full">
<div class="hidden lg:block">
                        <div class="rounded border-t-[3px] border-t-[#48cef3] px-2 py-2 drop-shadow-md bg-white">
                            <div class="flex">
                                <div class="flex-none h-[43px] w-[40px] ml-0">
                                    <img src="~/assets/images/tips.svg" alt="tips" />

                                </div>
                                <div class="flex pt-[11px] pl-2">
                                    <h3 class="section-title text-gray-600  text-base md:text-base  font-medium mb-2" >
                                        Tips    
                                    </h3>
                                    
                                </div>
                                
                            </div>
                            <div v-if="this.id==1">
                                <div v-for="(item,i) in itemProductDetails" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>

                  <div v-if="this.id==2">
                                <div v-for="(item,i) in itemProductInfo" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>

                  <div v-if="this.id==3">
                                <div v-for="(item,i) in itemProductAttrAndTags" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>
                  <div v-if="this.id==4">
                                <div v-for="(item,i) in WantInReturn" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>
                           
                                    <div v-if="this.id==1"  class="text-sm text-firoza cursor-pointer pl-2"><a target=_blank href="https://academy.gintaa.com/">{{$t('cl_Learnhowtolistyourproduct')}}</a> </div>  
                                    <div v-if="this.id==2"  class="text-sm text-firoza cursor-pointer pl-2"><a target=_blank href="https://academy.gintaa.com/">{{$t('cl_NowthatIknowwhatagintaacoinis')}} 
</a> </div>   
<div v-if="this.id==3"  class="text-sm text-firoza cursor-pointer pl-2"><a target=_blank href="https://academy.gintaa.com/">{{$t('cl_Learn_more')}}</a> </div>   
                        </div>
                       
                        
                         
                    </div>

                    <!-- for mobile -->

                    
                        <div class="bg-white p-4 my-[150px] mx-4 rounded lg:hidden relative">
                                <div @click="removeModal()"  class="absolute right-[30px] top-[20px] text-gray-400 cursor-pointer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
                                </div>
                           <div class="flex">
                                <div class="flex-none h-[43px] w-[40px]">
                                    <img src="~/assets/images/tips.svg" alt="tips"/>

                                </div>
                                <div class="flex pt-[11px] pl-2">
                                    <h3 class="section-title text-gray-600  text-base md:text-base  font-medium mb-2" >
                                        Tips    
                                    </h3>
                                    
                                </div>
                                
                            </div>
                                     <div v-if="this.id==1">
                                <div v-for="(item,i) in itemProductDetails" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>

                  <div v-if="this.id==2">
                                <div v-for="(item,i) in itemProductInfo" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>

                  <div v-if="this.id==3">
                                <div v-for="(item,i) in itemProductAttrAndTags" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>

                  <div v-if="this.id==4">
                                <div v-for="(item,i) in WantInReturn" :key="i" class="w-full mb-4 mt-2 pl-2 flex">
                        <div class="mr-2 ml-0 mt-[2px] flex justify-start">
                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70117 6.15674L0.451172 12.2189L0.451172 0.0945606L8.70117 6.15674Z" fill="#C4C4C4"/>
    </svg>
                        </div>
                        <div class="tips-list">
                            <p class="text-darkcolor text-xs">{{item}}</p>
                        </div>
                    </div>   
                  </div>


                    <div v-if="this.id==1"  class="text-sm text-firoza cursor-pointer pl-2"><a target=_blank href="https://academy.gintaa.com/">{{$t('cl_Learnhowtolistyourproduct')}}</a> </div>  
                                    <div v-if="this.id==2"  class="text-sm text-firoza cursor-pointer pl-2"><a target=_blank href="https://academy.gintaa.com/">{{$t('cl_NowthatIknowwhatagintaacoinis')}} 
</a> </div>   
<div v-if="this.id==3"  class="text-sm text-firoza cursor-pointer pl-2"><a target=_blank href="https://academy.gintaa.com/">{{$t('cl_Learn_more')}}</a> </div>   

                 
                 
                                    </div>

                    

</div>

                      


                   

                    


                    
</template>
<script>
    export default {
        props: ['id','showModal'],
        data: function() {
            return  {                
                remoteData: {
                    // web_tips_upload_media: null,
                    // web_tips_basic_product_info: null,
                    // web_tips_product_attributes_tags: null
                    web_listing_tips_info: null
                },
                remotConfigSuffix: this.$config.remotConfigSuffix,
                itemProductDetails: [
                    // this.$t('cl_Tips_PT1'),
                    // this.$t('cl_Tips_PT3'),
                    // this.$t('cl_Tips_PT4'),
                    // this.$t('cl_Tips_PT8'),
                    // this.$t('cl_Tips_PT9'),
                ],
                itemProductInfo: [
                        // this.$t('cl_Tips_PT10'),
                        // this.$t('cl_Tips_PT13'),
                        // this.$t('cl_Tips_PT14'),
                        // this.$t('cl_Tips_PT15'),
                ],
                itemProductAttrAndTags: [
                    // this.$t('cl_Tips_PT16'),
                    // this.$t('cl_Tips_PT17'),
                    // this.$t('cl_Tips_PT18'),
                ],
                WantInReturn: [
                    this.$t('cl_Tips_PT19'),
                    this.$t('cl_Tips_PT20'),
                    this.$t('cl_Tips_PT21'),
                ],
                //showModal: false,
            }
        },
        watch : {
            id(newValue, oldValue) {
                console.log(newValue);
            },
            showModal(newValue, oldValue){
                console.log(newValue);
            }
        },
        created() {
            // if (process.client) {
            //     this.readRemoteConfig()
            // }

            this.getTipsInfoFromStrapi()
        },
        methods:{
            removeModal(){
                this.$emit('tipModal', false);
            },

            async readRemoteConfig () {
                try {
                    await this.$fire.remoteConfig.fetchAndActivate()
                } catch (e) {
                    alert(e)
                    return
                }

                const remoteData = await this.$fire.remoteConfig.getAll()

                if (remoteData) {
                    // const localeSiff = this.$i18n.locale === 'hi' ? '_hi' : ''
                    const localeSiff = this.remotConfigSuffix[this.$i18n.locale] ? this.remotConfigSuffix[this.$i18n.locale] : '';
                    
                    Object.keys(this.remoteData).map((key, index) => {
                        const hKey = key + localeSiff
                        this.remoteData[key] = remoteData[hKey] && remoteData[hKey]._value ? JSON.parse(remoteData[hKey]._value) : []
                    })
                    
                    this.itemProductDetails = this.remoteData.web_tips_upload_media
                    this.itemProductInfo = this.remoteData.web_tips_basic_product_info
                    this.itemProductAttrAndTags = this.remoteData.web_tips_product_attributes_tags
                }

               // console.log('remoteData:', this.remoteData)
            },

            async getTipsInfoFromStrapi(){
                try{
                    let locale = this.$i18n.locale
                    // delete this.$axios.defaults.headers.common["Authorization"];
                    // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
                    const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
                    // console.log('index CMS Data:', data)
                    let responseData
                    if(data) {
                        responseData = data.data
                        responseData.map((item) => {
                            const key = item.attributes.parameter;
                        // console.log('keys:', key)
                            if(this.remoteData[key] !== undefined){
                            let paramVal = item.attributes.value;
                            // console.log('paramVal:', key, paramVal);
                            this.remoteData[key] = paramVal || [];
                            } else {
                            // console.log('other keys:', key)
                            }
                        })
                        
                        this.itemProductDetails     = this.remoteData.web_listing_tips_info['upload_media']
                        this.itemProductInfo        = this.remoteData.web_listing_tips_info['basic_product_info']
                        this.itemProductAttrAndTags = this.remoteData.web_listing_tips_info['product_attributes_tags']
                    
                    }
                    return responseData
                } catch (error) {
                    console.log(error);
                    return error
                }
                },
        },
        
    }
</script>
