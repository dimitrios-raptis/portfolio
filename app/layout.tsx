import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';

import "./globals.css";
<Script src="https://kit.fontawesome.com/35b686dd9b.js" crossOrigin="anonymous"></Script>;

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

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
