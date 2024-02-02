interface RootProps {
  children: React.ReactNode
}
export function Root({ children }: RootProps) {
  return (
    <header className='backgroundHeaderProfile h-48 w-full'> {children}</header>
  )
}
