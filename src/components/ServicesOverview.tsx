import { useMemo, useState } from "react";
import { servicesList } from "../data/servicesList";
import { X } from "lucide-react";

type Service = { id: number; name: string }

const ServicesOverview = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  // first 4 services
  const topServices = useMemo(() => {
    const titleIds = new Set([1, 2, 3, 4])

    return servicesList.filter((s: Service) => titleIds.has(s.id));
  }, []);

  const serviceImages = [
    "/images/product-1.jpg",
    "/images/process-5.jpg",
    "/images/process-12.jpg",
    "/images/product-4.jpg",
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 sm:py:8">
        {/* Serving */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm sm:text-base text-gray-700">
            Proudly serving Orillia and surrounding areas, we deliver dependable workmanship and honest service on every project, big or small.
          </p>
        </div>

        {/* Commitment */}
        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Our Commitment
            </h2>
            <p className="mt-3 mx-auto max-w-3xl text-sm sm:text-base text-gray-600">
              At Natily Construction & Contracting, we’re committed to quality, safety, and customer satisfaction.
              With years of experience in residential and small commercial construction, we handle every phase — from demolition and cleanup to concrete, carpentry, and finishing work.
              We take pride in maintaining clear communication, on-time delivery, and a job site that’s always clean and safe.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Our Construction Services
              </h3>
            </div>

            <a
              href="/services"
              className="hidden sm:inline-flex rounded-xl border border-gray-200 bg-white px-4 py-2
                text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
            >
              View all services
            </a>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Left: service cards */}
            <div className="grid gap-4">
              {topServices.map((service) => (
                <div
                  key={service.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow:md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-base font-semibold text-gray-900">
                      {service.name}
                    </h4>
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                      Service
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: photo grid */}
            <div className="grid grid-cols-2 gap-4">
              {serviceImages.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImg(src)}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                >
                  <img 
                    src={src}
                    alt={`Service photo ${idx + 1}`}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  {/* overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"/>
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition">
                    Click to zoom
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 sm:hidden">
            <a
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-white hover:bg-gray-200 transition"
            >
              View all services
            </a>
          </div>
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
            {/* close modal */}
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
              alt="Expanded service photo"
              className="max-h-[80vh] w-full object-contain bg-gray-100"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesOverview;