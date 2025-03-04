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