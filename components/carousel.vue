<template>
  <div v-if="showCauroselModal"  class="fixed  bg-gray-800/[.5] z-50 inset-0 overflow-y-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end my-[80px] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all align-middle  max-w-xl w-full">
        <div id="carouselExampleCaptions" class="carousel relative" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="false">
          <!-- <button id="zoom-in" type="button" class="absolute z-[1] top-0 right-[40px] inline-flex rounded-md border border-transparent shadow-sm px-2 py-2 bg-white text-base font-medium text-black hover:bg-white-700  sm:ml-3 sm:w-auto sm:text-sm" @click="checkZoomIn()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </button>

          <button id="zoom-in" type="button" class="absolute z-[1] top-0 right-[80px] inline-flex rounded-md border border-transparent shadow-sm px-2 py-2 bg-white text-base font-medium text-black hover:bg-white-700  sm:ml-3 sm:w-auto sm:text-sm" @click="checkZoomOut()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button> -->

          <button id="close-btn" @click="closeModal" type="button" class="absolute z-[1] top-0 right-0 inline-flex rounded-md border border-transparent shadow-sm px-2 py-2 bg-white text-base font-medium text-black hover:bg-white-700  sm:ml-3 sm:w-auto sm:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
      
      <!-- Start Images Listing For Left Bar Panel -->
          <div class="carousel-indicators absolute left-0 top-0 justify-left p-0 m-0 overflow-y-auto overflow-x-hidden h-full ">
            <div   v-for="(item,index) in listingImages.images" :key="index" v-on:click="viewImage(index)" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="`${index}`"  :class="{ 'active': index === selectedImageIndex }" class="!w-[40px] !h-[40px] !mx-2  my-2 left-panel-thumb" aria-current="true" aria-label="Slide 1">
              <img
                :src="item.url"
                class="w-[40px] h-[40px] object-contain"
                alt="..."
              >
            </div>
          </div>
           <!-- End Images Listing For Left Bar Panel -->


          <!-- <div v-dragscroll class="carousel-inner rounded-lg relative  cursor-grab active:cursor-grabbing overflow-hidden" @touchstart="touchStartMethod" @touchend="touchEndMethod"> -->
          <div id="carWidth" class="carousel-inner rounded-lg relative  cursor-all-scroll overflow-hidden">
            <div v-for="(item,index) in listingImages.images" :key="index" :class="{ 'active': index === selectedImageIndex }" class="carousel-item mainImage   h-[80vh]  relative ">
              <img
                :id="'img-'+index"
                :src="item.url"
                class="block w-full"
                alt="..."
                @mousemove="moveImage($event)"
              >
            </div>
         
          </div>
          <div v-if="listingImages.images.length > 1"
            class="carousel-control-prev opacity-100 absolute top-0 bottom-0 flex items-center -left-[100px] justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
          >
            <button
              id="prevBtn"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
              class="carousel-control-prev-icon rounded-full fill-black bg-white w-[80px] h-[80px] inline-block bg-no-repeat w-[80px] h-[80px] fill-black"
              aria-hidden="true"
            >
              <svg width="80" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20Z" fill="#000000" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 12.2929C21.0976 12.6834 21.0976 13.3166 20.7071 13.7071L14.4142 20L20.7071 26.2929C21.0976 26.6834 21.0976 27.3166 20.7071 27.7071C20.3166 28.0976 19.6834 28.0976 19.2929 27.7071L12.2929 20.7071C11.9024 20.3166 11.9024 19.6834 12.2929 19.2929L19.2929 12.2929C19.6834 11.9024 20.3166 11.9024 20.7071 12.2929Z" fill="#000000" />
              </svg>
            </button>
            <span class="visually-hidden">Previous</span>
          </div>
          <div v-if="listingImages.images.length > 1"
            class="carousel-control-next opacity-100 absolute top-0 bottom-0 -right-[100px] flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
          >
            <button
              id="nextBtn"
              type="button"
              class="carousel-control-next-icon rounded-full fill-black bg-white w-[80px] h-[80px] inline-block bg-no-repeat"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
              aria-hidden="true"
            >
              <svg width="80" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28 20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20Z" fill="#000000" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 27.7071C18.9024 27.3166 18.9024 26.6834 19.2929 26.2929L25.5858 20L19.2929 13.7071C18.9024 13.3166 18.9024 12.6834 19.2929 12.2929C19.6834 11.9024 20.3166 11.9024 20.7071 12.2929L27.7071 19.2929C28.0976 19.6834 28.0976 20.3166 27.7071 20.7071L20.7071 27.7071C20.3166 28.0976 19.6834 28.0976 19.2929 27.7071Z" fill="#000000" />
              </svg>
            </button>
            <span class="visually-hidden">Next</span>
          </div>
        </div>
      <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import 'node-self'
import { dragscroll } from 'vue-dragscroll'

export default Vue.extend({
  name: 'Slides',
  props: ['listingImages','selectedImageIndex','showCaurosel'],
  directives: {
    dragscroll
  },
  data () {
    return {
      showCauroselModal:false,
      zoomed: false,
      touchendX: 'number',
      touchendY: 'number',
      touchstartX: 'number',
      touchstartY: 'number'
    }
  },
  mounted () {
    // let zoomed = false;
    console.log("listingImages",this.listingImages,this.selectedImageIndex,this.showCaurosel)
    this.showCauroselModal = this.showCaurosel

    const modal = document.getElementById('icon-modal');
    const btn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    let zoomIn = document.getElementById("zoom-in");

  //  modal.style.display = 'none'

    // btn.onclick = function (index) {
    //   console.log("------------------------------",index)
    //   modal.style.display = 'block'
    // },

    // closeBtn.onclick = function () {
    //   modal.style.display = 'none'
    // }
  },
  
  // created () {
  //   this.$on('imageIndex', (section:any) => {
  //    console.log("section",section)
  //   })
  // },
  methods: {
    closeModal(){
    this.showCauroselModal = false
    this.$emit("closeCarsouselModal", true);

    },
    checkZoomIn () {

      //console.log(document.querySelectorAll('.mainImage').length);

      let mainImage =  document.querySelectorAll('.mainImage');

      //console.log(a);

      for(var i=0; i< mainImage.length;i++){
        if(mainImage[i].classList.contains('active')){
          //console.log("bbb");
          if (mainImage[i].firstChild.classList.contains('scale-100')) {
            mainImage[i].firstChild.classList.replace('scale-100', 'scale-110')
            this.zoomed = true
          } else if (mainImage[i].firstChild.classList.contains('scale-110')) {
            mainImage[i].firstChild.classList.replace('scale-110', 'scale-125')
            this.zoomed = true
          } else if (mainImage[i].firstChild.classList.contains('scale-125')) {
            mainImage[i].firstChild.classList.replace('scale-125', 'scale-150')
            this.zoomed = true
          } else if (mainImage[i].firstChild.classList.contains('scale-150')) {
            mainImage[i].firstChild.classList.replace('scale-150', 'scale-[2.0]')
            this.zoomed = true
            // console.log("aaa");
          }
        }
      }

      // const zoomBtn = document.getElementById('img-1');
      // // this.zoomed = false;
      // if (zoomBtn.classList.contains('scale-100')) {
      //   zoomBtn.classList.replace('scale-100', 'scale-110')
      //   this.zoomed = true
      // } else if (zoomBtn.classList.contains('scale-110')) {
      //   zoomBtn.classList.replace('scale-110', 'scale-125')
      //   this.zoomed = true
      // } else if (zoomBtn.classList.contains('scale-125')) {
      //   zoomBtn.classList.replace('scale-125', 'scale-150')
      //   this.zoomed = true
      // } else if (zoomBtn.classList.contains('scale-150')) {
      //   zoomBtn.classList.replace('scale-150', 'scale-[2.0]')
      //   this.zoomed = true
      //   // console.log("aaa");
      // }
    },

    checkZoomOut () {


      console.log(document.querySelectorAll('.mainImage').length);

      let mainImage =  document.querySelectorAll('.mainImage');

      //console.log(a);

      for(var i=0; i< mainImage.length;i++){
        if(mainImage[i].classList.contains('active')){
          //console.log("bbb");
          if (mainImage[i].firstChild.classList.contains('scale-150')) {
            mainImage[i].firstChild.classList.replace('scale-150', 'scale-125')
            this.zoomed = true
          } else if (mainImage[i].firstChild.classList.contains('scale-125')) {
            mainImage[i].firstChild.classList.replace('scale-125', 'scale-110')
            this.zoomed = true
          } else if (mainImage[i].firstChild.classList.contains('scale-110')) {
            mainImage[i].firstChild.classList.replace('scale-110', 'scale-100')
            this.zoomed = true
          } else if (mainImage[i].firstChild.classList.contains('scale-[2.0]')) {
            mainImage[i].firstChild.classList.replace('scale-[2.0]', 'scale-150')
            this.zoomed = true
            // console.log("aaa");
          }
        }
      }






      // const zoomBtn = document.getElementById('img-1');
      // if (zoomBtn.classList.contains('scale-150')) {
      //   zoomBtn.classList.replace('scale-150', 'scale-125')
      //   this.zoomed = true
      // } else if (zoomBtn.classList.contains('scale-125')) {
      //   zoomBtn.classList.replace('scale-125', 'scale-110')
      //   this.zoomed = true
      // } else if (zoomBtn.classList.contains('scale-110')) {
      //   zoomBtn.classList.replace('scale-110', 'scale-100')
      //   this.zoomed = false
      // } else if (zoomBtn.classList.contains('scale-[2.0]')) {
      //   zoomBtn.classList.replace('scale-[2.0]', 'scale-150')
      //   this.zoomed = true
      // }
    },
    touchStartMethod (touchEvent) {
      this.touchstartX = touchEvent.changedTouches[0].screenX
      this.touchstartY = touchEvent.changedTouches[0].screenY
      // console.log(touchstartX);
    },
    touchEndMethod (touchEvent) {
      this.touchendX = touchEvent.changedTouches[0].screenX
      this.touchendY = touchEvent.changedTouches[0].screenY
      console.log(this.zoomed)

      if (!this.zoomed) {
        this.handleGesture()
      }
    },
    handleGesture () {
      // console.log(typeof this.touchendX);

      // if(typeof this.touchendX === "number")

      if (this.touchendX < this.touchstartX) {
        const nxt = document.getElementById('nextBtn');
        nxt.click()
        // console.log('Swiped Left');
      } else if (this.touchendX > this.touchstartX) {
        const prev = document.getElementById('prevBtn');
        prev.click()
      // console.log('Swiped Right');
      }

      // if (this.touchendY < this.touchstartY) {
      //     console.log('Swiped Up');
      // }

      // if (this.touchendY > this.touchstartY) {
      //     console.log('Swiped Down');
      // }

    // if (this.touchendY === this.touchstartY) {
    //     console.log('Tap');
    // }
    },
    
    
    moveImage(event){
   
      var width = event.target.clientWidth;
      var height = event.target.clientHeight;

     

      

      var modalWidth = document.getElementById('carWidth').clientWidth;
      var modalHeight = document.getElementById('carWidth').clientHeight;

      var md = document.getElementById('carWidth').getBoundingClientRect();


      

      var xPos = event.clientX - md.left;

      if(xPos < 85){
         xPos = 0;
      }

      //console.log(height);
      //console.log(md.top);

      //console.log(x);

       if(height > modalHeight){
         //console.log(height-modalHeight);
        // console.log(event.clientY);
         if((event.clientY - md.top) <= (height-modalHeight)){
           if(event.clientY > 700){
             var yPos = height-modalHeight;
           }else{
             var yPos = event.clientY - md.top;
           }
           //var y = event.clientY - md.top;
           
         }else{
           var yPos = height-modalHeight;
           
         }
       }else{
          var yPos = 0;
       }
      

     

     

       //console.log(x,y);

        event.target.style.transform = "translate(" + (-xPos) +"px," + (-yPos) + "px)";
        

      

      
    },
    viewImage(index){
     console.log("index",index)
    }
  }
})

</script>

<style scoped>
.left-panel-thumb{
  border: 1px solid rgba(0,0,0,.8);
  padding: 5px;

}

.left-panel-thumb.active{
  border: 1px solid #48CEF3;
}

.mainImage{
  line-height:80vh;
  /* overflow: hidden; */
  /* display: none; */
}

/* .mainImage.active{
  display: block;
} */

.mainImage img{
  transition: all 1s;
  vertical-align: middle;
  /* display: inline-block; */
  
}



</style>
