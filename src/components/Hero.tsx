import {Check} from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-black border-x border-x-white/20">
      {/* Hero banner */}
      <div className="relative">
        {/* image frame */}
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 pt-24">
          <div className="relative overflow-hidden rounded-xl border border-white/20 bg-black shadow-sm">
            <img src="/images/hero1.jpg" className='h-[70vh] w-full object-cover'/>

            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

            {/* overlay */}
            <div className='absolute inset-x-0 bottom-0 p-4 sm:p-8'>
              <div className='max-w-xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 sm:p-6 text-left shadow-sm'>
                <p className='text-xs uppercase tracking-widest text-white/80 hover:text-[#ffde59]'>Orillia, Ontario</p>
                <h1 className='mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white hover:text-[#ffde59] transition break-words'>
                  Quality Work
                </h1>

                {/* Highlights */}
                <div className='mt-4 flex flex-wrap gap-2'>
                  <span className='rounded-full bg-[#ffde59]/60 px-3 py-1 text-xs sm:text-sm text-white'>
                    General Contracting
                  </span>
                  <span className='rounded-full bg-[#ffde59]/60 px-3 py-1 text-xs sm:text-sm text-white'>
                    Demolition & Cleanup
                  </span>
                  <span className='rounded-full bg-[#ffde59]/60 px-3 py-1 text-xs sm:text-sm text-white'>
                    Renovations & Repairs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-[1440px] px-6 lg:px-12 py-4'> 
          <div className='grid gap-8 lg:grid-cols-2'>
            {/* Left: Highlights */}
            <div className='grid gap-4'>
              <div className='rounded-2xl border border-white/20 bg-black p-6 shadow-sm'>
                <h3 className='text-lg font-semibold text-white '>
                  General Contracting
                </h3>
                <p className='mt-2 text-sm text-gray-200'>
                  Concrete, carpentry, framing, finishing
                </p>
              </div>

              <div className='rounded-2xl border border-white/20 bg-black p-6 shadow-sm'>
                <h3 className='text-lg font-semibold text-white'>
                  Demolition & Cleanup
                </h3>
                <p className='mt-2 text-sm text-gray-200'>
                  Safe, fast, and efficient site clearing.
                </p>
              </div>

              <div className='rounded-2xl border border-white/20 bg-black p-6 shadow-sm'>
                <h3 className='ext-lg font-semibold text-white'>
                  Renovation & Repairs
                </h3>
                <p className='mt-2 text-sm text-gray-200'>
                  Interior and exterior improvements.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className='rounded-2xl border border-white/20 bg-black p-6 shadow-sm'>
             
              <ul className='mt-5 space-y-4'>
                <li className='flex items-start gap-3'>
                  <span className='mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#ffde59] bg-[#ffde59]'>
                    <Check className='h-4 w-4 text-gray-900' />
                  </span>
                  <span className='text-sm text-white'>Fully insured and WSIB covered</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#ffde59] bg-[#ffde59]'>
                    <Check className='h-4 w-4 text-gray-900' />
                  </span>
                  <span className='text-sm text-white'>Locally owned and operated in Orillia, Ontario</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#ffde59] bg-[#ffde59]'>
                    <Check className='h-4 w-4 text-gray-900' />
                  </span>
                  <span className='text-sm text-white'>Transparent pricing, no surprises</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#ffde59] bg-[#ffde59]'>
                    <Check className='h-4 w-4 text-gray-900' />
                  </span>
                  <span className='text-sm text-white'>Skilled, safety-trained professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;