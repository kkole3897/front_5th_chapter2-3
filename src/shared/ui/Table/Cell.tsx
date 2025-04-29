import { forwardRef } from "react"

interface CellProps extends React.ComponentPropsWithoutRef<"td"> {}

const Cell = forwardRef<HTMLTableCellElement, CellProps>(({ className, ...props }, ref) => (
  <td ref={ref} className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
))
Cell.displayName = "TableCell"

export default Cell
