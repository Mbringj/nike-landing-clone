
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
        <img src={imgURL} alt={label} height={24} width={24}/>
        
      </div>
      <h3 className="text-bold font-palanquin text-3xl leanding-normal mt-3">{label}</h3>
      <p className="font-montserrat leading-normal break-words text-lg text-slate-gray mt-3">{subtext}</p>
    </div>
  )
}

export default ServiceCard