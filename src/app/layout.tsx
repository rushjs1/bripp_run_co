import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Broad Ripple Run Co. | Indianapolis Run Club",
  description:
    "A friendly Broad Ripple run club built around miles, community, and the Monon Trail.",
  openGraph: {
    title: "Broad Ripple Run Co.",
    description:
      "Casual Broad Ripple run crew. Monon Place start, Monon Trail miles, post-run beers in Indianapolis.",
    type: "website",
    locale: "en_US",
    siteName: "Broad Ripple Run Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Broad Ripple Run Co.",
    description:
      "Casual Broad Ripple run crew. Monon Place start, Monon Trail miles, post-run beers in Indianapolis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
