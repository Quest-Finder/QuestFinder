import { cn } from '@/lib/utils'

interface FormTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function FormTitle({ className, children, ...props }: FormTitleProps) {
  return (
    <h1
      className={cn('text-center text-[32px] text-neutral-950 max-w-[46.023rem] mx-auto font-semibold leading-none', className)}
      {...props}
    >
      {children}
    </h1>
  )
}
export function FormTitleSkeleton() {
  return (
    <div
      className={cn(
        'mx-auto my-8 mb-4 h-8 w-full max-w-[900px] animate-pulse rounded-2xl bg-gray-200',
      )}
    />
  )
}
