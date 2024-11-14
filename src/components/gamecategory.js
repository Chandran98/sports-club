import React from 'react'

const gamecategory = () => {
//   return (
//  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
//     <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div class="max-w-2xl mx-auto text-center">
//             <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Game category</h2>
//             <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
//         </div>


//         <div className=' bg'></div>
// {/* 
//         <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
//             <div class="overflow-hidden bg-white rounded shadow">
//                 <div class="p-8">
//                     <div class="flex items-center">
//                         <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png" alt="" />
//                         <div class="ml-5 mr-auto">
//                             <p class="text-xl font-semibold text-black">Gmail</p>
//                             <p class="mt-px text-sm text-gray-600">Direct Integration</p>
//                         </div>
//                         <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </div>
//                     <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//                 </div>
//             </div>

//             <div class="overflow-hidden bg-white rounded shadow">
//                 <div class="p-8">
//                     <div class="flex items-center">
//                         <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png" alt="" />
//                         <div class="ml-5 mr-auto">
//                             <p class="text-xl font-semibold text-black">Slack</p>
//                             <p class="mt-px text-sm text-gray-600">Direct Integration</p>
//                         </div>
//                         <svg class="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </div>
//                     <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//                 </div>
//             </div>

//             <div class="overflow-hidden bg-white rounded shadow">
//                 <div class="p-8">
//                     <div class="flex items-center">
//                         <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png" alt="" />
//                         <div class="ml-5 mr-auto">
//                             <p class="text-xl font-semibold text-black">Shopify</p>
//                             <p class="mt-px text-sm text-gray-600">Direct Integration</p>
//                         </div>
//                         <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </div>
//                     <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//                 </div>
//             </div>

//             <div class="overflow-hidden bg-white rounded shadow">
//                 <div class="p-8">
//                     <div class="flex items-center">
//                         <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png" alt="" />
//                         <div class="ml-5 mr-auto">
//                             <p class="text-xl font-semibold text-black">Intercom</p>
//                             <p class="mt-px text-sm text-gray-600">Direct Integration</p>
//                         </div>
//                         <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </div>
//                     <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//                 </div>
//             </div>

//             <div class="overflow-hidden bg-white rounded shadow">
//                 <div class="p-8">
//                     <div class="flex items-center">
//                         <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png" alt="" />
//                         <div class="ml-5 mr-auto">
//                             <p class="text-xl font-semibold text-black">Twitter</p>
//                             <p class="mt-px text-sm text-gray-600">Direct Integration</p>
//                         </div>
//                         <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </div>
//                     <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//                 </div>
//             </div>

//             <div class="overflow-hidden bg-white rounded shadow">
//                 <div class="p-8">
//                     <div class="flex items-center">
//                         <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png" alt="" />
//                         <div class="ml-5 mr-auto">
//                             <p class="text-xl font-semibold text-black">Sketch</p>
//                             <p class="mt-px text-sm text-gray-600">Direct Integration</p>
//                         </div>
//                         <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </div>
//                     <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//                 </div>
//             </div>
//         </div> */}

//         <div class="mt-12 text-center">
//             <a href="#" title="" class="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Check all 1,593 applications </a>
//         </div>
//     </div>
// </section> 

//   )

const sports = [
    { sport: 'Marathon', image: 'https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/Marathone-1-1-1.png' },
    { sport: 'Football', image: 'https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/Football-1-1.png' },
    { sport: 'Rugby', image: 'https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/C-3-1-2.png' },
    { sport: 'Baseball', image: 'https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/Baseball-2-1.png' },
  ];

  return (
 <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
<div className='px-4 mx-auto sm:px-6 lg:px-8'>
    <div className="flex container px-24 items-center space-x-8 mt-10 justify-between ">
      {sports.map((sport) => (
        <SportsCard key={sport.sport} sport={sport.sport} image={sport.image} />
      ))}

      {/* View All Categories Link */}
      <div className="absolute bottom-10 text-blue-600 font-semibold cursor-pointer">
        <a href="#view-all-categories">View All Categories</a>
      </div>
    </div>
    </div>
     </section> 

  );
}

export default gamecategory



// Sports Card Component
const SportsCard = ({ sport, image }) => {
  return (
    <div className= "flex   relative w-64 h-96 bg-gradient-to-b from-purple-600 to-red-500 rounded-2xl  justify-between ">
    {/* Vertical Text */}
    <h2 className="relative  bottom-0  text-white font-bold text-4xl rotate-90 ">
      {sport}
    </h2>

    {/* Sport Image - Overlapping */}
    <img
      src={image}
      alt={sport}
      className="absolute  w-48 h-[60vh] top-[-35%] object-contain z-10"
      />
  </div>
  );
};


