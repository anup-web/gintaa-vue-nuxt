<template>
  <div class="w-full flex flex-col mb-3 px-4">
    <div class="flex w-full text-gray-700 text-sm">
      Choose gintaa store
    </div>

    <client-only>
      <div class="flex w-full py-3">
        <GmapMap
          ref="mapRef"
          :center="{lat:22.569, lng:88.3522219}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 650px; height: 300px"
        >
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            :clickable="false"
            :draggable="false"
            @click="center=m.position"
          />
        </GmapMap>
      </div>
    </client-only>

    <div class="w-full  py-3">
      <div id="carouselJunction" class="carousel slide relative" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="false">
        <div class="carousel-inner rounded-lg relative w-full cursor-grab active:cursor-grabbing overflow-hidden px-10">
          <div v-for="(junction, index) in junctions" :key="junction.id" :class="[junction.selected || (!selectedId && index == 0) ? 'active' : '', 'carousel-item relative float-left w-full']" @click="selectJunction(junction)">
            <div :class="[junction.selected ? 'bg-firoza' : 'bg-slate-400', 'w-full px-5 py-3 rounded-lg shadow']">
              <div class="text-base text-white">
                {{ junction.name }}
              </div>
              <div class="text-sm text-white">
                {{ junction.address }}
              </div>
              <div v-if="junction.minOpenTime && junction.maxCloseTime" class="text-sm text-white">
                Time {{ junction.minOpenTime.format('HH:mm A') }} to {{ junction.maxCloseTime.format('HH:mm A') }}
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-control-prev opacity-100 absolute top-0 bottom-0 flex items-center -left-[34px] justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline ">
          <button
            id="prevBtn"
            type="button"
            data-bs-target="#carouselJunction"
            data-bs-slide="prev"
            class="carousel-control-prev-icon rounded fill-black bg-white
    bg-no-repeat flex justify-center items-center shadow"
            aria-hidden="true"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 18L8 12L14 6" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <span class="visually-hidden">Previous</span>
        </div>
        <div
          class="carousel-control-next opacity-100 absolute top-0 bottom-0 -right-[34px] flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
        >
          <button
            id="nextBtn"
            type="button"
            class="carousel-control-next-icon rounded fill-black
    bg-white bg-no-repeat flex justify-center items-center shadow"
            data-bs-target="#carouselJunction"
            data-bs-slide="next"
            aria-hidden="true"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 18L16 12L10 6" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <span class="visually-hidden">Next</span>
        </div>
      </div>
    </div>

    <div v-if="selectedJunction">
      <div class="flex w-full text-gray-700 text-sm mt-5">
        Suggest meeting time
      </div>
      <div class="flex items-center gap-8 mt-3">
        <div class="relative z-0 w-44">
          <date-picker
            id="date"
            v-model="date"
            placeholder="Date(dd/mm/yyyy)"
            :format="$config.format.date"
            :disabled-date="disabledDate"
            :clearable="false"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
            @input="onDateTimeChange"
          />
        </div>

        <div class="relative z-0 w-32">
          <date-picker
            id="time"
            v-model="time"
            placeholder="Time(hh:mm am)"
            :format="$config.format.time"
            :clearable="false"
            type="time"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
            @input="onDateTimeChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default Vue.extend({
  name: 'GintaaJunction',
  components: {
    DatePicker
  },
  props: ['selectedId'],
  data () {
    return {
      junctions: [],
      date: null,
      time: null,
      error: null,
      markers: [
        {
          position: { lat: 22.569, lng: 88.3522219 }
        }
      ]
    }
  },
  computed: {
    selectedJunction () {
      return this.junctions.filter(j => j.selected).length > 0
    }
  },
  mounted () {
    this.getAllJunctions()
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({ lat: 1.38, lng: 103.80 })
    // })
  },
  methods: {
    disabledDate (date) {
      if (date.getTime() <= new Date().getTime()) {
        return true
      }
    },
    onDateTimeChange () {
      this.error = null
      if (this.date && this.time) {
        const date = this.$moment(this.date)
        const time = this.$moment(this.time)
        console.log(date.format('YYYYMMDD'))
      }
    },
    async getAllJunctions () {
      // this.$moment(this.offer.dealSentTimeStamp).add(this.$config.timeOffset, 'minutes').format(' MMMM D , YYYY, h:mm:ss a')
      const url = '/deals/v1/deals/junctions/all'
      const data = await this.$axios.$get(url)
      if (data.payload.length > 0) {
        this.junctions = data.payload.map((junction) => {
          junction.selected = this.selectedId === junction.id
          let minOpenTime = null
          let maxCloseTime = null

          for (const key of Object.keys(junction.junctionTimings)) {
            const timeVal = junction.junctionTimings[key]
            const openTimeLocale = this.$moment(timeVal.openTime, 'HH:mm:ss').add(this.$config.timeOffset, 'minutes')
            const closeTimeLocale = this.$moment(timeVal.closeTime, 'HH:mm:ss').add(this.$config.timeOffset, 'minutes')

            junction.junctionTimings[key].openTimeLocale = openTimeLocale
            junction.junctionTimings[key].closeTimeLocale = closeTimeLocale

            // always last date value
            minOpenTime = openTimeLocale
            maxCloseTime = closeTimeLocale
          }

          junction.minOpenTime = minOpenTime
          junction.maxCloseTime = maxCloseTime

          return junction
        })

        // if (!this.selectedId) {
        //   this.junctions[0].selected = true
        // }
      }
    },
    selectJunction (junction) {
      this.junctions = this.junctions.map((j) => {
        j.selected = junction.id === j.id
        return j
      })

      const newPos = { lat: junction.latitude, lng: junction.longitude }
      this.markers[0].position = newPos
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo(newPos)
      })

      this.$emit('onSelectJunction', junction)
    }
  }
})

</script>

<style scoped>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
  }

</style>
