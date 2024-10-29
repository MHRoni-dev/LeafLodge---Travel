import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function TextCell({children, direction, className}) {
  return (
    <div className='overflow-hidden'>
        <motion.div className={cn('w-full h-full flex flex-col justify-center items-center bg-green-light gap-2 lg:gap-8 py-6 md:py-8 lg:py-12', className)}
           initial={{translateX : direction === 'left' ? '-100%' : '100%'}} whileInView={{translateX : 0}} transition={{duration: 0.75}}
      >{children}</motion.div>
    </div>
  )
}

export function TextCellTitle({children, className}) {
  return (
    <h6 className={cn('text-xl md:text-2xl lg:text-4xl px-8 lg:px-12', className)}>{children}</h6>
  )
}

export function TextCellDescription({children, className}) {
  return (
    <p className={cn('text-sm md:text-base lg:text-xl px-4 lg:px-12', className)}>{children}</p>
  )
}