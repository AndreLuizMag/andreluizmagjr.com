import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <body
      className={`${inter.variable} ds-flex flow-row-nw justify-start align-stretch p-md`}
    >
      {children}

      <Header />
    </body>
  );
};

export default MainLayout;
