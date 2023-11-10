import { Wrapper } from "@/components/admin/Wrapper";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Oaks Intelligence",
  description: "Tech Startup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/oaks-icon.png" />
      </head>
      <body>
        <Wrapper>{children}</Wrapper>
        <Analytics />
      </body>
    </html>
  );
}
