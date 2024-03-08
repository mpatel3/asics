import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants.js";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-bold capitalize font-palanquin text-center">
        What our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-4 info-text m-auto max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className="flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col mt-24 max-lg:gap-16">
        {
          reviews.map((review) => (
            <CustomerReviewCard key={review.customerName} {...review} />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews