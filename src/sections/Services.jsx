import ServiceCard from "../components/ServiceCard";
import { services } from "../constants.js";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {
          services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))
        }
    </section>
    // <section id="section" className="max-container">
    //   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
        
    //   </div>
    // </section>
  )
}

export default Services