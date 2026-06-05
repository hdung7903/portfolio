import type { Metadata } from "next";
import { Instrument_Serif, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import NavLinks from "./components/NavLinks";
import CustomCursor from "./components/CustomCursor";
import ClientEffects from "./components/ClientEffects";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hdung7903.id.vn"),
  title: "Hoàng Dũng — hdung7903 | Frontend & Fullstack Developer",
  description:
    "FPT University graduate specializing in JavaScript and TypeScript. I build clean, performant web applications — from polished UIs to scalable APIs. Available for freelance projects.",
  keywords: [
    "Hoàng Dũng",
    "hdung7903",
    "freelance developer",
    "frontend developer",
    "fullstack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "web developer Vietnam",
    "FPT University graduate",
  ],
  authors: [{ name: "Hoàng Dũng", url: "https://hdung7903.id.vn" }],
  creator: "Hoàng Dũng",
  publisher: "Hoàng Dũng",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hdung7903.id.vn",
    title: "Hoàng Dũng — hdung7903 | Frontend & Fullstack Developer",
    description:
      "FPT University graduate specializing in JavaScript and TypeScript. I build clean, performant web applications — from polished UIs to scalable APIs. Available for freelance projects.",
    siteName: "Hoàng Dũng Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hoàng Dũng — hdung7903 | Frontend & Fullstack Developer Portfolio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Dũng — hdung7903 | Frontend & Fullstack Developer",
    description:
      "FPT University graduate specializing in JavaScript and TypeScript. I build clean, performant web applications — from polished UIs to scalable APIs. Available for freelance projects.",
    images: ["/og-image.png"],
    creator: "@hdung7903",
  },
  alternates: {
    canonical: "https://hdung7903.id.vn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Custom neon cursor */}
        <CustomCursor />

        {/* Global JS-driven interactive effects */}
        <ClientEffects />

        {/* Sticky nav — anchored during View Transitions */}
        <nav style={{ viewTransitionName: "site-header" }}>
          <span className="logo">hdung7903.id.vn</span>
          <NavLinks />
        </nav>

        {children}

        <footer>
          <span className="footer-copy">© 2026 Hoàng Dũng — hdung7903</span>
          <span className="footer-copy">Built with React & Next.js</span>
        </footer>
      </body>
    </html>
  );
}
