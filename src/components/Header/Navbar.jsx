import phoneIcon from '@/assets/phone.svg';
import downArrowIcon from '@/assets/downArrow.svg';
import {motion} from 'framer-motion';
import { getTailwindColors } from '@/lib/utils';

export default function Navbar() {
  const Navlinks = [ 
    { title : 'Locations' },
    { title : 'Our Brand' },
    { title : 'Groups and events' },
    { title : 'Offers' },
    { title : 'Rewards' },
  ]
  const underLineAnimation = {
    rest : {translateX : '-100%'},
    hover: {translateX : '0'},
    tap: { translateY : '100px' }
  }
  return (
    <div className='flex flex-col'>
      <NavbarBanner />
      <div className='h-60 flex flex-col sm:flex-row lg:items-center sm:justify-between px-8 lg:px-16 xl:px-20 py-10 gap-12 max-w-screen-xl  xl:mx-auto xl:justify-between xl:w-full'>
          {/* left side  */}
          <div className='flex items-center justify-between'>
              <div className='flex items-center gap-8 md:pl-4  xl:pl-8 self-start lg:self-auto'>
                  <div className='w-8 h-8 bg-green-template rotate-45' />
                  <div className='flex flex-col items'>
                      <span>Leaf</span>
                      <br />
                      <span>Lodge</span>
                  </div>
              </div>
              <motion.button className='sm:hidden px-10 py-3 bg-green-template text-white ml-auto' whileHover={{scale : 1.05}} whileTap={{scale : 0.90}}>
                    <span>Book Now</span>
              </motion.button>
          </div>

          {/* right side  */}
          <div className='flex text-sm md:text-base lg:text-lg gap-4 md:gap-6 lg:gap-12 flex-wrap lg:flex-nowrap w-full lg:w-fit'>
              <motion.ul className='flex items-center gap-4 font-light flex-wrap mx-auto md:mx-0 md:ml-auto'>
                {
                  Navlinks.map((link) => (
                    <motion.li key={link.title} className='relative overflow-hidden cursor-pointer' initial='rest' whileHover='hover' whileTap='tap'>
                      {link.title} 
                      <motion.div className='absolute left-0 bottom-0 h-px w-full bg-muted-foreground' variants={underLineAnimation} transition={{duration : 0.35}}/>
                    </motion.li>
                  ))
                }
              </motion.ul>
              <motion.button className='hidden sm:block h-fit w-fit px-10 py-3 bg-green-template text-white ml-auto text-nowrap' whileHover={{scale : 1.05}} whileTap={{scale : 0.90}}>
                <span>Book Now</span>
              </motion.button>
          </div>
      </div>
    </div>
  )
}



function NavbarBanner () {
  const tailwindColors = getTailwindColors()
  const underLineAnimation = {
    rest : {translateX : '-100%'},
    hover: {translateX : '0'},
    tap: { translateY : '100px' }
  }
  return (
    <div className='w-full sm:h-11 font-prompt bg-black text-white flex flex-col-reverse sm:flex-row gap-2  sm:items-center sm:justify-between px-4 py-4 sm:py-0 md:px-8  lg:px-12 '>
        {/* left side */}
        <marquee className='relative sm:hidden gap-2 items-center text-xs md:text-sm h-4 '>
          <img src={phoneIcon} className='absolute left-0'/>
          <span className='absolute left-4'>1 OOO Leaf Lodge (1 XXX OOO XXXX)</span>
        </marquee>
        <div className='hidden sm:flex gap-2 items-center sm:text-xs md:text-sm'>
          <img src={phoneIcon} className=''/>
          <span className=''>1 OOO Leaf Lodge (1 XXX OOO XXXX)</span>
        </div>

        {/* right side  */}
        <div className='flex items-center gap-6 text-xs  md:text-sm  justify-end'>
            <button className='flex items-center gap-2'>
                <span>English</span>
                <img src={downArrowIcon} />
            </button>
            <motion.button className='relative overflow-hidden' initial='rest' whileHover='hover' whileTap='tap' >
                My stays
                <motion.div className='absolute left-0 bottom-0 h-px w-full bg-white ' variants={underLineAnimation} transition={{duration : 0.35}} />
            </motion.button>
            <motion.button className='border  px-2 ' 
              whileHover={
                { backgroundColor : tailwindColors.green["template"], 
                  borderColor : tailwindColors.green['template'], 
                  borderRadius : "2px"
                }
              }
              whileTap={{borderColor : 'white'}}>
                Join free
            </motion.button>
            <motion.button className='bg-green-template px-2 border border-green-template'
              whileHover={
                { borderColor : 'white'}
              }
              whileTap= {{
                borderColor : tailwindColors.green['template']
              }}>
                Sign in
            </motion.button>
        </div>
    </div>
  )
}

