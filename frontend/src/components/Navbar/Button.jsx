import { twMerge } from "tailwind-merge"

const Button = ({label, className, action}) => {
  return (
    <button onClick={action} className={
        twMerge("text-sm md:text-base px-2 bg-white rounded-xl font-semibold text-purple-900 w-auto hover:bg-purple-50"
        , className)
    }>
        {label}
    </button>
  )
}

export default Button