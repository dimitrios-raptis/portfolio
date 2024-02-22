import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'

import "./globals.css";
<Script src="https://kit.fontawesome.com/35b686dd9b.js" crossOrigin="anonymous"></Script>

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimitrios Raptis portfolio",
  description: "This is my e-CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main>

          {children}
        </main>
      </body>
    </html>
  );
}
