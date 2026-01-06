import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border border-white/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="../public/placeholder.svg"
                className="w-16 h-16 "
              />
              <span>Company Name</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" style={{ fontWeight: 500 }}>
            <motion.div>
              <Link
                to="/"
                className="hover:text-[#8BA888] transition-all duration-200 relative group cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-[#8BA888] transition-all duration-200 relative group cursor-pointer"
              >
                  About
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-[#8BA888] transition-all duration-200 relative group cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                className="hover:text-[#8BA888] transition-all duration-200 relative group cursor-pointer"
              >
                Services
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
        
    </header>
  )
}

export default Header;