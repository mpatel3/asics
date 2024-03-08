import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">

      <div className="flex flex-1 flex-col max-md:text-center">
          <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
            We Provide You&nbsp;
            <span className="text-coral-red">Super Quality</span> Shoes
          </h2>
          
          <p className="mt-4 lg:max-w-lg info-text">Ensuring permium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance</p>
          
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction.</p>
          
          <div className="mt-11 max-md:m-auto">
            <Button label="View details"/>
          </div>
    
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="About US"
          height={522}
          width={570}
          className="object-contain max-md:m-auto"
        />
      </div>
    </section>
  )
}

export default SuperQuality