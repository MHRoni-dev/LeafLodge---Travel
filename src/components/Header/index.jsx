import Navbar from './Navbar';
import {motion} from 'framer-motion';

export default function Header() {
  return (
    <div>
        <Navbar />
        <div className='bg-gray-template h-16 flex justify-center items-center'>
          <span className='text-black '>Enjoy up to 24% off your stay, plus save an extra 10% when booking in the app. <motion.span className='text-lg font-semibold text-green-template  cursor-pointer' initial={{textDecoration : 'underline'}} whileTap={{textDecoration : 'none'}}>Learn More.</motion.span></span>
        </div>
        <img src='/header.png' className='w-full '/>
    </div>
  )
}
