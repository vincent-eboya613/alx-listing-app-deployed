// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Column 1 */}
          <div className="mb-4 md:mb-0">
            <h3 className="mb-2 text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              We connect you with luxury properties around the world.
            </p>
          </div>
          {/* Column 2 */}
          <div className="mb-4 md:mb-0">
            <h3 className="mb-2 text-lg font-semibold">Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Social</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} MyListingApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
