import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border border-white/20 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Copyright */}
          <span className="text-sm text-gray-500">
            2026 All rights reserved
          </span>

          {/* Right: links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              <span className="text-gray-500">Privacy Policy</span>
            </Link>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Facebook"
            >
              <span className="text-[#ffde59]"><Facebook className="h-5 w-5"/></span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Instagram"
            >
              <span className="text-[#ffde59]"><Instagram className="h-5 w-5" /></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;