import SectionTitle from '@/components/ui/SectionTitle';
import { cn, getTailwindColors } from '@/lib/utils';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import image01 from '/featureOne.png';

export default function FeatureSection() {
  const [activeLink, setActiveLink] = useState(0)
  const MenuLinks = ['LeafLodge-Philadelphia', 'LeafLodge-Boston', 'LeafLodge-New York', 'LeafLodge-Detroit', 'LeafLodge-Denver']
  const Images = [image01, image01, image01, image01, image01]
  const tailwindColors = getTailwindColors()
  const handleActive = (i) => {
    setActiveLink(i)
  }
  

  return (
    <div className='pt-20 min-h-screen'>
        <SectionTitle title="NEW AND FEATURED HOTELS" className="mb-12"/>
        <div className='flex flex-wrap px-8 gap-4 items-center justify-evenly lg:justify-center w-full lg:gap-12'>
        {
          MenuLinks.map((link, i) => (
            <MenuLink key={link} active={activeLink === i} onClick={()=>handleActive(i)} >{link}</MenuLink>
          ))
        }
        </div>
        <div className='mt-20 relative container mx-auto'>
          <div className='relative h-[60vh] overflow-hidden'>
              <AnimatePresence>
                  <motion.img key={activeLink} src={Images[activeLink]} alt="feature" className='absoulte object-cover w-full h-full' initial={{x : '100%', opacity: 0}} animate={{ x : 0, opacity : 1}} exit={{x: '-300%',opacity: 0}}transition={{duration : 0.3}} />
              </AnimatePresence>
          </div>
          <AnimatePresence>
          <motion.div key={activeLink} className={`absolute left-[15%] top-1/2 -translate-y-1/2 bg-white/90 px-8 lg:px-0 py-4 lg:py-16   lg:w-[440px] rounded-xl `} initial={{opacity : 0}} animate={{opacity : [0.0, 0.0, 0.2, 0.9] }} transition={{duration : 1.2}} >
            <p className='text-lg lg:text-2xl items-start lg:ml-16 '>
              LeafLodge Hotels <br /> and suites - Detroit
            </p>
            <motion.div className='border-2 border-muted-foreground text-base lg:text-lg ml-auto px-8 py-3 w-fit mt-4  lg:mx-0 lg:mt-12 lg:mr-16 cursor-pointer'
               whileHover={{
                  backgroundColor : tailwindColors.green['template'] ,
                  color: 'white',
                  borderColor: tailwindColors.green['template'] ,
                  scale : 1.05
                }}
                whileTap={{scale : 0.90}}
              >
              
              Book Now
            </motion.div>
          </motion.div>
          </AnimatePresence>
        </div>
    </div>
  )
}


function MenuLink ({children,onClick, active}) {

  return  (
    <div className={cn('w-fit border-b-2 pb-2 px-2 cursor-pointer ', active && 'border-black')} onClick={onClick}>
      <span>{children}</span>
    </div>
  )
}