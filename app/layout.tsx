import NavBar from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App with NextJS",
  description: "This is a simple application to learn about next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="h-screen">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
