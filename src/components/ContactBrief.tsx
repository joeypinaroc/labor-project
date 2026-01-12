import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBrief = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-4 sm:py-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Contact Details */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Contact Us
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                  <MapPin className="h-4 w-4 text-gray-900"/>
                </span>
                <div>
                  <p className="text-sm text-left font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">84 Diana Drive, Orillia, ON L3V 0E2</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                  <Phone className="h-4 w-4 text-gray-900"/>
                </span>
                <div>
                  <p className="text-sm text-left font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+1 (647) 973 2356</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                  <Mail className="h-4 w-4 text-gray-900"/>
                </span>
                <div>
                  <p className="text-sm text-left font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">ncalliance@natily.onmicrosoft.com</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                  <Clock className="h-4 w-4 text-gray-900"/>
                </span>
                <div>
                  <p className="text-sm text-left font-medium text-gray-900">Hours</p>
                  <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 active:bg-black transition"
              >
                Contact Us
              </Link>

              <a
                href="tel:6479732356"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
              >
                <Phone />Call Now
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <iframe 
            title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.029405411888!2d-79.45902392333215!3d44.59642399091746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2aaebb5249fd1d%3A0x1d42e64a882b7203!2s84%20Diana%20Dr%2C%20Orillia%2C%20ON%20L3V%200E2!5e0!3m2!1sen!2sca!4v1768176799497!5m2!1sen!2sca" 
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-gray-200 bg-gray-50 p-4 text-center">
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition"
              >
                View full map & directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBrief;