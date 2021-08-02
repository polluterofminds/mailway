import React from "react";
import ExampleTable from "./ExampleTable";

const Feature = () => {
  return (
    <div id="product" className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            No Server Required
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Focus on your marketing page not setting up a server.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            When using an email marketing service to collect emails, you are normally locked into their form styles and pop-ups, or you have to stand up a server just to post to their API. Mailway changes this. 
          </p>
          <p className="mt-5 font-extrabold max-w-prose mx-auto text-xl text-gray-500">
            Easy interface to manage forms, contacts, and integrations. 
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <ExampleTable />
        </div>        
      </div>
    </div>
  );
};

export default Feature;
