interface HeaderProps extends React.ComponentPropsWithoutRef<"div"> {}

const Header = ({ className, ...props }: HeaderProps) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
)
Header.displayName = "DialogHeader"

export default Header
