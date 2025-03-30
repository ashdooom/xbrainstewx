import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import MusicPlayer from "./Components/MusicPlayer";
import Header from "./Components/Header";

const pixelifySans = localFont({
  src: "./fonts/PixelifySans-Regular.ttf",
  variable: "--font-pixelify-sans",
  display: "swap",
});


export const metadata = {
  title: "xbrainstewx",
  description: "welcome to my page <3",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/devil.gif" type="image/gif" />
      </head>
      <body className={`${pixelifySans.variable}`}>
        <Header />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}