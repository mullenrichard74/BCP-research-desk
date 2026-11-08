import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Black Capital Project | Research Desk",
  description: "Economic Power to the People. Follow capital. Verify opportunity.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
