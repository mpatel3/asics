import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { offer } from "../assets/images";


const SpecialOffers = () => {
  return (
    <section id="special-offers" className="max-container flex justify-wrap items-center gap-10 xl:flex-row-reverse flex-col">

    <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold capitalize font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        
        <p className="mt-4 info-text lg:max-w-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        
        <p className="mt-6 info-text lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Show now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
    </div>
    <div className="flex-1">
      <img
        src={offer}
        alt="Offers"
        width={773}
        height={687}
        className="object-contain w-full"
      />
    </div>
    </section>
  )
}

export default SpecialOffers