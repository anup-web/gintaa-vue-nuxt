<template>
 
  <div>
    <div class="flex items-center">
      <div class="flex items-center bg-[#F2F2F2] w-[125px] rounded-full px-3 py-1">
          <svg 
            v-for="(number,index) in 5"
            :key="index"
              @click="setItemRating(index)" 
              @mouseover="onHoverItemrating(index)" 
              @mouseleave="onHoverItemrating(-1)" 
              :class="hoverStarIndex >= index ? 'text-yellow-500' : rating >= index ? 'text-yellow-500' : ''" 
              class="w-5 h-5 text-gray-500" 
              viewBox="0 0 20 20" 
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
      </div>

      <!-- For Food -->
      <div 
        v-if="ratingFor === 'FOOD'"
        :class="hoverStarIndex >= 0 ? ratingGrade[hoverStarIndex].color : rating >= 0 ? ratingGrade[rating].color : 'text-[#00C5FF]'"
        class="text-sm font-medium flex ml-4">
          {{hoverStarIndex >= 0 ? ratingGrade[hoverStarIndex].grade : rating >= 0 ? ratingGrade[rating].grade : ''}}
          <!-- {{ hoverStarIndex >= 0 ? 'text-['+ratingGrade[hoverStarIndex].color+']' : rating >= 0 ? 'text-['+ratingGrade[rating].color+']' : 'text-[#00C5FF]' }} -->
      </div>


    </div>

    <!-- For Restaurant -->
    <div 
      class="w-full flex items-center justify-center">
        <div
          v-if="ratingFor === 'RESTAURANT'" 
          :class="hoverStarIndex >= 0 ? ratingGrade[hoverStarIndex].color : rating >= 0 ? ratingGrade[rating].color : 'text-[#00C5FF]'"
          class=" text-sm font-medium">
          {{hoverStarIndex >= 0 ? ratingGrade[hoverStarIndex].grade : rating >= 0 ? ratingGrade[rating].grade : ''}}
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({ 
  name: 'Ratingstar',
  props: ["foodListingId", 'ratingFor'],
  data () {
    return {
      hoverStarIndex: -1,
      rating: -1,      
      ratingGrade: [
          {
              color: 'very-bad',//'#E12025',
              grade: 'Very Bad'
          },
          {
              color: 'bad',//'#F47950',
              grade: 'Bad'
          },
          {
              color: 'good',//'#FCB040',
              grade: 'Good'
          },
          {
              color: 'very-good',//'#91CA61',
              grade: 'Very Good'
          },
          {
              color: 'excellent',//'#3AB54A',
              grade: 'Excellent'
          },
      ],
    }
  },
  mounted(){ 
  },
  methods:{
    setItemRating(index: number){
      this.rating = index
      const returnObjt = {
        rating: this.rating,
        foodListingId: this.foodListingId,
        ratingFor: this.ratingFor
      }
      this.$emit("selectedRating", returnObjt);
    },
      
    onHoverItemrating(index: number){            
      this.hoverStarIndex = index
      
      const returnObjt = {
        rating: this.hoverStarIndex,
        foodListingId: this.foodListingId,
        ratingFor: this.ratingFor
      }
      this.$emit("hoverRating", returnObjt);
    }

  }


})

</script>



<style>
.fav-color path{
  fill:#EE2a7b !important;
}
.very-bad {
  color: #E12025 !important;
}
.bad {
  color: #F47950 !important;
}
.good {
  color: #FCB040 !important;
}
.very-good {
  color: #91CA61 !important;
}
.excellent {
  color: #3AB54A !important;
}
</style>

