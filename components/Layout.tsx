type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-80 p-10 lg:p-24 w-full">{children}</div>
  )
}

export default Layout;