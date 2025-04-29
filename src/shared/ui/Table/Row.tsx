import { forwardRef } from "react"

interface RowProps extends React.ComponentPropsWithoutRef<"tr"> {}

const Row = forwardRef<HTMLTableRowElement, RowProps>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-14 ${className}`}
    {...props}
  />
))
Row.displayName = "TableRow"

export default Row
