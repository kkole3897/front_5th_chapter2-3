import { forwardRef } from "react"

// TODO: CardHeader 컴포넌트 타입 정의
const Header = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))
Header.displayName = "CardHeader"

export default Header
