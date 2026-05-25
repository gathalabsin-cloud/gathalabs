import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  metadataBase: new URL("https://gathalabs.in"),

  title: {
    default: "Gatha Labs",
    template: "%s | Gatha Labs",
  },

  description:
    "Learn tech skills through project-based learning, beginner tutorials, blogs, and real-world education.",

  keywords: [
    "computer basics",
    "tech tutorials",
    "project based learning",
    "coding tutorials",
    "gatha labs",
    "learn technology",
    "beginner tech",
  ],

  authors: [
    {
      name: "Gatha Labs",
    },
  ],

  creator: "Gatha Labs",
  publisher: "Gatha Labs",

  openGraph: {
    title: "Gatha Labs",
    description:
      "Learn → Build → Earn through practical technology education.",
    url: "https://gathalabs.in",
    siteName: "Gatha Labs",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gatha Labs",
    description:
      "Project-based learning platform for modern tech education.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}