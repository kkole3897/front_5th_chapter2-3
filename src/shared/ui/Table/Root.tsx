import { forwardRef } from "react"

interface RootProps extends React.ComponentPropsWithoutRef<"table"> {}

const Root = forwardRef<HTMLTableElement, RootProps>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table ref={ref} className={`table-fixed w-full caption-bottom text-sm ${className}`} {...props} />
  </div>
))
Root.displayName = "Table"

export default Root
