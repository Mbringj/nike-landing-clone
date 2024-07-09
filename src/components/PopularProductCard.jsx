import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full">
      <img src={imgURL} alt={name} className="h-[280px] w-[280px]" />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="text-xl leanding-normal font-montserrat text-slate-gray">(4.5)</p>
      </div>
      <h3 className="text-semibold text-2xl text-palanquin mt-2">{name}</h3>
      <p className="font-montserrat text-coral-red text-xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard