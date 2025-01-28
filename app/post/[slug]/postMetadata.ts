import { Post } from "@/components/AllPosts";
import { Metadata } from "next";
import { siteInfo } from "@/config/siteInfo";

export const postMetadata = (postMeta: Post): Metadata => {
  return {
    title: {
      default: siteInfo.title,
      absolute: `${postMeta.title} | ${siteInfo.title}`,
    },
    description: postMeta.description,
    keywords: postMeta.tags,
    authors: [{ name: siteInfo.author.name, url: siteInfo.author.url }],
    publisher: siteInfo.author.name,
    creator: siteInfo.author.name,
    referrer: "origin-when-cross-origin",
    applicationName: siteInfo.title,
    generator: "Next.js",
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(siteInfo.appUrl),
    openGraph: {
      title: `${postMeta.title} | ${siteInfo.title}`,
      description: postMeta.description,
      url: `${siteInfo.appUrl}/post/${postMeta.slug}`,
      siteName: siteInfo.title,
      locale: "en_US",
      type: "article",
      publishedTime: new Date(postMeta.date).toISOString(),
      authors: [siteInfo.author.name],
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
      title: postMeta.title,
      description: postMeta.description,
      creator: siteInfo.author.name,
    },
    category: "technology",
  };
};
