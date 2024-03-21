import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Tersicore",
  description: "Sito Web del coro Tersicore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
