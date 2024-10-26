<template>
<nav aria-label="Progress">
  <ol role="list" class="flex items-center">
    <li class="relative pr-14 sm:pr-40">
      <!-- Completed Step -->
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-green"></div>
      </div>
      <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-green rounded-full hover:bg-indigo-900">
        <!-- Heroicon name: solid/check -->
        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Step 1</span>
      </a>
      <span class="hidden md:inline-block  absolute left-[-15px] text-xs text-gray-500">Upload Images</span>
      <span class="md:hidden absolute left-0 text-xs text-gray-500">Step 1</span>
    </li>

    <li class="relative pr-14 sm:pr-40">
      <!-- Completed Step -->
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-green"></div>
      </div>
      <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-green rounded-full hover:bg-indigo-900">
        <!-- Heroicon name: solid/check -->
        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Step 2</span>
      </a>
      <span class="hidden sm:inline-block  absolute text-center left-[-25px] text-xs text-gray-500">Basic product info</span>
      <span class="sm:hidden absolute left-0 text-xs text-gray-500">Step 2</span>
    </li>

    <li class="relative pr-14 sm:pr-40">
      <!-- Current Step -->
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-gray-200"></div>
      </div>
      <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-firoza rounded-full" aria-current="step">
        <span class="h-2.5 w-2.5 bg-firoza rounded-full" aria-hidden="true"></span>
        <span class="sr-only">Step 3</span>
      </a>
      <span class="hidden sm:inline-block absolute left-[-40px] text-xs text-gray-500">Product attribute and tags</span>
      <span class="sm:hidden absolute left-0 text-xs text-gray-500">Step 3</span>
    </li>

   

    <li class="relative">
     
      <!-- <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-gray-200"></div>
      </div> -->
      <a href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
        <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"></span>
        <span class="sr-only">Step 5</span>
      </a>
      <span class="hidden sm:inline-block absolute left-[-10px] whitespace-nowrap text-xs text-gray-500">What I want</span>
      <span class="sm:hidden absolute left-0 whitespace-nowrap text-xs text-gray-500">Step 4</span>
    </li>
  </ol>
</nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>