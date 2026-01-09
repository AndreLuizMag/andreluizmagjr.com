'use client'
import { Inter } from "next/font/google";
import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/Header";
import { initConsoleEasterEgg } from "@/components/DeepThought";
import "./styles.css";

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
      className={`${inter.variable} ds-flex flow-row-nw lg:flow-col-nw justify-start align-stretch gap-md sm:gap-xs p-md sm:p-x`}
    >
      {children}

      <Header />
    </body>
  );
};

export default MainLayout;
