import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

 
 const CustomerReviews = () => {
   return (
    <section>
      <h2 className="text-4xl text-center text-bold text-palanquin">What Our<span className="text-coral-red"> Customers </span>Say?</h2>
      <p className="text-lg text-center text-slate-gray info-text m-auto mt-3 max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review) => (
            <ReviewCard 
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))
        }
      </div>
    </section>
   )
 }
 
 export default CustomerReviews