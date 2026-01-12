import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Copyright */}
          <span className="text-sm text-gray-600">
            2026 All rights reserved
          </span>

          {/* Right: links */}
          <div className="flex items-center gap-6">
            <Link
              
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Privacy Policy
            </Link>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5"/>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;