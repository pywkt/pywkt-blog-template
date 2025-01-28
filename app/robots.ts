import { MetadataRoute } from "next";
import { siteInfo } from "@/config/siteInfo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteInfo.appUrl}/sitemap.xml`
  }
}
