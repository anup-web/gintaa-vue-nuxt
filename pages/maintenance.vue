<template lang="html">
    <div class="h-screen bg-[#fff] w-full flex items-center maintanance">

        <div class="flex justify-center w-full flex-col">
            <div class="p-5 w-full text-center">
                <img src="~/assets/images/under-maintenance.png" alt="under-maintenance" class=" mx-auto block max-w-[100%] "/>
                <!-- <svg class="mx-auto" width="206" height="206" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M306 267.945C306 288.96 288.966 305.998 267.954 305.998H38.0574C17.0409 305.998 0.0012207 288.96 0.0012207 267.945V38.055C0.0012207 17.0402 17.0409 0.00231934 38.0574 0.00231934H267.954C288.966 0.00231934 306 17.0402 306 38.055V267.945Z" fill="#8EC23C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M150.051 145.576C136.64 145.576 124.179 149.641 113.826 156.603L144.559 175.897V186.567C146.326 186.163 148.161 185.93 150.051 185.93C163.65 185.93 174.682 196.959 174.682 210.567C174.682 224.167 163.65 235.196 150.051 235.196C136.449 235.196 125.423 224.167 125.423 210.567C125.423 203.424 128.479 197.011 133.334 192.51C119.313 189.653 106.579 183.274 96.0944 174.328C89.1238 184.681 85.0547 197.149 85.0547 210.567C85.0547 246.458 114.156 275.558 150.051 275.558C185.946 275.558 215.046 246.458 215.046 210.567C215.046 174.676 185.946 145.576 150.051 145.576Z" fill="#CAFC9D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M225.097 111.051C225.097 152.5 191.495 186.094 150.048 186.094C108.602 186.094 75 152.5 75 111.051C75 69.6056 108.602 36.0018 150.048 36.0018C191.495 36.0018 225.097 69.6056 225.097 111.051Z" fill="#CAFC9D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M212.275 55.8826C221.055 55.5827 228.118 44.8322 228.118 36.0018H185.945C196.012 40.827 204.947 47.6254 212.275 55.8826Z" fill="#CAFC9D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M150.052 145.576C130.501 145.576 112.98 154.216 101.066 167.879C113.687 178.763 129.958 185.522 147.81 186.046C148.547 185.973 149.296 185.93 150.052 185.93C150.807 185.93 151.555 185.973 152.296 186.046C170.142 185.522 186.42 178.766 199.036 167.879C187.123 154.216 169.602 145.576 150.052 145.576Z" fill="#FCF5FF"/>
                </svg> -->

                <!-- <img src="~/assets/images/under-maintenance.png"  class="rounded-full mx-auto block max-w-[100%] w-[150px]"/> -->
            <!-- <p class="text-[50px] text-[#dc2f03] font-bold pt-5">We'll Be Right Back</p>
            <p class="text-[24px] text-black pt-4">Sorry, we are down for maintenance </p> 
                <p class=" block text-[24px] text-black">but will be back at  <span class="font-bold">05:00 pm</span></p> -->
            </div>
        </div>

    </div>
</template>
<script>
export default {
    mounted: function () {
        console.log(this.$route.path)
    }
}
</script>
<style lang="css" scoped >
body, html {
  height: 100%;
  width: 100%;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1em;
}
.maintenance h1 {
  font-size: 190%;
  color: #fff;
  text-shadow: -2px 2px 3px rgba(0,0,0,0.5);
  color: #d6336c;
  text-align: center;
}
.maintenance {
  /* width: 200px; */
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  fill: #d6336c;
}
.content {
  height: 100%;
  width: 100%;
  background-color: #5471B9;
}
/* .maintanance{
    background: url(~/assets/images/logo-maintain.png) repeat;
} */
</style>