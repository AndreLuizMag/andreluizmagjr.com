import './style.css'

export const MainScroll = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="main-scroll flex-bgs radius-md bg-black-8 shadow-sm overflow-hidden">
      <div className="content width-100 height-100 overflow-auto">{children}</div>
    </div>
  )
}
