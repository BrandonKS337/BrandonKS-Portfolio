import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brandon KS",
  description:
    "Hi, Im Brandon KS and this is my website. Please feel free to look around and I hope we can connect soon to work on developing a project together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
    </html>
  );
}
