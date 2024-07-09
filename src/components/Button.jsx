const Button = ({label, iconUrl, backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center leading-none px-7 py-4 border text-lg font-montserrat rounded-full ${
      backgroundColor ? `${textColor} ${backgroundColor} ${borderColor}`:
      "border-coral-red bg-coral-red text-white"
      } hover:bg-red-600`}>
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow icon" className="ml-2 rounded-full w-5 h-5 "/>}
    </button>
  )
}

export default Button;