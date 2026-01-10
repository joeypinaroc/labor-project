import Header from "../components/Header";
import { servicesList } from "../data/servicesList";


const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div>
        <ul>
          <li>Demolition & Site Cleanup</li>
          <li>Concrete Work</li>
          <li>Foundations, walkways, slabs, driveways, and repairs.</li>
          <li>Carpentry & Framing</li>
          <li>Custom woodwork, framing, drywall installation, and trim.</li>
          <li>Renovations & Repairs</li>
          <li>Kitchen, basement, bathroom, and exterior updates.</li>
          <li>General Contracting</li>
          <li>Full project coordination from planning to completion.</li>
          <li>Exterior Work</li>
          <li>Decks, fences, patios, and siding repair.</li>
        </ul>
      </div>
    </div>
  )
}

export default Services;