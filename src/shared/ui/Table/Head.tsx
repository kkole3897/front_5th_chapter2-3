import { forwardRef } from "react"

interface HeadProps extends React.ComponentPropsWithoutRef<"th"> {}

const Head = forwardRef<HTMLTableCellElement, HeadProps>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
))
Head.displayName = "TableHead"

export default Head
