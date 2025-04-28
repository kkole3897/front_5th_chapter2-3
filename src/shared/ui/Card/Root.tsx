import { forwardRef } from "react"

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

const Root = forwardRef<HTMLDivElement, RootProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
))
Root.displayName = "Card"

export default Root
