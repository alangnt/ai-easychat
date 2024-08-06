import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Easy Chat",
  description: "AI EasyChat is a game-changer. Clone the repo, follow a few steps, and boom - you've got an AI chatbot on your NextJS app !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex justify-center items-center`}>{children}</body>
    </html>
  );
}
