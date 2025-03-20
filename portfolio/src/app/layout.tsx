import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Carl Markegång",
  description: "Carl Markegångs Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BPX3LGXG6E"></script>
      <script src="/gtag.js"></script>
      </head>
      <body>
        <div className="portfolio-main-wrap">
          <Header />
          <div className="portfolio-main-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}