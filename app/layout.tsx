import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navigation } from "@/components/navigation/Navigation";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const title = `${site.name} - ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: ["specialty coffee", "coffee shop", "cafe", "Hilongos", "Leyte", site.name],
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="micro fixed left-4 top-4 z-[100] -translate-y-20 bg-black px-4 py-3 text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
