import Navbar from './Navbar';

export default function Header() {
  return (
    <div>
        <Navbar />
        <div className='bg-gray-template h-16 flex justify-center items-center'>
          <span className='text-black '>Enjoy up to 24% off your stay, plus save an extra 10% when booking in the app. <span className='text-lg font-semibold text-green-template'>Learn More.</span></span>
        </div>
        <img src='/header.png' className='w-full '/>
    </div>
  )
}
