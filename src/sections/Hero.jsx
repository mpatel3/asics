import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants.js";
import ShoeCard from "../components/ShoeCard.jsx";
import { useEffect, useState } from "react";

const Hero = () => {

  const [bigShowImg, setBigShowImg] = useState(bigShoe1);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setBigShowImg(shoes[(currentIndex + 1) % shoes.length].bigShoe)
  //     setCurrentIndex(prevIndex => (prevIndex + 1) % shoes.length)
  //   }, 1500);

  //   return () => clearInterval(intervalId);
  // }, [bigShowImg])

  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <p className="font-montserrat text-xl text-coral-red">Our Summer Collections</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading:[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="inline-block mt-3 text-coral-red ">Nike</span>  Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovatin for your active life.
        </p>

        <Button label="Show now" iconURL={arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">

          {
            statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{statistic.label}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img 
            src={bigShowImg} 
            alt="shoe colletion" 
            width={610} 
            height={502} 
            className="object-contain relative z-10" 
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[15%] max-sm:px-6">
            {
              shoes.map((shoe) => (
                <div key={shoe.bigShoe}>
                  <ShoeCard
                    imgURL = {shoe}
                    changeBigShoeImage={(shoe) => {setBigShowImg(shoe)}}
                    bigShoeImg={bigShowImg}
                  
                  />
                </div>
              ))
            }
          </div>
      </div>

    </section>
  )
}

export default Hero