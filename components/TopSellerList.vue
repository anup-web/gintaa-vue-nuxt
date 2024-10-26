<template>
  <div class="shipment-tracking-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16 pt-10 hidden md:flex">
      <breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <div class="container max-w-8xl mx-auto  sm:px-4 md:px-8 2xl:px-16 pt-5">
      <div class="mx-auto pb-14">
        <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 class="section-title text-gray-600 text-base md:text-2xl font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5 before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5 after:top-4 after:-right-14">
            <span class=""> Top seller </span>
          </h3>
          <span class="block text-gray-400 text-sm font-normal"
            >Lorem Ipsum is simply dummy text</span>
        </div>

        <div class="px-4 grid grid-cols-2 sm:grid-cols-2 sm:px-0 md:grid-cols-3 md:px-0 lg:grid-cols-4 lg:px-0 xl:grid-cols-5 xl:px-0 2xl:grid-cols-5 2xl:px-0 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
          <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>

             <div class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">
                  <div class="flex items-center justify-center">
                       <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                       alt="image" class="w-40 h-40 rounded-full"/>
                  </div>
                  <div class="flex items-center justify-center mt-2"><span class="text-sm text-center text-gray-700 font-medium">Harikrishnan M S</span></div>
                  <div class="flex items-center justify-center mt-1">
                    <div class="text-gray-600 flex items-center ">
                          <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> 
                          <span class="pl-1 font-medium text-[11px]">4.2</span></div>
                  </div>
                  <div class="flex items-center justify-center mt-1"><span class="text-sm text-center text-gray-700">68 followers</span></div>
                  <div class="flex items-center justify-center mt-2">
                    <a href="#" class="text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border-firoza border mb-0 " >
                               <span>Follow</span>  </a>
                  </div>
             </div>
        </div>
      </div>
    </div>


   
    <!--footer section goes here-->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AllCoupons",
  
});
</script>

<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus ~ label,
input[type="email"]:focus ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
input[type="email"]:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value=""]):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input[type="text"]:focus ~ label,
input[type="email"]:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}
</style>
