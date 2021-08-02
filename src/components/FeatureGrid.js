import React from "react";
import {
  CloudUploadIcon,
  CodeIcon,
  CogIcon,
  LockClosedIcon,
  PuzzleIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'
import { HashLink as Link } from "react-router-hash-link"

const features = [
  {
    name: 'Simple Code Snippets',
    description: 'Drop our HTML or React examples into your site and start collecting emails while maintaining the look of your site.',
    icon: CodeIcon,
  },
  {
    name: 'Secure Without The Server',
    description: 'We protect your forms and protect you from spam without the need for a server. You can also set your own restrictions',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Re-Usable Forms',
    description: 'You have many sites. You should be able to re-use your forms. Mailway makes this easy with duplication functionality.',
    icon: RefreshIcon,
  },
  {
    name: 'Unlockable Content',
    description: 'Want to release content only after an email has been provided? We have you covered. Upload, set up your form, drop it in.',
    icon: LockClosedIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Unlike most email services, you can choose to use a form we provide or manually make posts to the API. Collect email your way.',
    icon: CogIcon,
  },
  {
    name: 'Integrations',
    description: 'Collecting the email is only the first step. We have integrations with top email marketing services to make the rest simple.',
    icon: PuzzleIcon,
  },
]
const FeatureGrid = () => {
  return (
    <div id="features" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mt-8 mb-16 flex flex-row justify-center align-center">
          <Link to="#notify" className="block py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Get Early Access</Link>
        </div>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
          Focus on your site
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Add an email form to your site faster than ever.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Use HTML, React, or make posts to the API on your own. No matter how you use Mailway, it'll be fast and easy. Collect emails and deliver email gated content like never before.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
