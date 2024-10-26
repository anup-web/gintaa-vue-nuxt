<template>
  <div class=" container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-10">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-2 text-xsb font-normal">
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center text-xsb text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
            <svg class="mr-0.5 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>

          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <a href="#" class="ml-0.5   text-gray-500 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white">Apparel & Accessories</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <a href="#" class="ml-0.5   text-gray-500 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white">Clothing</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <span class="ml-0.5  font-medium text-gray-700  dark:text-gray-500">Shirts</span>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Breadcrumb'
})
</script>
