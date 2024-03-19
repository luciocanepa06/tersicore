import "./globals.css";


export const metadata = {
  title: "Tersicore",
  description: "Sito Web del coro Tersicore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
