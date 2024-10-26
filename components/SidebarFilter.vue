<template>
  <div class="flex-shrink-0 pe-24 hidden md:block md:w-[280px] lg:w-96">
    <aside>
      <div class="block border-b border-gray-200 pb-7 mb-7">
        <div class="flex items-center justify-between mb-2.5">
          <h2 class="font-semibold text-heading text-xl md:text-2xl">
             {{ $t('filters') }}
          </h2><button class="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading" aria-label="Clear All"  @click="initializeFilter">
            {{ $t('clearAll') }}
          </button>
        </div>
        <div v-show="selectedFiltersLength > 0" :class="[showMoretags ? '' : 'max-h-[107px] overflow-hidden', '']">
          <div v-for="filterObject of filterObjects" :key="filterObject.name" class="flex flex-wrap -m-1.5 pt-2">
            <div v-for="filter of filterObject.filters.filter(obj => obj.selected === true)" :key="filter.name">
              <div v-if="filter.selected" class="group flex flex-shrink-0 m-1.5 items-center border border-gray-200 bg-gray-100 rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-gray-800">
                {{ filter.name }}<svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="filter.selected = false; applyFilter()"
                ><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <a v-show="selectedFiltersLength > 4" class="cursor-pointer text-firoza text-sm mt-5 inline-block font-medium" @click="showMoretags=!showMoretags">{{ showMoretags? 'Show Less': 'Show More' }}</a>
      </div>
      <div class="hidden md:block">
        <form class="">
          <div v-for="(filterObject, index) in filterObjects" :key="filterObject.name + index" :class="[index > 0 ? 'pb-7 mb-7 block border-b border-gray-200' : 'block border-b border-gray-200 pb-7 mb-7']">
         
         <!-- Start For DropDown Section && filterObject.filters.length >1-->
         <fieldset v-if="filterObject.type ==='dropdown' ">
              <legend class="block text-sm font-medium text-gray-900">
                {{$t('listinig_category')}}
                <!-- {{ filterObject.name }} -->
              </legend>

               <div class="pt-6 space-y-3">
                <div class="relative">
                  <button
                    id="headlessui-listbox-button-4"
                    class="border border-gray-300 text-gray-500 text-[12px] md:text-sm font-medium relative w-full py-2 px-3  text-left bg-white rounded  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="filterObject.showFilter=!filterObject.showFilter"
                  >
                    <span class="block truncate">{{ filterObject.filters.filter(el => el.selected).length > 0 ? filterObject.filters.filter(el => el.selected)[0].name : ` ${filterObject.name}` }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pe-2 pointer-events-none">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </span>
                  </button>
                  <ul v-show="filterObject.showFilter" class="z-20 absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                    <li v-for="filter of filterObject.filters" :key="filter.name" class="truncate text-gray-500 text-sm py-2 pl-10 pr-4 cursor-pointer hover:bg-gray-100" @click="dropdownFilter(filterObject, filter); filterObject.showFilter = false">
                      <span v-if="filter.selected" class="absolute  flex items-center left-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 20 20"
                          class="w-5 h-5"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      {{ filter.name }}
                    </li>
                  </ul>
                </div>
              </div> 
              
              </fieldset>

              <!-- End For DropDown Section -->
         
         <fieldset v-if="filterObject.type !== 'dropdown'">
              <legend class="block text-sm font-semibold text-gray-800 pb-6">
                {{ filterObject.name }}
              </legend>
              <div v-for="filter of filterObject.filters" :key="filter.name" class="pb-custom">
                <div v-if="filterObject.type == 'checkbox'" class="flex items-center pb-3">
                  <input
                    :id="'f-' + filter.name"
                    v-model="filter.selected"
                    name="filters[]"
                    value="white"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza"
                    @change="applyFilter()"
                  >
                  <label :for="'f-' + filter.name" class="ml-3 text-sm text-gray-600">  {{ filter.name }} </label>
                </div>

           

                <div v-else-if="filterObject.type == 'radio'" class="flex items-center pb-3">
                  <input
                    :id="'f-' + filter.name"
                    v-model="filter.selected"
                    :name="'filters' + filterObject.name"
                    value="white"
                    type="radio"
                    class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    @change="radioFilter(filterObject, filter)"
                  >
                  <!-- filterObject.filters.map(el => {el.selected = fasle; return el});  -->
                  <label :for="'f-' + filter.name" class="ml-3 text-sm text-gray-600">  {{ filter.name }} </label>
                </div>

                <div v-else-if="filterObject.type == 'date'" class="flex items-center pb-3">
                  <label class="text-sm text-gray-600 cursor-pointer" @click="filter.selected = !filter.selected; radioFilter(filterObject, filter)">  {{ filter.name }} </label>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </aside>
    <div class="md:hidden bg-white shadow-2xl fixed bottom-0 p-4 border-t z-50 w-full text-center text-[15px] font-medium text-gray-600 flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="14px" viewBox="0 0 18 14" class="mr-3"><g id="Group_36196" data-name="Group 36196" transform="translate(-925 -1122.489)"><path id="Path_22590" data-name="Path 22590" d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z" transform="translate(0 -169.575)" fill="currentColor" /><path id="Path_22591" data-name="Path 22591" d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z" transform="translate(0 -816.512)" fill="currentColor" /><path id="Path_22593" data-name="Path 22593" d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z" transform="translate(-233.213)" fill="currentColor" /><path id="Path_22594" data-name="Path 22594" d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z" transform="translate(-1405.617 -646.936)" fill="currentColor" /></g></svg>Filter
    </div>
  </div>
</template>

<script>
import "moment/locale/en-gb";
export default {
  name: 'SidebarFilter',
  props: ['filterObjects'],
  data () {
    return {
      showMoretags: false
    }
  },
  mounted(){
 //  console.log("filterObjects",this.filterObjects)
   
  },
  created () {
   // console.log("Created Call One time")
    if(this.$route.query?.transactionType){
      this.applyFilter()
    }

    // if(this.$route.query?.status && this.$route.query?.type ){
    //   this.applyFilter()
    // }
  
  },
  computed: {
    selectedFiltersLength () {
      let count = 0

      this.filterObjects.map((filterObject) => {
        filterObject.filters.map((el) => {
          if (el.selected) {
            count++
          }
          return el
        })
      })

      return count
    }
  },
  methods: {
    applyFilter () {
      this.$emit('applyFilter', this.getSearchParams())

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    initializeFilter () {
      this.$emit('initializeFilter')
      this.$emit('applyFilter', {})
      this.$emit('clearAll')
    },
    radioFilter (filterObject, filter) {
      filterObject.filters.map((el) => {
        if (filter.name !== el.name) {
          el.selected = false
        }
        return el
      })

      this.applyFilter()
    },

   dropdownFilter (filterObject, filter) {
   // console.log("======================filter",filterObject,filter.value)
   //If dropdown value is blank make all dropdown list false added
    if(!filter.value){
      filterObject.filters.map((el) => {
        el.selected = false
        return el
      })
    }else{
      filterObject.filters.map((el) => {
        el.selected = filter.name === el.name
        return el
      })
    }
     
      this.applyFilter()
    },
    getSearchParams () {
      const obj = {}

      for (const filterObj of this.filterObjects) {
        const selectedFilter = filterObj.filters.filter(filter => filter.selected).map(filter => filter.value)
        if (selectedFilter.length > 0) {
          if (filterObj.type === 'checkbox') {
            obj[filterObj.paramName] = selectedFilter.join(',')
          } else if (filterObj.type === 'radio') {
            obj[filterObj.paramName] = selectedFilter[0]
          } else if (filterObj.type === 'date') {
            obj[filterObj.paramName[0]] = selectedFilter[0]
            obj[filterObj.paramName[1]] = this.$moment().locale('en-gb').format('YYYYMMDD')
          }else if (filterObj.type === 'dropdown'){
           // console.log("filterObj type dropdown",filterObj,selectedFilter)
            obj[filterObj.paramName] = selectedFilter[0]
          }
        }
      }

      return obj
    }
  }
}
</script>
<style scoped>
fieldset .pb-custom:last-child > div{
  padding-bottom: 0 !important;
}
@media (max-width:1023px)  {
    .pe-24 {
    -webkit-padding-end: 3rem !important;
    padding-inline-end: 3rem !important;
}
  }
</style>