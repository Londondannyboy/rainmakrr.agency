import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rainmakrr.agency";

  // Static pages
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    // Future pages - uncomment as they're created
    // { url: "/defi-recruitment", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/nft-recruitment", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/blockchain-recruitment", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/web3-jobs", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/crypto-salaries", priority: 0.8, changeFrequency: "monthly" as const },
    // { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    // { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
