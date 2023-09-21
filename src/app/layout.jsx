import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "FL Keys Rental",
  description: "Lorem ipsum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
