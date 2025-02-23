"use client";

import { Roboto_Slab, Shrikhand } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer
      className={`bottom-0 w-full p-10 bg-gray-50 dark:bg-gray-500 dark:text-white ${robotoSlab.className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2
              className={`text-2xl mb-4 text-gray-600 dark:text-gray-300 ${shrikhand.className}`}
            >
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We provide cutting-edge solutions for modern businesses. Our CRM
              platform helps you manage customer relationships efficiently.
            </p>
          </div>

          <div>
            <h2
              className={`text-2xl mb-4 text-gray-600 dark:text-gray-300 ${shrikhand.className}`}
            >
              Quick Links
            </h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Next CRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
