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
              <motion.ul className='flex items-center gap-4 font-light'>
                {
                  Navlinks.map((link) => (
                    <motion.li key={link.title} className='relative overflow-hidden cursor-pointer' initial='rest' whileHover='hover' whileTap='tap'>
                      {link.title} 
                      <motion.div className='absolute left-0 bottom-0 h-px w-full bg-muted-foreground' variants={underLineAnimation} transition={{duration : 0.35}}/>
                    </motion.li>
                  ))
                }
              </motion.ul>
              <motion.button className='px-10 py-3 bg-green-template text-white ' whileHover={{scale : 1.05}} whileTap={{scale : 0.90}}>
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
    <div className='w-full h-11 font-prompt bg-black text-white flex items-center justify-between px-16'>
        {/* left side */}
        <div className='flex gap-2 items-center text-sm'>
          <img src={phoneIcon} />
          <span>1 OOO Leaf Lodge (1 XXX OOO XXXX)</span>
        </div>

        {/* right side  */}
        <div className='flex items-center gap-6  text-sm'>
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

