import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"
import { X, Phone } from "lucide-react";
import { servicesList } from "../data/servicesList";
import { useState } from "react";


const Services = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const photos = [
    "/images/process-1.jpg",
    "/images/process-2.jpg",
    "/images/product-1.jpg",
    "/images/product-2.jpg",
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20 border-x border-white/20"  />

      {/* Page header */}
      <section className="bg-black border-x border-white/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Services
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white">
            From demolition and cleanup to concrete, framing, and finishing.
            We deliver clean workmanship, safe job sites, and clear communication
            from start to finish.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-black border-x border-white/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-14 sm:pb-16">
          <div className="grid grid-cols-2 gap-1">
            {servicesList.map((s) => (
              <div className="group rounded-2xl border border-gray-200 bg-black p-6 sm:p-7 shadow-sm transition-colors duration-300 ease-out hover:bg-[#ffde59]">
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 ease-out group-hover:text-black">{s.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio link */}
      <section className="bg-black border border-white/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-14 sm:pb-16">
          <div className="rounded-3xl bg-black p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  See Our Work
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Real projects, real results: explore the portfolio for more.
                </p>
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-xl bg-[#ffde59] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-200 active:bg-black transition"
              >
                <span className="text-black">View Portfolio</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {photos.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImg(src)}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                >
                  <img
                    src={src}
                    alt={`Work photo ${idx + 1}`}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-[#ffde59] px-3 py-1 text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition">
                    Click to zoom
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-x border-white/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-5">
          <div className="rounded-3xl  p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  Ready to start your project?
                </h3>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#ffde59] bg-[#ffde59] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-200 active:bg-black transition"
                >
                  <span className="text-black">Contact Us</span>
                </Link>

                <a
                  href="tel:7051234567"
                  className="inline-flex items-center justify-center rounded-xl border border-[#ffde59] bg-[#ffde59] px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-200 transition"
                >
                  <span className=" inline-flex text-black"><Phone />Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Zoom modal */}
      {activeImg && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImg(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImg(null)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={activeImg}
              alt="Expanded work"
              className="max-h-[80vh] w-full object-contain bg-gray-100"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Services;