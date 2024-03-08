import { star } from "../assets/icons";

const ProductCard = ({imgURL, name, rating, price}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full max-sm:items-center">
        <img
            src={imgURL}
            alt={name}
            className="w-[282px] h-[282px] max-sm:w-[350px] max-sm:h-[350px]"

        />
        <div className="flex justify-start mt-8 gap-2.5">
            <img
                src={star}
                alt="Rating"
                height={24}
                width={24}
            />
            <span className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</span>
        </div>
        <h3 className="text-2xl font-palanquin leading-normal font-semibold mt-2">{name}</h3>
        <p className="mt-2 font-montserrat text-coral-red text-2xl leading-normal font-semibold">{price}</p>
    </div>
  )
}

export default ProductCard