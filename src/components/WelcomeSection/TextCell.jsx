import { cn } from '@/lib/utils'

export function TextCell({children, className}) {
  return (
    <div className={cn('w-full h-full flex flex-col justify-center items-center bg-green-light gap-8', className)}>{children}</div>
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