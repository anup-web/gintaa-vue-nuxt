<template>
<div class="flex justify-center ml-5">

  <div v-for="(filterObject, index) in filterObjects" :key="filterObject.name + index" >
  <form class="">
  <div v-if="filterObject.type ==='sortfilter'" class="mb-0 min-w-[160px]">
    <div class="space-y-3">
                <div class="relative" @click="showDropdown(filterObject.showFilter)" >
                  <button
                    id="headlessui-listbox-button-4"
                    class="border border-gray-300 text-gray-500 text-[12px] md:text-[12px] font-normal relative w-full py-2 px-3  text-left bg-white rounded  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="filterObject.showFilter=!filterObject.showFilter"
                  >
                    <span class="block truncate">{{ filterObject.filters.filter(el => el.selected).length > 0 ? filterObject.filters.filter(el => el.selected)[0].name : `${filterObject.name} By` }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pe-2 pointer-events-none">
<svg width="12" class="mr-1" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L6 6.5L11 1.5" stroke="#BEC3CD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </span> 
                  </button>
                  <ul v-show="filterObject.showFilter" class="z-20 absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                    <li v-for="filter of filterSortObj(filterObject.filters)" :key="filter.name" class=" text-gray-500 text-[12px] py-2 pl-10 pr-4 cursor-pointer hover:bg-gray-100" @click="dropdownFilter(filterObject, filter); filterObject.showFilter = false">
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
                      <span v-if="filter.show">{{ filter.name }}</span>
                    </li>
                  </ul>
                </div>
              </div>
  </div>
  </form>
</div>
</div>
</template>
<script>
import Slider from '@vueform/slider/dist/slider.vue2'

export default {
  name: 'SearchUpperbarFilter',
  components: {
    Slider
  },
  props: ['filterObjects','clicked'],
  data () {
    return {
      showMoretags: false,
      value: [20, 40],
      totalSlectedObj :[]
    }
  },
  computed: {
    // selectedFiltersLength () {
    //   let count = 0
    //  this.totalSlectedObj = []
    //   this.filterObjects.map((filterObject) => {
    //     filterObject.filters.map((el) => {
    //       if (el.selected) {
    //         count++
    //         this.totalSlectedObj.push(el)
    //       }
    //       return el
    //     })
    //   })

    //   return count
    // }
  },
  mounted(){
 
  },
  methods: {

    filterSortObj(sortFilterList){
     return sortFilterList.filter((item) => item.show);
    },

    applyFilter () {
      this.$emit('applyFilter', this.getSearchParams() , this.getSortBy())
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },

    showDropdown(isDropDownOpen){
     // console.log("isDropDownOpen",isDropDownOpen)
      this.$emit('isDropDownOpen', isDropDownOpen)
    },

    dropdownFilter (filterObject, filter) {
        filterObject.filters.map((el) => {
        el.selected = filter.name === el.name
        return el
      })
      this.applyFilter()
    },

     getSearchParams () {
      const obj = []

      for (const filterObj of this.filterObjects) {
        const selectedFilter = filterObj.filters.filter(filter => filter.selected).map(filter => filter.value)
        if (selectedFilter.length > 0) {
          if (filterObj.type === 'checkbox') {
            obj.push(`${filterObj.paramName}_${selectedFilter.join('|')}`)
          } else if (filterObj.type === 'dropdown') {
            obj.push(`${filterObj.paramName}_${selectedFilter.join('|')}`)
          }else if ( filterObj.type === 'radio'){
            obj.push(`${filterObj.paramName}_${selectedFilter[0]}`)
          }else if ( filterObj.type === 'sortfilter'){
            this.getSortBy()
          }
        }
      }

      // for slider filter
      const sliderFilters = this.filterObjects.filter(filter => filter.type === 'slider')
      if (sliderFilters.length > 0) {
        for (const filterObj of sliderFilters) {
          if (filterObj.selectedRange[0] !== filterObj.range.minValue || filterObj.selectedRange[1] !== filterObj.range.maxValue) {
            obj.push(`${filterObj.paramName}_${filterObj.selectedRange[0]}::${filterObj.selectedRange[1]}`)
          }
        }
      }
      return {
        f: obj.join('~')
      }
    },

   getSortBy () {
      const obj = []
      for (const filterObj of this.filterObjects) {
        const selectedFilter = filterObj.filters.filter(filter => filter.selected).map(filter => filter.value)
        if (selectedFilter.length > 0) {
          if (filterObj.type === 'checkbox') {
            obj.push(`${filterObj.paramName}_${selectedFilter.join('|')}`)
          } else if (filterObj.type === 'dropdown') {
            obj.push(`${filterObj.paramName}_${selectedFilter.join('|')}`)
          }else if ( filterObj.type === 'radio'){
            obj.push(`${filterObj.paramName}_${selectedFilter[0]}`)
          }else if ( filterObj.type === 'sortfilter'){
           // console.log("selectedFilter",selectedFilter)
             if(selectedFilter[0] === 'relevance'){
            return ''
           }else{
            return  `&sort=${selectedFilter[0]}` 
           }
         //   return  `&sort=${selectedFilter[0]}`
          }
        }else{

        }
      }
    }

  }
}
</script>
<style src="@vueform/slider/themes/default.css"></style>
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