import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { MainScroll} from '@component/MainScroll'

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <MainScroll>
        {children}
      </MainScroll>
      <Header />
    </>
  );
};

export default MainLayout;
