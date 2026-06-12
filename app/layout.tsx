import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cole Kirkpatrick | Operator, Builder & Creative",
  description:
    "Cole Kirkpatrick turns ambitious ideas into organized execution through operations, programs, products, and creative building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
