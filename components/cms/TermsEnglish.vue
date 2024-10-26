<template>
  <div>
    <h1
      v-if="isFromWeb()"
      class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">
      TERMS AND CONDITIONS
    </h1>

    <div class="w-full">
      <div class="term-para flex flex-col w-full text-sm text-gray-600">        
        <p class="w-full mb-6 text-sm text-gray-600">
          Welcome to
          <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com,</a>
        </p>
        <P class="w-full mb-6 text-sm text-gray-600">gintaa is a unique trading platform providing opportunities to individual consumers to interact with each other and <span class="font-medium">Exchange</span> or <span class="font-medium">Sell</span> a wide range of products, whether in new or used conditions, based on the C2C business model. 
        </P>
        <p class="w-full mb-6 text-sm text-gray-600">
          We request you to read and understand these Terms and Conditions of Using the Website <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> and/or “gintaa Mobile App” (“Terms” / “Terms of Use”), carefully before using the <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> (“the Website”) and/or “gintaa Mobile App” powered and operated by Ascon Softech India Private Limited. (interchangeably “the Company”, "gintaa",   “us”, “we”, or “our”). These Terms apply to all visitors to the <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> and/or “gintaa Mobile App”, current and future users who wish to access <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> and/or “gintaa Mobile App” or use the website or app Service at present or in future.
        </p>
        <p class="w-full mb-6 text-sm text-gray-600">
          By accessing <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com,</a> and/or using the Service you agree to be bound by these Terms. Your access and continuity thereof to the <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com,</a> and the use thereof is subject to your explicit acceptance of and continuous compliance with these Terms. In case you choose not to accept the Terms you are at liberty to check out from <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com,</a> without any liability to us.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">DEFINITIONS</h4>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Agreement" means the instant Terms and Conditions, the Listing Policy, the Privacy Policy, the Affiliate Terms and Conditions (the "Annexures");
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Buy : Means an act of purchasing some product in lieu of cash.
          </li> 
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Buyer: Means who buys any product through www.gintaa.com  and/or “gintaa Mobile App”
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Confirmation Notice" means the notification set out in Clause 2.22;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “e-platform” means and includes “<a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a>” and/or “gintaa Mobile App” through which we presently offer our services
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Exchange” means an act of offering some product in lieu of some other products
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Exchanger: In respect of any particular product, Exchanger means any person, who offers such product for Exchange who shall be a Exchangeee as well in respect of such Exchange.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           	Exchanger: It means any person who counter offers any product under Exchange and shall be a Exchangeer as well in respect of such the product offered as a counter offer in respect of any particular Exchange.
          </li>
          
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Guidelines" means the rules framed by gintaa from time to time governing the conduct of Exchangeers, members and other users on our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Listings" means offering for Exchange through our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Member” means any person who intends to trade through our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Parties” means a joint reference to the respective Exchanges, as the case may be
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Person” means and includes natural person who is at least 18 years of age and could legally enter into a contract in India and also includes a juristic person
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Personal Data" means data about or relating to a natural person (in this case you) who is directly or indirectly identifiable, having regard to any characteristic, trait, attribute or any other feature of the identity of such natural person, whether online or offline, or any combination of such features with any other information, and shall include any inference drawn from such data for the purpose of profiling.; “Personal Data”, “your information” or “information” are used interchangeably in these Terms and all refers to the aforesaid information;
          </li>

          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Sell: Means an act of offering some product or services in lieu of cash
          </li> 
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Seller : Means a person who sells any product through <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com </a>  and/or “gintaa Mobile App
          </li>
        
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Sensitive Personal Data which may, reveal, be related to, or constitute your —
          </li>
          <ul class="list-disc ml-3 pl-12">
            <li class="mb-2 text-sm text-gray-600">financial data</li>
            <li class="mb-2 text-sm text-gray-600">health data</li>
            <li class="mb-2 text-sm text-gray-600">official identifier</li>
            <li class="mb-2 text-sm text-gray-600">sex life</li>
            <li class="mb-2 text-sm text-gray-600">sexual orientation</li>
            <li class="mb-2 text-sm text-gray-600">biometric data</li>
            <li class="mb-2 text-sm text-gray-600">genetic data</li>
            <li class="mb-2 text-sm text-gray-600">transgender status</li>
            <li class="mb-2 text-sm text-gray-600">intersex status</li>
            <li class="mb-2 text-sm text-gray-600">caste or tribe</li>
            <li class="mb-2 text-sm text-gray-600">religious or political belief or affiliation</li>
          </ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Offeror” means a person who lists and offers to Exchange or sell any products/services through our e-platform against receipt of any other products or services, with or without any further lawful consideration for such Exchange or cash
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “Offeree” means a person who accepts an offer from an offeror to Exchange any products/services  and offers any products or services and /or cash in Exchange for the same through our e-platform.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	“Trade" or "Trading" means listing of any product or services on our e-platform for Exchange or sell.   For carrying out any trading on our e-platform, you must register with us as a member in accordance with the procedure mentioned under Clause 3.3 herein below
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Transaction means an activity whereby the sale of a product is concluded by way of payment or Exchange
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
          	“User" or "Users" means and includes a member, Exchanger or someone who is otherwise surfing/accessing our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “GST" means Goods and Services Tax imposed by concerned authority on supply of any goods or services in India
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “We", “us", “our", “ourselves", “the Company” and “gintaa" or “gintaa” are used interchangeably in these Terms and all of them refer to our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            “You" or “your" means you, whether as a Exchange and/or User, their successors and permitted assigns
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Limits of Liability</h4>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You hereby agree, understand and acknowledge that the e-platform is merely a facilitator between the offeror and offeree for carrying out trade via our e-platform. There exists no contract between any user and gintaa with respect to any trade either carried out or proposed to be carried out on our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You hereby agree, understand and acknowledge that we are not involved in any sort of Exchanging of any product listed on our e-platform, and that our role is solely confined to providing a virtual platform to the parties for carrying out such trade
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	It is hereby made clear that any agreement arrived at by and between the parties regarding Exchange or sale of any product listed on our e-platform shall strictly be a bipartite agreement between the respective offeror and offeree and we gintaa shall not be a party, indemnifier, surety or confirming party to any such transactions carried out on our e-platform unless specifically agreed for at the time of conclusion of such Trade
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You hereby further agree and acknowledge that we are not the agents of any manufacturer, Exchanger or any other person entering into Trade under our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           	You hereby agree, understand and acknowledge that we have no means of ascertaining whether the Exchanger/Seller is lawful owner of the product listed on our e-platform, nor do we represent or hold out that, the product offered for Exchange or sell on our e-platform are free from any legal defect
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	We do not provide any guarantee, warrantee, surety, indemnity, confirmation or assurance about the description, quality, quantity, price, value, of any product or services listed on our e-platform; accordingly, you are requested to check description, quality, quantity, price, value, of the product of your choice before concluding any sale
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	You hereby agree, understand and acknowledge that under no circumstances, you shall hold us responsible for any loss or damage suffered by you in connection with any Trade or Transaction
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	We have  no control over, nor do we represent or hold out that respective offeror or offeree will perform their respective obligations as contemplated under Clauses (vi) and (vii) above
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            We cannot and do not guarantee, nor do we represent or hold out that any product will be delivered in good condition and within agreed time to the respective Exchangeer/Buyer by the respective offeror
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	We cannot and do not confirm the accuracy of personal information provided by the users while surfing on our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           	We cannot and do not represent or hold out that we can exercise any practical control over what feedback and/or comments might be posted regarding your activity on our e-platform, nevertheless in case of any unwanted feedback and/or comment, you can write to us at <a href="mailto:grievance@gintaa.com" class="text-firoza">grievance@gintaa.com</a>. We assure you that appropriate steps will be taken in consonance with our policy
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            We have no involvement in Exchange/sale of any product other than providing a virtual platform for such transaction, therefore we cannot and shall not accept return of any product Exchanged/purchased on our e-platform as we are not and do not act as offeror or offeree. Offerers and offerees must therefore direct all enquiries to each other, regarding but not limited to, products being defective or not fit for a particular purpose etc. 
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           	While trading on this site, you agree and acknowledge that we cannot and do not control, nor do we represent or hold out that we can or could control the conduct of the offeror and/or offeree as to the manner in which the respective offeror or offeree processes your personal information
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           While trading on our e-platform you further agree to and acknowledge that during or upon completion of the Exchange of products, we are no longer responsible for any personal information that may be Exchanged between the offeror and offeree for any or all of the purposes stipulated in Clause 2.22 of this Agreement
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           We shall not be responsible to any person for the manner in which such personal information is processed subsequent to any transaction carried out on our platform by and between the parties
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           	You hereby agree and acknowledge that we shall not be responsible to any one for any failure on the part of the offeror or offeree, as the case may be, to process such personal information in accordance with law and/or illegal transfer of any such information by the offeror or offeree to a third party
          </li>
          
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Offeror’s Obligation</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          Subject to our discretion, you may upload the details of the product/s that you intend to offer for Exchange or sell on our e-platform, and if you do so, you represent, undertake and warrant to us as well as the users of this platform that
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	The information and/or data shared with us on our e-platform (hereinafter referred to as ‘data’) is not false, deceptive, misleading and/or fraudulent
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data is not is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, paedophilic, libellous, invasive of another&#39;s privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not transmit any misleading or inaccurate and/or scandalous information pertaining to any individual or entity
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not contain viruses, malware, firmware, or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource.
          </li>
          <!-- <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not transmit any misleading or inaccurate and/or scandalous information pertaining to any individual or entity
          </li> -->
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           The product / service you offer or data you share does not belong to another person and/or to which you do not have any right, and that the same does not and cannot harm any person and particularly minors, differently abled, senior citizens, any LGBTQ person OR any animal or birds, in any manner whatsoever
          </li> 
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your product / service does not contain any confidential information and/or otherwise infringes any patent, trademark, copyright or other proprietary rights, unless you have duly obtained consent of the concerned person/s
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The product you offer for Exchange or sale on our e-platform is reasonably fit for the purpose or purposes so far as such products are commonly bought as it is reasonable to expect, having regard to matters including, without limitation, the description of those products and their value
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	You undertake and acknowledge that the product details uploaded on our e-platform shall duly correspond with the product eventually delivered to the respective offeree
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	You undertake and acknowledge that the product is not defective and is free from any encumbrances, so that the offeree may enjoy quiet and peaceful possession of those products Exchanged through our e-platforms
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The product listed  on our e-platform must be offered in due compliance with our policy and even otherwise such offer for Exchange must not be in contravention of any applicable law
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You must set out the detailed terms and conditions for Exchange of any product, including but not limited to a) whether such product is offered for Exchange/Sale in lieu of monetary consideration or any other products; b) the minimum consideration expected for Exchange of such product; c) payment terms; d) terms of delivery; e) returns policy; f) taxes & duties including GST; and g) costs payable by the one of the Parties involved in Exchange etc.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	You agree that such terms and conditions will include any matters prescribed by us under these terms as well as any matter specified in our guidelines issued from time to time
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You acknowledge and undertake that you are the sole and lawful owner of the product listed by you for Exchange on our e-platform and you have the legal capacity to conclude the transaction and to pass on the title in the product to the offeree
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You shall keep us informed about any changes pertaining to your profile information and will immediately edit your account/profile section with such updated information without any undue delay
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	You shall not post or offer for Exchange any item or material which is prohibited or restricted in any manner under the provisions of Applicable Law, and any Products that may contain ingredients that are prohibited under the Applicable Laws, including the list of prohibited items as set out in Schedule hereunder or are otherwise regulated as a controlled substance
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You shall always abide by and adhere to our Listing Policy
            </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Offerees Obligation</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          You represent, undertake and warrant to us as well as the prospective Offerors that
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
          The information and/or data shared with us on our e-platform (hereinafter referred to as ‘data’) is not false, deceptive, misleading and/or fraudulent
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not transmit any misleading or inaccurate and/or scandalous information of pertaining to any individual or entity
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not contain any viruses, worms, trojan horses or other invidious programs or data, whether attached to or embedded in other programs or data
          </li>  
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not belong to another person and/or to which you do not have any right and that the same does not harm any person or harm minors in particular in any manner whatsoever
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data does not contain any confidential information and/or otherwise infringe any patent, trademark, copyright or other proprietary rights, unless you have duly obtained consent of the concerned person/s
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Your data is not is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever
          </li>
        
        
          <!-- <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The product / service you offer or data you share does not belong to another person and/or to which you do not have any right, and that the same does not and cannot harm any person and particularly minors, differently abled, senior citizens, any LGBTQ person OR any animal or birds, in any manner whatsoever
          </li> -->
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You shall keep us informed about any changes pertaining to your profile information and will immediately edit your account/profile section with such updated information without any undue delay
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You have the legal capacity and lawful means to exchange any listed product that you intend to exchange, and, will not otherwise be breaching any law in exchanging those products
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You shall not respond to any exchange offer on this Site unless you are financially able and have sufficient means to pay requisite consideration to the offeror for executing such transaction
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You agree and acknowledge that any Exchange of any product on our e-platform is absolutely at your own risk
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Exchange Transaction</h4>
        <h5 class="text-lg text-gray-700 font-medium mb-4">Procedure</h5>
        <p class="text-sm text-gray-700 mb-4">
          The rules for carrying out Exchange on this e-platform are as follows:
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	The Exchangers shall upload details of the goods that they intend to Exchange through gintaa, which may include actual pictures or photographs of the same, subject to our listing policy
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The Exchanger shall not list any prohibited item including any item which is earmarked as essential commodities under the Essential Commodities Act, 1955 as amended from time to time including the Amendment of 2020. In case the Exchanger lists or initiates to list any Prohibited Item, the administrator of <a href="https://gintaa.com/" target="_blank" class="text-firoza">gintaa.com</a> shall remove such listing without any reference to the Exchanger.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Once a listing is created on the platform, we have our automated matching algorithm that will fetch the matches from the platform based the wishes of the Exchanger and Exchangee.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Any interested user of the platform or the ones whose desires have matched, then need to suggest an offer and counteroffer to finalise the transaction. Chat feature has also been provided in the platform so that Exchangers can directly communicate with each other.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Subject to the understanding between the parties, a transaction may be concluded after transfer of agreed consideration by and between the parties through agreed mode of delivery
          </li>
          
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           If the terms of the Exchange transaction are agreed upon or is deemed to have been agreed upon from the course of conduct of the parties, the parties are expected to complete the transaction within the time and in the manner agreed upon, save in exceptional circumstances such as the following:
          </li>
          <ul class="list-disc ml-3 pl-12">
            <li class="mb-2 text-sm text-gray-600">
              The description of the goods is materially altered following the conclusion of deal
            </li>
            <li class="mb-2 text-sm text-gray-600">
              Any of the Exchanger is unable to authenticate the identity of the other party
            </li>
            <li class="mb-2 text-sm text-gray-600">
              The Exchangers fails to deliver the goods to the offeree within the stipulated time
            </li>
          </ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If the Exchangers receives an acceptance of his offer or agrees to the counter offer put forth by the Offeree, then Exchangers is expected to accept the consideration and complete the Exchange of the goods to that offeree save in exceptional circumstances such as the following:
          </li>
          <ul class="list-disc ml-3 pl-12">
            <li class="mb-2 text-sm text-gray-600">
              The Offeree fails to deliver the agreed consideration within the stipulated time
            </li>
            <li class="mb-2 text-sm text-gray-600">
              Any of the Exchanger is unable to authenticate the identity of the other party
            </li>
          </ul>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="w-full text-lg text-gray-700 font-medium mb-4">Completion of Transaction</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
         We will notify the respective parties upon successful completion of transaction regarding Exchange of any product listed on our e-platform by automated email/messages.
        </p>
        <p class="w-full text-sm text-gray-700 mb-4">
         Upon receipt of such Confirmation Notification the parties will be individually responsible for the following matters, including, but not limited to:
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Implementation of the purchase of listed products vis-a-vis Exchange, including consensus as to the point when risk in relation to the product shall pass onto the Offeree, and when title over the product shall pass on to the Offeree
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Offeree and Exchangers shall decide between themselves the procedure for resolving any dispute arising out of any transaction carried out between them as well as jurisdiction governing such relations, in failure whereof the general law shall apply for resolving such disputes;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Arranging for payment (if any) of the goods</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Agreeing a date for delivery of the goods subject to Clause 2.23
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Payment of all applicable taxes, duties and costs (including, without limitation, GST or customs and other import duties and tariffs) incurred in connection with the Exchange or sale of the products on our e-platform
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Consideration</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          Consideration against Exchange shall be a bilateral issue and we shall not be held responsible for any dispute emanating from breach of payment terms by any of the parties.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Delivery</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          Upon successful completion of Exchange on our e-platform, parties will be at liberty to complete the delivery of the product through their personal meeting. 
        </p>
      </div>
      
     <!--sales section start here-->
     <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Sale Transaction</h4>
        <h5 class="text-lg text-gray-700 font-medium mb-4">Procedure</h5>
        <p class="text-sm text-gray-700 mb-4">
          The rules for carrying out Sale Transactions on this e-platform are as follows:
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The Seller shall upload details of the goods that they intend to Sale
through gintaa, which may include actual pictures or photographs of
the same, subject to our listing policy
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The Seller shall not list any prohibited item including any item which
is earmarked as essential commodities under the Essential
Commodities Act, 1955 as amended from time to time including the
Amendment of 2020. In case the Seller lists or initiates to list any
Prohibited Item, the administrator of  gintaa.com  shall remove such
listing without any reference to the Exchanger.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Any interested user of the platform then need to suggest an offer and
counteroffer to finalise the transaction. Chat feature has also been
provided in the platform so that Exchangers can directly
communicate with each other.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Subject to the understanding between the parties, a transaction may
be concluded after transfer of agreed consideration by and between
the parties through agreed mode of delivery
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If the terms of Sale transaction are agreed upon or is deemed to have
been agreed upon from the course of conduct of the parties, the
parties are expected to complete the transaction within the time and
in the manner agreed upon, save in exceptional circumstances such
as the following:
              >
          </li>
          
        
          <ul class="list-disc ml-3 pl-12">
            <li class="mb-2 text-sm text-gray-600">The description of the goods is materially altered following the conclusion of deal</li>
            <li class="mb-2 text-sm text-gray-600">The Seller fails to deliver the goods to the offeree within the stipulated time</li>
          </ul>
       
         
        </ul>
        <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Completion of Transaction</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          We will notify the respective parties upon successful completion of
transaction regarding Sale and purchase of any product listed on our e-
platform by automated email/messages. 
        </p>
        <p class="w-full text-sm text-gray-700 mb-4">
          Upon receipt of such Confirmation Notification the parties will be
individually responsible for the following matters, including, but not limited
to: 
        </p>
       
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Implementation of the purchase of listed products, including consensus as to the point when risk in relation to the product shall pass onto the Buyer, and when title over the product shall pass on to the Buyer 
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Buyer and Sellers shall decide between themselves the procedure for
resolving any dispute arising out of any transaction carried out
between them as well as jurisdiction governing such relations, in
failure whereof the general law shall apply for resolving such
disputes;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Arranging for payment (if any) of the goods
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Agreeing a date for delivery of the goods subject to Clause 2.23
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Payment of all applicable taxes, duties and costs (including, without limitation, GST or customs and other import duties and tariffs)
incurred in connection with the Exchange or sale of the products on our e-platform
          </li>
        </ul>
        <p class="w-full text-sm text-gray-700 mb-4">
          Specific Requirements for any Seller Offering any products under NEW
Products Category:
        </p>
        <p class="w-full text-sm text-gray-700 mb-4">
          Notwithstanding anything contained hereinabove, a Seller of a New Product
categorically agrees and undertakes the following:
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The seller of any new product confirms that he is legally authorised to sell the
product though any channel of his choice including gintaa.com AND no exclusivity
exists between him and the manufacturer of the Products.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            The seller of any new product confirms that he is not prohibited by the
manufacturer to sell his products through gintaa.com
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            He shall not offer any new product at a price above the MRP of the concerned
product.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            He shall be solely liable for compliance with all applicable laws including GST
Laws and legal metrology laws and in case of any liability, he shall hold gintaa
indemnified against all losses, damages, penalties.
          </li>
        </ul>
      </div>


      </div>
     <!--sales section end here-->

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Insurance</h4>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            To protect the goods in the course of their transit as contemplated under clause above, the offeror or offeree shall have the option to choose for insurance through our insurance channel partner to protect themselves against any probable loss caused to the shipment during the transit from specified perils as provided under the respective insurance policy. The premium of such policy shall have to be paid by the Exchanging Parties to gintaa
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            By opting to insure the goods or products in the course of their transit through the insurance channel partner, the offeror or offeree, as the case may be, will acknowledge and accept that we are not an insurance service provider nor acting as agent and/or representative of any insurance company. We are just acting as a facilitator to improve the experience of our members/users on our e-platform and shall not be held responsible or liable in any manner whatsoever for any claim and/or dispute arising out of such insurance arrangement between the insurance channel partner and the insured. Any claim and/or dispute arising out of said insurance policy should be directly routed to the concerned insurance channel partner
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Comments and Feedback</h4>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If you believe that any user has posted any unwarranted statement against you or your offer and such statement is untrue, misleading, deceptive and/or defamatory (hereinafter referred to as ‘disputed statement’), please contact our customer support team at grievance@gintaa.com and we will make all possible endeavour to conduct an enquiry into the matter. Following such enquiry, we may remove the disputed statement.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Even in the event we cannot or do not conduct an enquiry into the disputed statement for any reason whatsoever, we may still choose to, at our sole discretion, remove the disputed statement but will not be obliged to do so. In the event we cannot or do not conduct such enquiry or are not satisfied, merely on your complaint to remove a disputed statement, you will not be entitled to hold us responsible or liable for the same in any manner whatsoever and will accordingly not be entitled to make any claim or demand on us in this regard or be entitled to take any action and/or initiate any proceeding against us in relation to the disputed statement or otherwise, in connection with our e-platform. By accepting these terms, you will as such, be waiving any right to make any claim against us on account of any disputed statement for its continuing to remain on the site. You may, in such event, and in any event, agitate your grievance with regard to the disputed statement directly against the maker of the same before such fora as may be available to you for the purpose, including law courts, whose decision in the matter we shall respect
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            We reiterate that the decision to hold or not to hold an inquiry will be entirely within our discretion and we will not be obliged in any way to entertain any representations in that regard.
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">gintaa’s Discretion</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          We reserve our right to alter and/or remove any information or withdraw any product listed for Exchange by offeror, or a proposal placed by any offeree, under following the circumstances:
        </p>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            We become aware or have reasons to believe that such product infringes upon and/or has the potential to infringe upon third party rights including any intellectual property right
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            We become aware or have reasons to believe that such product
does not belong to you and/or you are otherwise prohibited under
law from offering such products for Exchange or sale
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Such products are not uploaded in compliance with our listing policy
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If while accessing or remaining on our e-platform you breach any provision of these terms and/or guidelines framed by us from time to time
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If it is otherwise not in our commercial interests to do so and/or we are compelled under any law to do so and/or for any other reason whatsoever
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You hereby irrevocably and unconditionally agree that any rights that you may have had against us in respect of any such action that we may take or may have taken under this Clause are hereby waived
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">User</h4>

        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>You may access and/or use our e-platform as user</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You must have attained eighteen years of age or above to register as a member on our e-platform and/or for carrying out any transaction on our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If you wish to register as a member, you can do so by providing requisite information in the profile section for secured access. If you do not provide us with the accurate and complete information, then we may not be able to activate your membership or permit you access to contents meant for members only. You agree and undertake to keep your profile information correct and updated at all material times by accessing your account on our e-platform
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            If you choose to maintain an account with our e-platform, then you are solely responsible for maintaining absolute confidentiality regarding your account details
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You also agree and undertake to prohibit any unauthorised access to your devices so as to prevent any misuse of your account
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You hereby consent to take responsibility for all activities carried on our e-platform through your account
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	We reserve our right to refuse access to our e-platform, terminate accounts, remove and/or edit content at any time without prior notice or intimation to any user or member
          </li>
        </ul>
      </div>


      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Third Party Websites:</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
            Our Website may contain links or take you to other sites that are not operated by us and on which we do not have any control and thus we shall not be responsible for any damage suffered by you while using those site/s. If you choose to visit / access such third-party website we request you to do so after detailed review of the privacy policy, terms of use etc. of that third party.  
        </p>
        <p class="w-full text-sm text-gray-700">We do not assume any liability for any misuse of your data by that 3rd party.</p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Permission to Use Reward Points</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          Whenever you earn any reward points as per gintaa’s applicabe reward points policy, you give us unconditional right to use those points for any one or more of your transactions. 
        </p>
        <p class="w-full text-sm text-gray-700 mb-4">
          Our website allows you to share & invite others to join gintaa with your referral link. Gintaa coins will be credited to your account while referring upto 60 people in a month.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Security Deposit:</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          If any transaction on our platforms requires submission of deposits as a security deposit, then you shall submit such deposit with the clear understanding that this is not a public deposits under the Companies Act, 2013 and you shall not be entitled to any interest on such deposit and that the deposit is being held only as a security for your transaction.   
        </p>
      </div>










      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Data Security and Transmissions</h4>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Upon receipt of your data, we shall make all possible endeavour to preserve its security in consonance with our privacy policy, nevertheless if you become aware of any problems concerning protection and security of your data, then please contact our customer support team immediately
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	We shall try to give you a hassle-free experience on our e-platform including uninterrupted and error free transmissions, nevertheless it will be subject to occasional suspension and/or restrictions (without any notice) required for carrying out necessary repairs, regular maintenance etc. We shall make all possible endeavour to restrict frequency and duration of such suspensions and/or restrictions
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Considering the nature of internet, we cannot guarantee that any data transmission on our e-platform will be totally secure, free from viruses, fault and/or other conditions which could damage or interfere with your computer/mobile devices
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You must refrain from using this platform in any manner that causes, or is likely to cause, interruption in access to our platform and/or make its usage sporadic and/or impaired in any manner whatsoever
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You acknowledge that you are solely responsible for electronic communications and/or content uploaded from your devices on our e-platform and you undertake to use our e-platform only for personal use and lawful purposes. You must not use our e-platform for any purpose which is illegal and/or immoral and against the prevailing laws or public policy.
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Intellectual Property Rights</h4>
        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            You agree and acknowledge that all content available on our e-platform such as images, posts, offers, chats, deals, reviews, feedbacks, promotions as well as all software relating to our e-platform, are property of gintaa, its affiliates and/or third parties and that these remain the property of their respective owners and must not be used in any manner without the prior written consent of the concerned owner
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           You agree and undertake that you shall not reproduce, modify, distribute, store, transmit, publish or display on other website or create derivative works from any part of this website or commercialise any information obtained from any part of this website in any manner whatsoever
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            By posting or displaying any information, content or material on our e-platform and/or providing any content to us or our affiliates(s), and to the extent permitted under applicable laws, you grant an irrevocable, perpetual, nonexclusive, royalty-free, world-wide licence to use, copy, display and distribute the content of your communication and to prepare derivative works of the content or incorporate the content into other works in order to publish and promote such content. This may include, but is not limited to publishing testimonials on this website and developing your ideas and suggestions for improved products.
          </li>
        </ul>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Privacy</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          We have a stringent security mechanism to deal with your Personal Data and / or Sensitive Personal Data. Kindly refer to our Privacy Policy to understand how we collect and shall use your Personal Data and / or Sensitive Personal Data.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Transfer and Assignment</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          In the event of any merger, sale and/or otherwise change in management and control of our business, we reserve our right without any limitation whatsoever to transfer or assign the personal information, content and rights that we have collected and/or acquired from you under these Terms of Use of our e-platform and/or any other agreements that may be concluded with you in the course of your use of the same.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Waiver</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          Our failure to exercise or enforce any right or provision under the foregoing terms will not constitute a waiver of any such right or provision and any waiver under these terms shall only be valid if it is in writing and duly signed by our authorised signatory.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4 contac-gintaa contact-gh">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Notices</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          All legal notices or demands to or upon gintaa shall be in writing and sent to us personally, by courier or e-mail to the following address:
        </p>
        <ul>
          <li class="w-full text-sm text-gray-700 mb-2 font-medium">Ascon Softech India Private Limited</li>
          <li class="w-full text-sm text-gray-700 mb-2">
            Address:
            <span> gintaa Tower, Mohisgote, New Town, Opposite DLF 1, Gate No.5, Kolkata, West Bengal- 700102, India </span>
          </li>
          
          <li class="w-full text-sm text-gray-700 mb-2">
            Email: <a href="mailto:customer@gintaa.com" class="text-firoza">customer@gintaa.com </a>
          </li>
          <li class="w-full text-sm text-gray-700 mb-2">Contact No : 080-69188100 (9 AM - 9 PM)</li>
        </ul>
        <p class="w-full text-sm text-gray-700 mb-4">
          For any notice from our side, we shall use your last registered address and / or email as available to us and any service to such address shall be a good service at all point of time.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Severability</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          If any part of the foregoing terms is found to be void, unlawful and/or unenforceable, then that provision or part will be deemed to be severed from these terms and the remaining terms and provisions of this user agreement shall remain in force and constitute a binding agreement between you and gintaa.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Force Majeure</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
         We shall not be held responsible or liable for any failure to perform any obligations under these Terms or the provisions of this User Agreement, if prevented obstructed or delayed by an event of force majeure, including but not limited to internet failures, computer, telecommunications or any other equipment failures, electrical power failures, strikes, labour disputes, riots, insurrections, civil disturbances / disobidience, shortages of labour or materials, fires, flood, storms, earthquakes, explosions, pandemics/epidemics, lockdown, quarantine restrictions, inter-state dispute, legal sanctions by any court of law having jurisdiction over us, change in law, acts of God, war, governmental actions or non-performance of third parties etc.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Dispute Resolution</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          As gintaa is only providing a free platform as a facility to connect Exchangeers of products, without undertaking any obligation to either, whether contractual or otherwise, including any obligation to either vet or vouch for such products, to provide any facility for storage, or to ensure the quality or the condition of any products, and is furthermore not charging any consideration for use of the platform, no dispute or difference can ordinarily arise out of or in relation to these Terms or the provisions of this User Agreement, including its terms & conditions, privacy and listing policies.
        </p>
        <p class="w-full text-sm text-gray-700">
            In the event of, however, any genuine dispute still arising in relation to this agreement, such dispute, if arbitrable, shall be referred to a sole arbitrator to be mutually appointed by the parties. Before seeking recourse to arbitration, the parties will, however, be first required to amicably resolve their disputes and differences on best effort basis by way of good faith negotiation / mediation. It is only in the event of such avenues of dispute resolution failing, that recourse to arbitration may be had. The arbitration shall be conducted in Kolkata in accordance with the provisions of the Arbitration and Conciliation Act, 1996 and Courts in Kolkata shall have the exclusive jurisdiction over all proceedings in respect of or in relation to the same, this agreement. The language of arbitration shall be English.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="text-lg text-gray-700 font-medium mb-4">Governing Law and Jurisdiction</h4>
        <p class="w-full text-sm text-gray-700 mb-4">
          These Terms are governed by and shall be construed in accordance with the Laws of India, and if a dispute arises from these Terms, you irrevocably agree to submit to the exclusive jurisdiction of the courts at Kolkata.
        </p>
      </div>

      <div class="w-full flex flex-col mt-4">
        <h4 class="w-full text-lg text-gray-700 font-medium mb-4 text-center">Schedule</h4>
        <h5 class="w-full text-lg text-gray-700 font-medium mb-4 text-center">LIST OF PROHIBITED PRODUCTS</h5>
        <p class="w-full text-sm text-gray-700 mb-4">
          The following Products cannot be offered for sale by the Vendor on the Portal. Violations of this Policy shall lead to termination of the Agreement along with legal action by the Company
        </p>
        <p class="w-full text-sm text-gray-700 mb-4">
          The following non-exhaustive list of Products are prohibited for sale:
        </p>

        <ul>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Alcohol or any type of liquor;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Miracle cures which includes unsubstantiated cures, remedies or other items marketed as quick health fixes;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Narcotic drugs and psychotropic substances;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Medicines and drugs including illegal drugs and drug accessories, including herbal drugs like salvia and magic mushrooms;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>Pornographic and obscene or objectionable material;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Counterfeit, replicas and pirated goods and goods infringing any Intellectual Property Rights including pirated recordings or copies of unauthorised copyrighted materials whether in electronic or physical form or any other medium which may not be in existence at present;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Antiquities unless the Vendor is a Registered Auction House;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>Adult Products;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Resale of Subscription of any kind, whether transferable or not.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>Indian coins or Notes;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Fire arms, knives, military equipment and ammunition;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Police, army, navy and air force related items;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Wildlife products;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>Live birds and animals;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>Baby gender test kits;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Tobacco and cigarettes which includes cigarettes, cigars, chewing tobacco, and related products;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Money orders;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Wholesale currency which includes discounted currencies or currency Exchanges;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Hacking and cracking materials which includes manuals, how-to guides, information, or equipment enabling illegal access to software, servers, or other protected property;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>	Event tickets;</li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Any illegally hoarded items and / or any items for which an artificial scarcity is in place at any given point of time.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Any item which is earmarked as essential commodities under the Essential Commodities Act, 1955 as amended from time to time including the Amendment of 2020.
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Bulk marketing tools which include email lists, software, or other products enabling unsolicited email messages (spam);
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Cable descramblers and black boxes which includes devices intended to obtain cable and satellite signals for free;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Gaming/gambling which includes lottery tickets, sports bets, memberships/ enrolment in online gambling sites, and related content;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            	Government identity cards, licences which includes fake identity cards, passports, diplomas and noble titles, drug test circumvention aids which includes drug cleansing shakes, urine test additives, and related items;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Traffic devices which includes radar detectors/ jammers, licence plate covers, traffic signal changers, and related products;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
           	Regulated goods which includes air bags; batteries containing mercury; Freon or similar substances/refrigerants, chemical/industrial solvents, government uniforms, car titles or logos, licence plates, police badges and law enforcement equipment, lock-picking devices, pesticides; postage metres, recalled items, slot machines; goods regulated by government or other agency specifications;
          </li>
        
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Stocks and other securities or related financial products;
          </li>
          <li class="text-sm text-gray-600 pb-4 relative pl-9">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
            </svg>
            Products prohibited under any Applicable Law including their amendments.
          </li>
        </ul>
      </div>
    </div>
    
    <div class="w-full flex flex-col mt-8 hidden">
                            <h1 class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center uppercase">Terms of Use - <span class="lowercase">gintaa</span> food </h1>
                            <p class="w-full mb-6 text-sm text-gray-600 font-medium">Effective as on 17 April 2023</p>
                            <div class="w-full flex flex-col">
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">Welcome to <a href="https://gintaa.com/gintaa-food" target="_blank" class="text-firoza">www.gintaa.com/gintaa-food </a>. </p>
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">Kindly go through these Terms of Use (the "Terms") thoroughly to understand your legal position vis-à-vis the services extended through our website <a href="https://gintaa.com/gintaa-food" target="_blank" class="text-firoza">www.gintaa.com/gintaa-food </a>  (the "Site") or the mobile app of Gintaa food ("Gintaa-food Platform") (the "Services")</p>
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">By accessing or using the Gintaa-food Platform, you are agreeing to these Terms and concluding a legally binding contract with Ascon Softech Pvt. Limited i.e. the owner of gintaa-food and/or its affiliates (hereinafter collectively referred to as "Gintaa-food"). Thus, your accessing of Gintaa-food Platform is an implied acceptance of the terms contained herein.</p>
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">In case you are not willing to accept the Terms you are at liberty to exit the Gintaa-food Platform without any liability to Gintaa-food. Your use of the Gintaa-food Platform is at your own risk on as is where is basis, and Gintaa-food shall not be liable to any damage that you may suffer by ordinary use of the Gintaa-food Platform.</p>
                            </div>
                            <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">DEFINITIONS</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">Customer :</span> "Customer" or "You" or "Your" refers to you, as a customer of the Services i.e. someone who accesses or uses the Services.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Content"</span> will include (but is not limited to) reviews, images, photos, audio, video, location data, nearby places, and all other forms of information or data. 
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Gintaa-food Content"</span> means content that Gintaa-food creates and make available in connection with the Services including, but not limited to, visual interfaces, interactive features, graphics, design, compilation, computer code, products, software, aggregate ratings, reports and other usage-related data in connection with activities associated with your account and all other elements and components of the Services excluding Your Content and Third-Party Content. 
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">Portal shall</span> mean website <a href="https://gintaa.com/gintaa-food" target="_blank" class="text-firoza">www.gintaa.com/gintaa-food </a>  (the "Site") or the mobile app of Gintaa food ("Gintaa-food Platform").
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Restaurant"</span> means the restaurants listed on Gintaa-food Platform.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">“Sensitive Personal Data”</span> which may, reveal, be related to, or constitute your 
                            </li> 
                            <ul class="list-disc ml-3 pl-12">
                                <li class="mb-2 text-sm text-gray-600">financial data</li> 
                                <li class="mb-2 text-sm text-gray-600">health data</li>
                                <li class="mb-2 text-sm text-gray-600">official identifier</li>
                                <li class="mb-2 text-sm text-gray-600">sex life</li>
                                <li class="mb-2 text-sm text-gray-600">sexual orientation</li>
                                <li class="mb-2 text-sm text-gray-600">biometric data</li>
                                <li class="mb-2 text-sm text-gray-600">genetic data</li>
                                <li class="mb-2 text-sm text-gray-600">transgender status</li>
                                <li class="mb-2 text-sm text-gray-600">intersex status</li>
                                <li class="mb-2 text-sm text-gray-600">caste or tribe</li>
                                <li class="mb-2 text-sm text-gray-600">religious or political belief or affiliation</li>
                            </ul>
                                <li class="text-sm text-gray-600 pb-4 relative pl-9"><svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium"> "Third Party Content" </span>means content that comes from parties other than Gintaa-food or its Customers, such as Restaurant Partners and is available on the Services.
                                </li> 
                                <li class="text-sm text-gray-600 pb-4 relative pl-9"><svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Your content"</span> or "Customer Content" means content that you upload, share or transmit to, through or in connection with the Services, such as likes, ratings, reviews, images, photos, messages, chat communication, profile information, or any other materials that you publicly display or displayed in your account profile.
                                </li> 
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Your representation & warranties:</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You hereby represent and warrant that you are at least eighteen (18) years of age or above and are fully able and competent to understand and agree the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You are in compliance with all laws of India. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The Content on these Services is for informational purposes only and you are aware that Gintaa-food does not have any liability for any information that may have become outdated since the last time the particular piece of information was updated and Gintaa-food reserves the right to make changes and corrections to any part of the Content on these Services at any time without prior notice. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You undertake that Gintaa-food does not guarantee the quality of the food, the prices listed in menus or the availability of all menu items at any Restaurant Partner and Unless stated otherwise, all pictures and information contained on these Services are believed to be owned by or licensed to Gintaa-food. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You also undertake that any information that may be displayed on the Restaurant's listing page on the Gintaa-food Platform is for informational purposes only as such Certification is displayed by Gintaa-food on an 'as available' basis that is provided to Gintaa-food by the Restaurant partner(s)/Merchant(s). Gintaa-food does not make any warranties about the validity, authenticity, reliability and accuracy of such information displayed in this regard. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                any reliance placed by you upon the information thereto shall be strictly at such Customer's own risk and Gintaa-food in no manner shall assume any liability whatsoever for any losses or damages in connection with the use of this information.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food reserves the right to charge a subscription and/or membership fee in respect of any of its product or service and/or any other charge or fee on a per order level from Customers, in respect of any of its product or service on the Gintaa-food Platform anytime in future.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food may from time to time introduce referral and/or incentive based programs for its Customers (Program). These Program(s) may be governed by their respective terms and conditions. By participating in the Program, Customers are bound by the Program terms and conditions as well as the Gintaa-food Platform terms. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Further, Gintaa-food reserves the right to terminate / suspend the Customer's account and/or credits / points earned and/or participation of the Customer in the Program if Gintaa-food determines in its sole discretion that the Customer has violated the rules of the Program and/or has been involved in activities that are in contravention of the Program terms and/or Gintaa-food Platform terms or has engaged in activities which are fraudulent / unlawful in nature. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food may from time to time offer to the Customers credits, promo codes, vouchers or any other form of cashback that Gintaa-food may decide at its discretion. Gintaa-food reserves the right to modify, convert, cancel and/or discontinue such credits, promo codes or vouchers, as it may deem fit.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You hereby agree and assure Gintaa-food that the Gintaa-food Platform/Services shall be used for lawful purposes only and that you will not violate laws, regulations, ordinances or other such requirements of any applicable Central, Federal State or local government or international law(s). You shall not upload, post, email, transmit or otherwise make available any unsolicited or unauthorized advertising, promotional materials, junk mail, spam mail, chain letters or any other form of solicitation, encumber or suffer to exist any lien or security interest on the subject matter of these Terms or to make any representation or warranty on behalf of Gintaa-food in any form or manner whatsoever.
                            </li>
                                
                        </ul>
                    </div>
                    
                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Use of services by you or Customer</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">You shall have to create an account using your personal credentials. By creating an account, you agree to receive certain communications in connection with Gintaa-food Platform or Services. You can opt-out or manage your preferences regarding non-essential communications through account settings.</p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Important Terms</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                In order to connect you to certain restaurants, we provide value added telephony services through our phone lines, which are displayed on the specific restaurant listing page on the Gintaa-food Platform, which connect directly to restaurants' phone lines. We record all information regarding this call including the voice recording of the conversation between you, and the restaurant (for internal billing tracking purposes and customer service improvement at the restaurant's end). You explicitly agree and permit Gintaa-food to record all this information when you avail the telephony services through the Gintaa-food provided phone lines on the Gintaa-food Platform.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You agree to use the Services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You agree to use the data owned by Gintaa-food (as available on the Services or through any other means like API etc.) only for personal use/purposes and not for any commercial use unless agreed to by/with Gintaa-food in writing.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You agree not to access (or attempt to access) any of the Services by any means other than the interface that is provided by Gintaa-food, unless you have been specifically allowed to do so, by way of a separate agreement with Gintaa-food. 
                            </li>
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Privacy Policy</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">You represent that you have read, understood and agreed to our Privacy Policy. Please note that we may disclose information about you to third parties or government authorities if we believe that such a disclosure is reasonably necessary to (i) take action regarding suspected illegal activities; (ii) enforce or apply our Terms and Privacy Policy; (iii) comply with legal process or other government inquiry, such as a search warrant, subpoena, statute, judicial proceeding, or other legal process/notice served on us; or (iv) protect our rights, reputation, and property, or that of our Customers, affiliates, or the general public</p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Restrictions on use</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">Without limiting the generality of these Terms, in using the Services, you specifically agree not to post or transmit any content (including review) or engage in any activity that, in our sole discretion:</p>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Violate our Guidelines and Policies;
                            </li>  
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is harmful, threatening, abusive, harassing, tortious, indecent, defamatory, discriminatory, vulgar, profane, obscene, libellous, hateful or otherwise objectionable, invasive of another's privacy, relating or encouraging money laundering or gambling;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Contains material that violates the standards of good taste or the standards of the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Constitutes an inauthentic or knowingly erroneous review, or does not address the goods and services, atmosphere, or other attributes of the business you are reviewing.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Violates any third-party right, including, but not limited to, right of privacy, right of publicity, copyright, trademark, patent, trade secret, or any other intellectual property or proprietary rights;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is illegal, or violates any central, state, or local law or regulation (for example, by disclosing or trading on inside information in violation of securities law);
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Attempts to impersonate another person or entity;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Accuses others of illegal activity, or describes physical confrontations;
                            </li> <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Alleges any matter related to health code violations requiring healthcare department reporting. Refer to our Guidelines and Policies for more details about health code violations.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Disguises or attempts to disguise the origin of Your Content, including but not limited to by: (i) submitting Your Content under a false name or false pretences; or (ii) disguising or attempting to disguise the IP address from which Your Content is submitted;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Accesses or uses the account of another customer without permission;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Constitutes a form of deceptive advertisement or causes, or is a result of, a conflict of interest;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is commercial in nature, including but not limited to spam, surveys, contests, pyramid schemes, postings or reviews submitted or removed in exchange for payment, postings or reviews submitted or removed by or at the request of the business being reviewed, or other advertising materials;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Falsely states, misrepresents, or conceals your affiliation with another person or entity;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                reverse engineers, disassembles or otherwise attempts to derive source code from the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                "Hacks" or accesses without permission our proprietary or confidential records, records of another Customer, or those of anyone else;
                            </li>                              
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Distributes computer viruses or other code, files, or programs that interrupt, destroy, or limit the functionality of any computer software or hardware or electronic communications equipment;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Interferes with, disrupts, or destroys the functionality or use of any features of the Services or the servers or networks connected to the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Violates any contract or fiduciary relationship (for example, by disclosing proprietary or confidential information of your employer or client in breach of any employment, consulting, or non-disclosure agreement);
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Threatens the unity, integrity, defense, security or sovereignty of India Collects, accesses, or stores personal information about other Customers of the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is posted by a bot;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Harms minors in any way;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Modifies, copies, scrapes or crawls, displays, publishes, licenses, sells, rents, leases, lends, transfers or otherwise commercialize any rights to the Services or Our Content; or
                            </li> 
                            
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Feedback</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                If you share or send any ideas, suggestions, changes or documents regarding Gintaa-food's existing business ("Feedback"), you agree that (i) your Feedback does not contain the confidential, secretive or proprietary information of third parties, (ii) Gintaa-food is under no obligation of confidentiality with respect to such Feedback, and shall be free to use the Feedback on an unrestricted basis (iii) Gintaa-food may have already received similar Feedback from some other Customer or it may be under consideration or in development, and (iv) By providing the Feedback, you grant us a binding, non-exclusive, royalty-free, perpetual, global license to use, modify, develop, publish, distribute and sublicense the Feedback, and you irrevocably waive, against Gintaa-food and its Customers any claims/assertions, whatsoever of any nature, with regard to such Feedback.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Notwithstanding the abovementioned clause, Gintaa-food or any of its employees do not accept or consider unsolicited ideas, including ideas for new advertising campaigns, new promotions, new or improved products or technologies, product enhancements, processes, materials, marketing plans or new product names. Please do not submit any unsolicited ideas, original creative artwork, suggestions or other works ("Submissions") in any form to Gintaa-food or any of its employees.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The purpose of this policy is to avoid potential misunderstandings or disputes when Gintaa-food's products or marketing strategies might seem similar to ideas submitted to Gintaa-food. If, despite our request to not send us your ideas, you still submit them, then regardless of what your letter says, the following terms shall apply to your Submissions.
                            </li> 
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">FOOD ORDERING AND DELIVERY:</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food provides food ordering and delivery services by entering into contractual arrangements with restaurant partners (<span class="font-medium">“Restaurant Partners”</span>) on a principal-to-principal basis for the purpose of listing their menu items or the Products (as defined below) for food ordering and delivery by the Customers on the Gintaa-food Platform.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                In order to get the eservices of Gintaa-food, you need to first register yourself with Gintaa-food by following the instruction on the Portal and filling up the necessary information. Please note, your registration with Gintaa-food is a voluntary act on your part and Gintaa-food shall not be responsible for such registration. Needless to mention, you are at liberty not to register with Gintaa-food and in which case you shall not be able to get the services of Gintaa-food.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The Customers can access the menu items or Products listed on the Gintaa-food Platform and place orders against the Restaurant Partner through Gintaa-food.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Your request to order food and beverages or Products from a Restaurant Partner page on the Gintaa-food Platform shall constitute an unconditional and irrevocable authorization issued in favour of Gintaa-food to place orders for food and beverages or Products against the Restaurant Partner on your behalf.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Delivery of an order placed by you through the Gintaa-food Platform shall be undertaken directly by the Restaurant Partner against whom you have placed an order, (<span class="font-medium">“Delivery Partners”</span>). Gintaa-food is merely acting as an intermediary between you and the Restaurant Partner and any delay, deficiency in service by the Delivery Partners of the Restaurant Partner shall not be any liability of Gintaa-food.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The acceptance by a Restaurant Partner of undertaking delivery of your order shall constitute a contract of service under the Consumer Protection Act, 2019 or any successor legislations, between you and the Delivery Partner, to which Gintaa-food is not a party under any applicable law. It is clarified that Gintaa-food does not provide any delivery or logistics services and only enables the sale and purchase of food and beverages or Products ordered by the Customers through the Gintaa-food Platform by connecting the Customers with the Restaurant Partners.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You may be charged a delivery fee for delivery of your order by the Restaurant Partner, as the Delivery Partner or the Restaurant Partner may determine (<span class="font-medium">“Delivery Charges"</span>). You agree that Gintaa-food is authorized to collect, on behalf of the Restaurant Partner, the Delivery Charges for the delivery service provided by the Restaurant Partner. The Delivery Charges may vary from order to order, which may be determined on multiple factors which shall include but not be limited to Restaurant Partner, order value, distance, time of the day. Gintaa-food will inform you of the Delivery Charges that may apply to you, provided you will be responsible for Delivery Charges incurred for your order regardless of your awareness of such Delivery Charges.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                In respect of the order placed by You, Gintaa-food shall issue documents like order summary, tax invoices, etc. as per the applicable legal regulations and common business practices.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You are expected to respect the dignity and diversity of Delivery Partners and accordingly you agree to not discriminate against any Delivery Partner on the basis of Discrimination Characteristics (as defined below). You are also expected to enable provision of a secure and fearless gig/ platform work environment for the delivery partners including prevention and deterrence of harassment (including sexual harassment) towards Delivery Partners.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                All prices listed on the Gintaa-food Platform are provided by the Restaurant Partner at the time of publication on the Gintaa-food Platform and have been placed as received from the Restaurant Partner. While we take great care to keep them up to date, the final price charged to you by the Restaurant Partner may change at the time of delivery. In the event of a conflict between price on the Gintaa-food Platform and price charged by the Restaurant Partner, the price charged by the Restaurant Partner shall be deemed to be the correct price except Delivery Charge of Gintaa-food.
                            </li> 
                            
                        </ul>
                    </div>
                    
                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">General Terms and Conditions</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You understand that Gintaa-food is not a manufacturer, seller or distributor of food and beverages or Products and merely places an order against the Restaurant Partner(s on behalf of the Customers pursuant to the unconditional and irrevocable authority granted by the Customers to Gintaa-food, and facilitates the sale and purchase of food and beverages or Products between Customers and Restaurant Partners, under the contract for sale and purchase of food and beverages or Products between the Customers and Restaurant Partners.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food shall not be liable for any acts or omissions on part of the Restaurant Partner including deficiency in service, wrong delivery of order / order mismatch, quality, incorrect pricing, deficient quantity, time taken to prepare or deliver the order, and other similar etc.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You also understand that Gintaa-food is no way responsible for delivery of the food ordered by you and that the entire responsibility for the delivery of the food ordered by you lies with the restaurant partner from whom you have ordered the food.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Please note that some of the food and beverages or Products may not be suitable for certain types of people like people allergic to gluten, lactose etc. or for people under certain age like infants, child below 5 years etc. and the Customer should check the dish she or he is ordering and read its description, if provided, prior to placing your order. Gintaa-food shall not be liable in the event the food and beverages or the Product ordered by You does not meet your dietary or any other requirements and/or restrictions.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The Restaurant Partner shall be solely responsible for any warranty/guarantee of the food and beverages or Products sold to the Customer and in no event shall be the responsibility of Gintaa-food.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You or any person instructed by you shall not resell food and beverages or Products purchased via the Gintaa-food Platform.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                While placing an order you shall be required to provide certain details, including without limitation, contact number and delivery address. You agree to take particular care when providing these details and warrant that these details are accurate and complete at the time of placing an Order. By providing these details, you express your acceptance to Gintaa-food's terms and privacy policies.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Any amount that may be charged to you by Gintaa-food over and above the order value, shall be inclusive of applicable taxes.
                            </li>
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Cancellation and refund policy:</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">Food once ordered can not be cancelled. Gintaa-food shall not be liable to make any refund of any payment made by you in connection with any cancellation attempted by you.</p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Indemnification</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">You agree to indemnify, defend, and hold harmless the Gintaa-food Parties from and against any third party claims, damages (actual and/or consequential), actions, proceedings, demands, losses, liabilities, costs and expenses (including reasonable legal fees) suffered or reasonably incurred by us arising as a result of, or in connection with: (i) Your Content, (ii) your unauthorized use of the Services, or products or services included or advertised in the Services; (iii) your access to and use of the Services; (iv) your violation of any rights of another party; or (v) your breach of these Terms, including, but not limited to, any infringement by you of the copyright or intellectual property rights of any third party. We retain the exclusive right to settle, compromise and pay, without your prior consent, any and all claims or causes of action which are brought against us. </p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Termination of your access to the services</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You can delete your account at any time by using the direction mentioned in settings.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                We may terminate your use of the Services and deny you access to the Services in our sole discretion for any reason including your violation of these Terms.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Once, terminated, a customer may not be allowed by Gintaa-food to re-register with same IP address or credentials.
                            </li>
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">General </h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Interpretation:</span>The section and subject headings in these Terms are included for reference only and shall not be used to interpret any provisions of these Terms.

                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Severability:</span>If any provision of these Terms is deemed unlawful, invalid, or unenforceable by a judicial court for any reason, then that provision shall be deemed severed from these Terms, and the remainder of the Terms shall continue in full force and effect.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Entire Agreement and Waiver:</span>No failure or delay by Gintaa-food in exercising any right, power or privilege under the Terms shall be deemed as a waiver of such right or acceptance of any variation of the Terms and nor shall any single or partial exercise by either party of any right, power or privilege preclude any further exercise of that right or the exercise of any other right, power or privilege.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Partnership or Agency:</span>None of the provisions of these Terms shall be deemed to constitute a partnership or agency between you and Gintaa-food and you shall have no authority to bind Gintaa-food in any form or manner, whatsoever.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Dispute Resolution:</span>In case of any dispute that arises between the customer and the restaurant partner, the responsibility of Gintaa-food shall be only limited to the providing of information. The Customer shall not make Gintaa-food a party in any such dispute in any manner whatsoever.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Governing Law/Waiver:</span>These Terms shall be governed by the laws of India. The Courts of Kolkata shall have exclusive jurisdiction over any dispute arising under these terms.

                            </li>
                            
                        </ul>
                    </div>

                                                
                    <p class="w-full mb-6 text-sm text-gray-600 font-medium mt-4">Please note: Gintaa-food does not solicit confidential information such as OTP/CVV/PIN NUMBER/Card number either through call or mail or any other means. Please do not reveal these details to fraudsters and imposters claiming to be calling on Gintaa-food’s behalf. You may report such suspicious activities to </p>
                    



                            </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TermsEnglish",
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
