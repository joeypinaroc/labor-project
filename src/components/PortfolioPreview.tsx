import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const PortfolioPreview = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const images = [
    "../public/images/product-5.jpg",
    "../public/images/product-6.jpg",
    "../public/images/product-7.jpg",
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Recent Work
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-600">
              A quick look at real projects.
            </p>
          </div>
          
          {/* Go to Portfolio */}
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-200 transition"
          >
            View Portfolio
          </Link>
        </div>

        {/* Image grid */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImg(src)}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              <img 
                src={src}
                alt={`Project photo ${idx + 1}`}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"/>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                {/* <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900">
                  Project {idx + 1}
                </span> */}
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition">
                  Click to zoom
                </span>
              </div> 
            </button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-900">
            Want to see more projects like these? Browse the full gallery!
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>

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
              alt="Expanded project"
              className="max-h-[80vh] w-full object-contain bg-gray-100"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioPreview;