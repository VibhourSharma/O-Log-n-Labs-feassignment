import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather Information",
  description: "Stay ahead with the weather information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
