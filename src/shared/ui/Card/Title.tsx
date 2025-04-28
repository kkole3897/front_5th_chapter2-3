import { forwardRef } from "react"

// TODO: CardTitle 컴포넌트 타입 정의
const Title = forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
))
Title.displayName = "CardTitle"

export default Title
