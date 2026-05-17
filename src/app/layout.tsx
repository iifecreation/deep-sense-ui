import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep Sense - Industrial-Grade Fraud Prevention",
  description: "Secure your financial platform with Deep Sense AI - the world's most advanced fraud detection infrastructure.",
  icons: {
    icon: "/assets/logo/icon-bg.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
