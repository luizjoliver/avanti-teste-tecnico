import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight:[]
})
export const metadata: Metadata = {
  title: "Avanti 01",
  description: "Projeto 02 criado no teste técnico proposto pela Avanti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
