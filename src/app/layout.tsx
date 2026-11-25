import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import NavBar from "@/components/NavBar";
import { profile } from "@/data/content";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const title = `${profile.name} | Data Engineering & AI/ML`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhijitharavind.com"),
  title,
  description: profile.intro,
  openGraph: {
    title,
    description: profile.headline,
    url: "https://www.abhijitharavind.com",
    type: "website",
    images: [{ url: "/work/chess-game-review.jpg", width: 1536, height: 730 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.headline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
