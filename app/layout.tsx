import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<script src="https://kit.fontawesome.com/35b686dd9b.js" crossOrigin="anonymous"></script>

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
