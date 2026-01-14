import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { X } from "lucide-react";

const Portfolio = () => {
  const processPhotos = useMemo(
    () => [
      "/images/process-1.jpg",
      "/images/process-2.jpg",
      "/images/process-3.jpg",
      "/images/process-4.jpg",
      "/images/process-5.jpg",
      "/images/process-6.jpg",
      "/images/process-7.jpg",
      "/images/process-8.jpg",
      "/images/process-9.jpg",
      "/images/process-10.jpg",
      "/images/process-11.jpg",
      "/images/process-12.jpg",
    ],
    []
  );

  const productPhotos = useMemo(
    () => [
      "/images/product-1.jpg",
      "/images/product-2.jpg",
      "/images/product-3.jpg",
      "/images/product-4.jpg",
      "/images/product-5.jpg",
      "/images/product-6.jpg",
      "/images/product-7.jpg",
    ],
    []
  );

  const [activeGroup, setActiveGroup] = useState<"process" | "product">("process");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = activeGroup === "process" ? processPhotos : productPhotos;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* spacer for fixed header */}
      <div className="h-20" />

      {/* Page header */}
      <section className="bg-black border border-white/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Portfolio
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-gray-200">
            Proof matters. Here’s a look at how we build, from careful prep and
            clean framing to finished results that hold up and look great.
          </p>

          {/* Toggle */}
          <div className="mt-6 inline-flex rounded-2xl border border-white/20 bg-black p-1">
            <button
              type="button"
              onClick={() => setActiveGroup("process")}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-out ${
                activeGroup === "process"
                  ? "bg-[#ffde59] text-black"
                  : "bg-black text-white hover:bg-gray-200 group-hover:text-black"
              }`}
            >
              The Process
            </button>
            <button
              type="button"
              onClick={() => setActiveGroup("product")}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-out ${
                activeGroup === "product"
                  ? "bg-[#ffde59] text-black"
                  : "bg-black text-white hover:bg-gray-200 group-hover:text-black"
              }`}
            >
              The Product
            </button>
          </div>
        </div>
      </section>

      {/* Section: The Process */}
      <section className="pt-5 bg-black border-x border-white/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-14 sm:pb-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white text-left">
                {activeGroup === "process" ? "The Process" : "The Product"}
              </h2>
              <p className="mt-2 max-w-3xl text-sm sm:text-base text-gray-500">
                {activeGroup === "process"
                  ? "In-progress photos that show prep, framing, demolition, and the work behind the finish."
                  : "Finished results: clean lines, solid structure, and attention to detail."}
              </p>
            </div>

            {/* little badge */}
            <span className="hidden sm:inline-flex rounded-full border border-[#ffde59] bg-[#ffde59] px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
              {images.length} Photos
            </span>
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, idx) => (
              <button
                key={`${activeGroup}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              >
                <img
                  src={src}
                  alt={`${activeGroup} photo ${idx + 1}`}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition">
                  Click to zoom
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Zoom modal (simple for now; you can add next/prev later) */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={images[activeIndex]}
              alt="Expanded work"
              className="max-h-[80vh] w-full object-contain bg-gray-100"
            />

            <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-center text-sm text-gray-700">
              {activeGroup === "process" ? "The Process" : "The Product"} •{" "}
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
