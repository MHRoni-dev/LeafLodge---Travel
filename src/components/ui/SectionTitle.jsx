import { cn, getTailwindColors } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function SectionTitle({title, className}) {
  const tailwindColors = getTailwindColors()
  return (
    <motion.h4 className={cn('text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center text-black', className)} whileHover={{color : tailwindColors.green['template']}}>{title}</motion.h4>
  )
}
