import "./globals.css";

import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Tersicore",
  description: "Sito Web del coro Tersicore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
