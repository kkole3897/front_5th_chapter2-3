import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

interface TitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
))
Title.displayName = DialogPrimitive.Title.displayName

export default Title
