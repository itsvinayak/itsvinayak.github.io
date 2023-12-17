"use client";

import React from "react";

const Newletter = () => {
  return (
    <div className="flex flex-col items-center py-8 md:py-16">
      <h1 className="text-md md:text-3xl lg:text-xl xl:text-2xl font-bold dark:text-white text-black text-center">
        <span className="hover:bg-gradient-to-r from-[#171010] via-[#000000] to-[#000f2f] bg-[length:100%_6px] bg-no-repeat bg-bottom">Subscribe to My Newsletter for Updates</span>
      </h1>
      <div className="relative mt-4 mx-6 md:mx-0 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex justify-center items-center">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="w-full rounded-2xl border border-transparent dark:text-white dark:border-white dark:placeholder-white dark:bg-transparent dark:ring-white/5 dark:focus:ring-white/5 dark:hover:ring-white/5 dark:focus:border-white/5 dark:hover:border-white/5 dark:hover:bg-transparent dark:hover:placeholder-white dark:hover:text-white dark:hover:ring-wh
          bg-transparent py-4 pl-6 pr-12 text-base/6 text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 hover:border-neutral-950 hover:outline-none hover:ring-neutral-950/5 transition"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            onClick={ () => location.href = 'https://itsvinayak.substack.com/' }
            className="flex aspect-square items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 w-fit px-4"
          >
            <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newletter;