import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "xbrainstewx",
  description: "xbrainstewx",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        {children}
        <div
          style={{ 
            textAlign: "center"
          }}
        >
          <iframe
            width="300"
            height="150"
            src="https://www.youtube.com/embed/lI6bA8eSYag?si=vonzLiDJirjPZeLT"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: "sticky"
            }}
          ></iframe>
        </div>
      </body>
    </html>
  );
}
