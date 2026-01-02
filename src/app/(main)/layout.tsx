'use client'
import { Inter } from "next/font/google";
import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/Header";
import { initConsoleEasterEgg } from "@/components/DeepThought";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  useEffect(() => {
    initConsoleEasterEgg();
  }, []);
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
