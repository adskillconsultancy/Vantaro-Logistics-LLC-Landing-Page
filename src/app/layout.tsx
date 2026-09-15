import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vantaro Logistics LLC – Direct Freight Solutions",
  description:
    "Vantaro Logistics LLC delivers reliable, efficient direct freight solutions across the nation. Get your cargo moving with speed and precision.",
  keywords: ["logistics", "freight", "shipping", "Vantaro", "direct freight solutions"],
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
