import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={680} className="object-contain w-full"/>
      </div>
      <div>
        <h2 className="font-palanquin mt-10 text-4xl text-bold capitalize lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span> Offer
        </h2>
        <p className="font-montserrat text-slate-500 mt-6 leading-8 text-lg mb-14 sm:max-w-sm  lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex space-x-2">
          <Button label={`Shop now`} />
          <Button label={`View Detail`} backgroundColor={'bg-white'} textColor={'text-slate-gray'} borderColor={'border-black'} iconUrl={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer