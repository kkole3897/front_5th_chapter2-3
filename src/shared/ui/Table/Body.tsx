import { forwardRef } from "react"

interface BodyProps extends React.ComponentPropsWithoutRef<"tbody"> {}

const Body = forwardRef<HTMLTableSectionElement, BodyProps>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
))
Body.displayName = "TableBody"

export default Body
