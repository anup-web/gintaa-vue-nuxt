<template>
  <div>
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-2 text-xsb font-normal">
        <li class="inline-flex items-center">
          <a :href="localePath('/')" class="inline-flex items-center text-xsb text-gray-400 hover:text-gray-900">
            <svg class="mr-0.5 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          </a>
        </li>

        <li v-for="item in breadcrumb" :key="item.name">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <a :href="localePath(item.href) || 'javascript:;'" :class="[item.href ? '' : 'cursor-default', 'ml-0.5 text-gray-500 hover:text-gray-900']">{{ item.name | RemoveUnderscore | Capitalize | truncate(30, '...')}}</a>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">

import Capitalize from '../filters/Capitalize';
import RemoveUnderscore from '../filters/RemoveUnderscore';

export default {
  name: 'Breadcrumb',
  props: ['breadcrumb'],
  filters:{
    Capitalize,
    RemoveUnderscore
  },
}
</script>
