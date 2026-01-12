import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 border-white/20 backdrop-blur">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="../public/placeholder.svg"
                alt="Company Logo"
                className="w-12 h-12 object-contain "
              />
              <span className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-gray-700 transition">
                Natily Construction & Contracting
              </span>
            </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <motion.div className="flex items-center gap-8 text-sm font-medium">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition relative group cursor-pointer"
              >
                Home
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-gray-900 transition relative group cursor-pointer"
              >
                Services
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-gray-900 transition relative group cursor-pointer"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
              {/* <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition relative group cursor-pointer"
              >
                  About
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link> */}
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 transition relative group cursor-pointer"
              >
                  Contact
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
        
    </header>
  )
}

export default Header;