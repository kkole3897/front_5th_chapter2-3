import { forwardRef } from "react"

interface HeaderProps extends React.ComponentPropsWithoutRef<"thead"> {}

const Header = forwardRef<HTMLTableSectionElement, HeaderProps>(({ className, ...props }, ref) => (
  <thead ref={ref} className={`[&_tr]:border-b ${className}`} {...props} />
))
Header.displayName = "TableHeader"

export default Header
