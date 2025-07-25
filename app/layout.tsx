import type { Metadata } from "next";
import { Bebas_Neue,DM_Sans, Geist, Geist_Mono, Tinos } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const tinos = Tinos({
  weight: ['400', '700'], 
  variable: "--font-tinos",
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "700","800","900"],
  variable: "--font-dm-sans",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bible Character Quiz",
  description: "Take this Quiz and discover which biblical character reflects your wealth mindset and financial destiny.",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${dmSans.variable} ${tinos.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
