import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep Sense - Industrial-Grade Fraud Prevention",
  description: "Secure your financial platform with Deep Sense AI - the world's most advanced fraud detection infrastructure.",
  other: {
    "deepsense-application": "tenant-ui",
    "deepsense-build": process.env.NEXT_PUBLIC_DEEPSENSE_BUILD_ID || "development",
    "deepsense-route-family": "/dashboard",
    "deepsense-api-base": process.env.NEXT_PUBLIC_SANDBOX_API_URL || "http://localhost:8000",
    "deepsense-environment": process.env.NEXT_PUBLIC_DEEPSENSE_ENVIRONMENT || "development",
  },
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
