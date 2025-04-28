import { forwardRef } from "react"

// TODO: CardContent 컴포넌트 타입 정의
const Content = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
Content.displayName = "CardContent"

export default Content
