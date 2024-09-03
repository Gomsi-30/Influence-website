import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

export const metadata: Metadata = {
  title: "Influencer Collaboration",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='body' >
        <Navbar />
        <main className='pt-[86px]'> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
