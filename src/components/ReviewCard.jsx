import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center text-slate-gray max-lg:m-auto mt-3 info-text">{feedback}</p>
      <div>
        <img 
          src={star} 
          alt="star"
          height={24}
          width={24}
          className="object-contain m-0"
        />
        <p>({rating})</p>
      </div>
      <h3 className="font-bold text-3xl font-palanquin max-lg:bg-center mt-1">{customerName}</h3>
    </div>
  )
}

export default ReviewCard