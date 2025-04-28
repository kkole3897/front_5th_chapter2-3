import { forwardRef } from "react"

// TODO: Root 컴포넌트 타입 정의
const Root = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
))
Root.displayName = "Card"

export default Root
