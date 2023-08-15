import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "~/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Practice",
  description: "Practice coding problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-900">
      <body className={inter.className}>
        <Header />
        <div className="pt-6">{children}</div>
      </body>
    </html>
  );
}
