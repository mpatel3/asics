import { star } from "../assets/icons";

const CustomerReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
        <img
            src={imgURL}
            alt="Customer"
            height={120}
            width={120}
            className="object-cover rounded-full"
        />
        <p className="mt-6 max-w-sm text-center info-text">
            {feedback}
        </p>
        <div className="flex justify-center items-center mt-3 gap-2.5">
            <img
                src={star}
                alt="Rating"
                height={24}
                width={24}
                className="object-contain m-0"
            />
            <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
        </div>
        <h3 className="text-3xl font-bold font-palanquin mt-1 text-center">
            {customerName}
        </h3>

    </div>
  )
}

export default CustomerReviewCard;