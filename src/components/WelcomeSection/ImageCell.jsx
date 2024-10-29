import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function ImageCell ({src, direction, className}) {
  return (
    <motion.div className={cn('overflow-hidden mt-4 sm:mt-0 border sm:border-0 border-b-0', className)}>
      <motion.img src={src} className='w-full h-full object-cover' initial={{translateX : direction === 'left' ? '-100%' : '100%'}} whileInView={{translateX : 0}} transition={{duration: 0.75}}/>
    </motion.div>
  )
}