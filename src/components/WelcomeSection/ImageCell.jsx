import { motion } from 'framer-motion';

export function ImageCell ({src, direction}) {
  return (
    <motion.div className='overflow-hidden'>
      <motion.img src={src} className='w-full' initial={{translateX : direction === 'left' ? '-100%' : '100%'}} whileInView={{translateX : 0}} transition={{duration: 0.75}}/>
    </motion.div>
  )
}