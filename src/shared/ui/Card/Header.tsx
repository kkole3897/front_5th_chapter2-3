import { forwardRef } from "react"

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))
Header.displayName = "CardHeader"

export default Header
