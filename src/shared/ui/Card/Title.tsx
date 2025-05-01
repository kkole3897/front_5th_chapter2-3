import { forwardRef } from "react"

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
))
Title.displayName = "CardTitle"

export default Title
