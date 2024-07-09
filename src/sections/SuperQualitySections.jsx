import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQualitySections = () => {
  return (
    <section id='about-us' className="flex justify-beetween max-lg:flex-col items-center gap-6 w-full max-container">
      <div>
        <h2 className="font-palanquin mt-10 text-4xl text-bold capitalize lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Super Quality</span> Shoes
        </h2>
        <p className="font-montserrat text-slate-500 mt-6 leading-8 text-lg mb-14 sm:max-w-sm  lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label={`View Detail`} iconUrl={arrowRight} />
        </div>
      </div>
      <div className="flex justify-center flex-1 items-center">
        <img src={shoe8} alt="shoes" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQualitySections