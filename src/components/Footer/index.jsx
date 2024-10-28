import twitter from '@/assets/twitter.png'
import facebook from '@/assets/facebook.png'
import instragram from '@/assets/instragram.png'

export default function Footer() {
  return (
    <footer className='bg-green-light px-28 py-24'>
        <div className='grid grid-cols-4'>
            <div className='flex flex-col gap-2'>
                <h6 className='text-2xl'>Social media</h6>
                <div className='flex items-center gap-3 mt-1'>
                  <img src={twitter} alt="" className='hover:scale-105 cursor-pointer'/>
                  <img src={facebook } alt="" className='hover:scale-105 cursor-pointer'/>
                  <img src={instragram} alt="" className='hover:scale-105 cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-2xl '>Company</h6>
              <div className='flex flex-col gap-1'>
                  <p className='hover:underline cursor-pointer'>About Us</p>
                  <p className='hover:underline cursor-pointer'>Career Opportunity</p>
                  <p className='hover:underline cursor-pointer'>Global Brands</p>
                  <p className='hover:underline cursor-pointer'>Hotel Development</p>
                  <p className='hover:underline cursor-pointer'>Need Help?</p>
              </div>
            </div><div className='flex flex-col gap-2'>
              <h6 className='text-2xl '>Services</h6>
              <div className='flex flex-col gap-1'>
                  <p className='hover:underline cursor-pointer'>Explore Hotels</p>
                  <p className='hover:underline cursor-pointer'>Career Opportunity</p>
              </div>
            </div><div className='flex flex-col gap-2'>
              <h6 className='text-2xl '>Information</h6>
              <div className='flex flex-col gap-1'>
                  <p className='hover:underline cursor-pointer'>Terms of Use</p>
                  <p className='hover:underline cursor-pointer'>Privacy and Cookie Center</p>
                  <p className='hover:underline cursor-pointer'>Do Not Sell or Share My Personal Information</p>
                  <p className='hover:underline cursor-pointer'>Site Map</p>
              </div>
            </div>
        </div>
    </footer>
  )
}
