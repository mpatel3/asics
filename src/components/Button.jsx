
const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth}) => {
  return (
    <button className={`flex flex-row justity-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : ` text-white border-coral-red bg-coral-red`} ${fullWidth && 'w-full'}`}>
        {label} 
        {
          iconURL ? <img 
                src={iconURL} 
                className="ml-2 rounded-full w-5 h-5"
                alt="arrow right icon"
            /> : ''
        }
        
    </button>
  )
}

export default Button