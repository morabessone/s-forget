import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...props }) => {
  const style =
    'inline-flex items-center rounded-md border border-transparent bg-regal-green px-12 py-4 text-base font-medium text-white shadow-sm hover:bg-regal-green-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex flex-col items-center'
  return (
    <Link {...props} className={style + ' ' + className}>
      {children}
    </Link>
  )
}

export default Button
