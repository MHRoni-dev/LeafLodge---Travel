import phoneIcon from '@/assets/phone.svg';
import downArrowIcon from '@/assets/downArrow.svg';

export default function Navbar() {
  return (
    <div className='flex flex-col'>
      <NavbarBanner />
      <div className='h-60 flex items-center justify-between px-20'>
          {/* left side  */}
          <div className='flex items-center gap-8 pl-8'>
              <div className='w-8 h-8 bg-green-template rotate-45' />
              <div className='flex flex-col items'>
                  <span>Leaf</span>
                  <br />
                  <span>Lodge</span>
              </div>
          </div>

          {/* right side  */}
          <div className='flex text-lg gap-12'>
              <ul className='flex items-center gap-4 font-light'>
                <li>Locations</li>
                <li>Our Brand</li>
                <li>Groups and events</li>
                <li>Offers</li>
                <li>Rewards</li>
              </ul>
              <div className='px-10 py-3 bg-green-template text-white '>
                <span>Book Now</span>
              </div>
          </div>
      </div>
    </div>
  )
}



function NavbarBanner () {
  return (
    <div className='w-full h-11 font-prompt bg-black text-white flex items-center justify-between px-16'>
        {/* left side */}
        <div className='flex gap-2 items-center text-sm'>
          <img src={phoneIcon} />
          <span>1 OOO Leaf Lodge (1 XXX OOO XXXX)</span>
        </div>

        {/* right side  */}
        <div className='flex items-center gap-6  text-sm'>
            <div className='flex items-center gap-2'>
                <span>English</span>
                <img src={downArrowIcon} />
            </div>
            <div>
                <span>My stays</span>
            </div>
            <div>
                <span className='border px-2 '>Join free</span>
            </div>
            <div>
                <span className='bg-green-template px-2 border border-green-template'>Sign in</span>
            </div>
        </div>
    </div>
  )
}

