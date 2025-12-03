import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "helix-css";
import "helix-color";
import "../styles/main.css";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Luiz",
  description: "My portfolio website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3c21baa8-a7ff-419c-8bc2-839eb12fa763"
        />
      </head>
      <body
        className={`${inter.variable} ds-flex flow-row-nw justify-start align-stretch p-md`}
      >
        {children}

        <Header />
      </body>
    </html>
  );
};

export default RootLayout;
