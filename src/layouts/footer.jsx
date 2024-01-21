import { useEffect } from "react";
import { ReactSVG } from "react-svg";

const Footer = () => {
  useEffect(() => {
    console.log("FOOTER RENDERED");
    return () => {
      console.log("FOOTER DESTROYED");
    }
  });
  return (
    <footer aria-labelledby="footer-heading">
      <h2 className="sr-only" id="footer-heading">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:flex xl:justify-between xl:gap-8">
          <div className="space-y-8">
            <div className="flex flex-row items-center gap-2 ">
              <ReactSVG src={"assets/svg/logo.svg"} className="h-10" />
            </div>
            <p className="flex gap-2 text-sm leading-6 text-gray-800">
              <span>Built for India</span>
              <ReactSVG src={"assets/svg/heart.svg"} />
            </p>
            <div className="flex space-x-6"><a className="text-gray-400 hover:text-gray-500"
              href="https://www.facebook.com/getatlys"><span><span className="sr-only">Facebook</span>
                <ReactSVG src={"assets/svg/facebook.svg"} className="h-6 w-6" />
              </span></a><a className="text-gray-400 hover:text-gray-500"
                href="https://www.instagram.com/travelwithatlys"><span><span
                  className="sr-only">Instagram</span>
                  <ReactSVG className="h-6 w-6" src={"assets/svg/instagram.svg"} />
                </span></a><a className="text-gray-400 hover:text-gray-500"
                  href="https://twitter.com/travelwithatlys"><span><span className="sr-only">Twitter</span>
                  <ReactSVG className="h-6 w-6" src={"assets/svg/twitter.svg"} />
                </span></a><a className="text-gray-400 hover:text-gray-500"
                  href="https://www.youtube.com/channel/UCg7N-D74YkF24JAuXyH8ecQ"><span><span
                    className="sr-only">YouTube</span>
                  <ReactSVG className="h-6 w-6" src={"assets/svg/youtube.svg"} />
                </span></a></div>
          </div>
          <div className="mt-16 xl:mt-0 xl:w-full xl:max-w-xl">
            <div className="md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm hover:text-gray-900 leading-6 text-gray-600"
                    href="/en-IN/business">For Travel Agents</a></li>
                  <li><a className="text-sm hover:text-gray-900 leading-6 text-gray-600"
                    href="/en-IN/about">About Us</a></li>
                  <li><a className="text-sm hover:text-gray-900 leading-6 text-gray-600"

                    href="https://www.notion.so/goatlys/Join-Atlys-2bfd2c9971ff457093feba77b012698e">Jobs</a>
                  </li>
                  <li><a className="text-sm hover:text-gray-900 leading-6 text-gray-600"
                    href="https://www.trustpilot.com/review/atlys.com">Reviews</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="https://atlys.zendesk.com/hc/en-in">Help Center</a></li>
                  <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="/en-IN/contact">Contact</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm hover:text-gray-900    leading-6 text-gray-600"
                    href="/en-IN/privacy">Privacy</a></li>
                  <li><a className="text-sm hover:text-gray-900    leading-6 text-gray-600"
                    href="/en-IN/terms">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-16 flex flex-col justify-between gap-8 border-t border-gray-900/10 pt-8 sm:mt-20 md:gap-0 lg:mt-24 xl:flex-row">
          <p className="text-sm leading-5 text-gray-700">Copyright ©  ATLYS INDIA PRIVATE
            LIMITED.
            All Rights Reserved</p>
          <div className="flex flex-col gap-4 text-xs text-gray-700 xl:flex-row">
            <div className="flex gap-2">
              <ReactSVG src={"assets/svg/address.svg"} />

              <span>264, Dr Annie Besant Rd, Worli Village Mumbai, Maharashtra
                400030</span>
            </div>
            <div className="flex gap-2">
              <ReactSVG src={"assets/svg/address.svg"} />
              <span>7 Khullar Farms, Mandi Road, Mehrauli, New Delhi, Delhi 110030</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;