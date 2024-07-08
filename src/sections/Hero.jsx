import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section className="w-full flex gap-10 xl:flex-row flex-col justify-center min-h-screen">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className="text-xl text-coral-red"> Our Summer Collections</p>
        <h1 className="font-palanquin mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] text-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-500 mt-6 leading-8 text-lg mb-14 sm:max-w-sm">
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label={`Show now`} iconUrl={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-bold">{statistic.value}</p>
              <p className="text-montserrat leading-7 text-slate-gray">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center bg-primary bg-hero">
        <img 
          src={bigShoe1} 
          alt="shoes collections"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  )
}

export default Hero