import React from "react";

const quote = () => {
  return (
    <section class="pt-10 bg-amber-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
      <div class="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
        <div class="2xl:pl-24">
          <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div class="text-center md:py-16 xl:py-24 md:text-left">
              <blockquote>
                <p class="text-2xl font-semibold leading-relaxed text-gray-900">
                  “People throw stones at you and you convert them into
                  milestones.”
                </p>
              </blockquote>
              <div class="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                <p class="text-base font-semibold text-gray-900">
                  Sachin tendulkar
                </p>
                <p class="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">
                  Indian former international cricketer
                </p>
              </div>
              <p class="mt-12 text-base text-gray-900 font-bold lg:mt-20">
                Waiting for an oppurtunity?
              </p>
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                role="button"
              > Register with us
              </a>
            </div>

            <div class="relative">
              <img
                class="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75  2xl:-mt-20"
                src="/sac.png"
                // "https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default quote;
