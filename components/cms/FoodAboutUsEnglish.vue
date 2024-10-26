<template>
             <div>
            <h1 v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">About Us</h1>

            <div class="term-para text-sm text-gray-600">
                <p class="mb-6 leading-6">
                  After being able to make an indelible mark for providing people with inexpensive, reliable, and convenient shopping experiences successfully, gintaa has decided to spread its wings in the food industry. gintaa has now expanded its offerings to include gintaa food. 
                  gintaa Food offers an online food ordering platform connecting urban foodies with existing neighborhood partner restaurants, who are best in their own way, benefitting both. So next time you think of escaping the modern-day traffic for your favorite food, gintaa food comes to your rescue every time!
                </p>
                <div class="term-para text-sm text-gray-600 font-bold mb-6">Intention of Ideation:</div>
                <p class="mb-6 leading-6">
                  Our goal is to provide a platform where restaurants can easily list themselves and get their best-selling, signature delicious dishes highlighted, while also allowing users to order their favorite foods at the lowest possible food price available online. At the same time, gintaa food’s key selling point is that it is designed to provide foodies with an impeccable experience when it comes to discovering, ordering, and enjoying their favorite dishes from local restaurants.
                </p>
            
                <p class="mb-6 leading-6">
                  Our platform allows restaurants to easily list themselves and add their menus hassle-free while being assisted by the gintaa food team at every step. We also offer to charge the lowest commissions in the industry, and no additional charges for top listings or other hidden charges. Where we solely want restaurants to focus on preparing and serving mouth-smacking food without worrying about draining their profits.
                </p>

                <p class="mb-6 leading-6">
                    For food lovers, our platform is the perfect way to discover new restaurants and different cuisines while also getting the best value for their money. gintaa Food is looking forward to capturing the food industry in terms of the customer impact metric. It enables you to place one-serve orders without incurring any additional charges. We also offer a wide selection of cuisines and dishes to choose from, with prices that are often lower than what you would find in the restaurant itself.
                 </p>
                <p class="mb-6 leading-6">Restaurants and Food lovers both can derive benefits from our platform!</p>
                
                <div class="term-para text-sm text-gray-600 font-bold mb-6">Benefits for Restaurants:</div>
                <ul>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Lowest commission
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Maximum Profits
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Superfast credit payout
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Serve to all nearby locations
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Increase your reach
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Enhance the brand visibility
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Easy Payment Gateway options
                  </li>
                </ul>

                <div class="term-para text-sm text-gray-600 font-bold mb-6 mt-2">Benefits for Foodies:</div>
                <ul>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Lowest Food Price Online
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Good Quality food
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       No cutting in portion
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Pick up food on your way to your destination
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Epic Discounts on every order
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Late Night Delivery 
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Veg/Non-Veg Items Available
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Save Bigger Amount on Every Order 
                  </li>
                  <li class="text-sm text-gray-600 pb-4 relative pl-9">
                       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                       Click a photo of gintaa food packets carrying the delivery person and upload the pic in the app and get 20/- off on the next order.
                  </li>
                  
                </ul>
            </div>


            </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FoodAboutUsEnglish',
    methods:{
    isFromWeb(){
      if(this.$route.query.fromMobileApp === null){
        return false
      }else{
        return true
      }
    }
  }
});
</script>
