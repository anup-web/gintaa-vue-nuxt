<template>
    <button class="bg-green text-white font-bold py-1 px-3 h-10 sm:h-12 rounded w-40 sm:w-56 text-base capitalize disabled:opacity-50">
                           <slot/>
                          </button>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props: {
    onClick: {
      type: Function,
      required: false
    }
  }
})
      
</script>