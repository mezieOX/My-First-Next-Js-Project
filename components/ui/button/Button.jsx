
import Link from 'next/link';


function Button({children, link, className = ""}) {
  return (
      <div>
          <Link href={link}><a className={`${className} text-white capitalize border-2 hover:bg-gray-800 active:scale-90 border-white rounded-lg font-bold  font-mono px-48 py-3 transition duration-150 ease-out bg-gray-700 hover:shadow-xl`}>{children}</a></Link>
    </div>
  )
}

export default Button