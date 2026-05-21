import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnHub - Master New Skills",
  description: "Learn programming, languages, and more with interactive courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
