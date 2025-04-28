import { forwardRef } from "react"

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const Content = forwardRef<HTMLDivElement, ContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
Content.displayName = "CardContent"

export default Content
