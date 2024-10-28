import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function TextCell({children, direction, className}) {
  return (
    <div className='overflow-hidden'>
        <motion.div className={cn('w-full h-full flex flex-col justify-center items-center bg-green-light gap-8', className)}
           initial={{translateX : direction === 'left' ? '-100%' : '100%'}} whileInView={{translateX : 0}} transition={{duration: 0.75}}
      >{children}</motion.div>
    </div>
  )
}

export function TextCellTitle({children, className}) {
  return (
    <h6 className={cn('text-4xl px-12', className)}>{children}</h6>
  )
}

export function TextCellDescription({children, className}) {
  return (
    <p className={cn('text-xl px-12', className)}>{children}</p>
  )
}