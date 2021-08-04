import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { HashLink as Link } from "react-router-hash-link";
import PrismCode from "react-prism"
require('prismjs');
require('prismjs/themes/prism-tomorrow.css');


const Hero = () => {
  return (
    <div
      id="notify"
      className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <Link
                to="#notify"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                  Launching Soon
                </span>
                <span className="ml-4 text-sm">Sign up for early access</span>
                <ChevronRightIcon
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </Link>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Painless</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                  email collection
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Collecting email addresses is harder than it should be. You
                can't style your forms easily, you can't brand the experience.
                You may even need a server just to add emails to your marketing
                tools.
              </p>
              <p className="text-base text-white font-extrabold sm:text-xl text-2xl">
                Mailway solves this.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="https://app.getmailway.com/api/collect/7TaoyT" method="post" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        Get early access
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    We're launching soon, and those on the early access list get
                    a sneak peak. (P.S. this form uses Mailway!) .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 sm:mt-32">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              {/* <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                alt=""
              /> */}
              <PrismCode component="pre" className="language-html rounded-lg">
{`
<form 
  method="post" 
  action="https://app.getmailway.com/api/collect/{siteId}"
>
  <label>Email</label>
  <input name="email" type="email" placeholder="Your email..." required />
  <button type="submit">Subscribe</button>
</form>

`}
              </PrismCode>
              <p className="text-white text-center">No more fighting the style sheets of mailing list vendors. Your CSS. Your styles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
