<template>
    <div class="payment-success-page pt-[80px] lg:pt-12 bg-[#F1F3F6]">
        <GintaaFoodConsumerHeader @selectedLocation="selectedLocation" />

        <div class="mx-auto max-w-[1200px] px-2 sm:px-4 md:px-2 xl:px-2 2xl:px-0 pt-10 hidden md:flex">
            <div>
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-2 text-xsb font-normal">
        <li class="inline-flex items-center">
          <a :href="localePath('/gintaa-food')" class="inline-flex items-center text-xsb text-gray-400 hover:text-gray-900">
            <svg class="mr-0.5 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          </a>
        </li>

        <li >
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <a href="javascript:void(0)" class="ml-0.5 text-gray-500 ">Search</a>
          </div>
        </li>
      </ol>
    </nav>
  </div>
            <!-- <Breadcrumb :breadcrumb="breadcrumb" /> -->
        </div>
        <div class="mx-auto max-w-[1200px] px-2 sm:px-4 md:px-2 xl:px-2 2xl:px-0 pt-5 mb-10 lg:min-h-[350px] xl:min-h-[400px]">

            <div class="inline-block w-full py-2 align-middle search-tabs">
                <ul class="nav nav-tabs flex flex-row md:flex-row list-none border-b border-gray-200 pb-3 search-list-tab"
                    id="tabs-tabJustify" role="tablist">
                    <li v-for="item of searchTypeList" :key="item.value"
                        class="nav-item text-right mr-3 relative w-full sm:mr-3 sm:w-full md:mr-2 md:w-[145px] lg:mr-4 lg:w-[145px] cursor-pointer"
                        role="presentation">
                        <a @click="selectSearchTab(item)"
                            :class="item.selected ? 'active bg-firoza text-white' : 'text-firoza'"
                            class="nav-link w-full font-medium text-center h-[40px] flex items-center justify-center text-sm bg-transparent  border border-firoza rounded-lg px-1 py-1"
                            :id="item.value" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
                            aria-controls="tabs-homeJustify" aria-selected="true">
                            {{ item.searchtype }}
                        </a>
                    </li>
                </ul>

            </div>

            
            <resseamerspinner v-if="loading"/>

            <GintaaFoodConsumerResturantsearchresult v-if="selectedAddress" :selectedAddress="selectedAddress" :searchTypeList="getSelectedTab(searchTypeList)" @makeloadingfalse = "makeloadingfalse" />


        </div>
        <GintaaFoodConsumerFooter />
    </div>
</template>
   
<script lang="ts">
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Resseamerspinner from '../../components/atoms/resseamerspinner.vue';
export default Vue.extend({
    name: 'Search',
    components: {
        // SplitCarousel,
        // SplitCarouselItem
        VueSlickCarousel,
        Resseamerspinner,

    },

    data: function () {
        return {
            breadcrumb: [
                {
                    name: this.$t('search')
                }
            ],
            selectedAddress: null,
            loading:true,
            searchTypeList: [{
                'value': 'resturant',
                'selected': true,
                'searchtype': 'Resturant' //this.$t('usedCondition')
            },
            {
                'value': 'dish',
                'selected': false,
                'searchtype': 'Dishes'//this.$t('newCondition')
            }]
        }
    },

    mounted() {
        console.log("---gintaa food serach")
        if (this.$route.query?.catgoryName) {
            this.breadcrumb.push({
                name: this.$route.query?.catgoryName
            })
        }

    },

    methods: {
        selectedLocation(location) {
            console.log("food  selectedLocation in home page:", location)
            this.selectedAddress = location
        },

        selectSearchTab(selectedTab) {

            for (var i in this.searchTypeList) {
                if (this.searchTypeList[i].selected == true) {
                    this.searchTypeList[i].selected = false
                }
            }
            selectedTab.selected = true
            console.log("this.searchTypeList",this.searchTypeList)
           // this.$emit('applyTab', this.searchTypeList )
        },

        getSelectedTab(tablist){
        let selectedTab =  tablist.filter((item) => item.selected === true);
          return selectedTab[0].value
        },

        makeloadingfalse(){
            this.loading = false
        }
    }
});
</script>

<style scoped>

.search-tabs .nav-tabs .nav-link.active {
    color: #ffffff;
    border-color: #48CEF3;
}

.search-tabs .nav-tabs .nav-link {
    color: #48CEF3;
}

.search-tabs ul li:nth-child(1){
    width: 145px;
}
.search-tabs ul li:nth-child(2){
    width: 82px;
}
 </style>