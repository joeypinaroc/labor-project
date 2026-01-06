import {Check} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero banner */}
      <div className=" relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <img src="/placeholder.svg"/>

        <div>

        </div>
      </div>

      {/* 3 columns */}
      {/* <div className="grid grid-cols-3">
        <div className="border">
          <span>General Contracting – Concrete, carpentry, framing, finishing</span>
        </div>

        <div className="border">
          <span>Demolition & Cleanup – Safe, fast, and efficient site clearing.</span>
        </div>

        <div className="border">
          <span>Renovation & Repairs – Interior and exterior improvements.</span>
        </div>
      </div> */}

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left-side: 3 columns */}
        <div>
          <div className="border">
            <span>General Contracting – Concrete, carpentry, framing, finishing</span>
          </div>
          <div className="border">
            <span>Demolition & Cleanup – Safe, fast, and efficient site clearing.</span>
          </div>
          <div className="border">
            <span>Renovation & Repairs – Interior and exterior improvements.</span>
          </div>
        </div>
        
        {/* Right-side: Highlights */}
        <div className="">
          <div className="flex items-start gap-3 p-3 rounded-sm bg-green">
            <div className="flex-shrink-0 w-5 h-5">
              <Check />
            </div>
            <span>Fully insured and WSIB covered</span>

            <div className="flex-shrink-0 w-5 h-5">
              <Check />
            </div>
            <span>Locally owned and operated in Orillia, Ontario</span>

            <div className="flex-shrink-0 w-5 h-5">
              <Check />
            </div>
            <span>Transparent pricing — no surprises</span>

            <div className="flex-shrink-0 w-5 h-5">
              <Check />
            </div>
            <span>Skilled, safety-trained professionals</span>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero;