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
                  <img src={twitter} alt="" />
                  <img src={facebook } alt="" />
                  <img src={instragram} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-2xl '>Company</h6>
              <div className='flex flex-col gap-1'>
                  <p>About Us</p>
                  <p>Career Opportunity</p>
                  <p>Global Brands</p>
                  <p>Hotel Development</p>
                  <p>Need Help?</p>
              </div>
            </div><div className='flex flex-col gap-2'>
              <h6 className='text-2xl '>Services</h6>
              <div className='flex flex-col gap-1'>
                  <p>Explore Hotels</p>
                  <p>Career Opportunity</p>
              </div>
            </div><div className='flex flex-col gap-2'>
              <h6 className='text-2xl '>Information</h6>
              <div className='flex flex-col gap-1'>
                  <p>Terms of Use</p>
                  <p>Privacy and Cookie Center</p>
                  <p>Do Not Sell or Share My Personal Information</p>
                  <p>Site Map</p>
              </div>
            </div>
        </div>
    </footer>
  )
}
