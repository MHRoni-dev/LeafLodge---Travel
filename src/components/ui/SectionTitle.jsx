import { cn } from '@/lib/utils';

export default function SectionTitle({title, className}) {
  return (
    <h4 className={cn('text-5xl text-center text-black', className)}>{title}</h4>
  )
}
