import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 border-white/20 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex h-30 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                // src="/images/logo-1.jpg"
                src="/images/new_logo.jpg"
                alt="Company Logo"
                className="w-55 h-30 object-fill rounded-xl"
              />
              {/* <span className="text-lg font-semibold tracking-tight text-white group-hover:text-[#ffde59] transition">
                Natily Construction & Contracting
              </span> */}
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`transition ${
                    isActive ? "text-[#ffde59]" : "text-white hover:text-[#ffde59]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#ffde59] bg-[#ffde59] hover:bg-gray-50 transition"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5 text-gray-900"/>
          </button>
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 z-[60] bg-black/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
              
            {/* Panel */}
            <motion.aside
              className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
            >
              {/* Header row */}
              <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
                <span className="text-sm font-semibold tracking-tight text-gray-900">
                  Menu
                </span>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-900" />
                </button>
              </div>

              {/* Links */}
              <div className="px-5 py-5">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#ffde59] px-4 py-3 text-sm font-medium text-black hover:bg-gray-800 transition"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
        
    </header>
  )
}

export default Header;