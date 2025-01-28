import { Metadata } from "next";
import {siteInfo} from "@/config/siteInfo";

export const siteMetadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,

  keywords: siteInfo.keywords,
  authors: [{ name: siteInfo.author.name, url: siteInfo.author.url }],
  publisher: siteInfo.author.name,
  creator: siteInfo.author.name,
  referrer: "origin-when-cross-origin",
  applicationName: siteInfo.title,
  generator: "Next.js",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(siteInfo.appUrl),
  openGraph: {
    title: siteInfo.title,
    description: siteInfo.description,
    url: siteInfo.appUrl,
    siteName: siteInfo.title,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: siteInfo.title,
    description: siteInfo.description,
    creator: siteInfo.author.name,
  },
  category: "technology",
};
