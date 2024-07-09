import Button from "../components/Button"

const Subcribe = () => {
  return (
    <div className="flex flex-col">
      <h3 class="text-4xl leading-[68px] lg:max-w-[100%] my-2 font-palanquin font-bold block">Sign Up for<span class="text-coral-red"> Updates </span>Newsletter</h3>
      <div className="max-lg:max-w-[40%] w-full flex items-center max-sm:flex-col p-3 gap-5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subcribe@nike.com" className="input"/>
        <div className="max-sm:justify-end items-center flex max-sm:w-full">
          <Button label={`sign up`}/>
        </div>
      </div>
    </div>
  )
}

export default Subcribe