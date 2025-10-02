import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora SEO Documentation - Aurora Software Labs",
  description:
    "Complete documentation for aurora-seo, a lightweight SEO utility package for Next.js and React apps. Learn how to manage meta tags, social previews, and structured data with clean, declarative syntax.",
  keywords: [
    "aurora-seo",
    "documentation",
    "Next.js SEO",
    "React SEO",
    "meta tags",
    "open graph",
    "social media previews",
    "structured data",
    "TypeScript SEO",
    "npm package",
    "Aurora Software Labs",
  ],
  openGraph: {
    title: "Aurora SEO Documentation",
    description:
      "Complete documentation for aurora-seo, a lightweight SEO utility package for Next.js and React apps.",
    url: "https://www.aurorasoftwarelabs.io/aurora-seo",
    siteName: "Aurora Software Labs",
    type: "website",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/aurora-seo-docs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aurora SEO Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora SEO Documentation",
    description:
      "Complete documentation for aurora-seo, a lightweight SEO utility package for Next.js and React apps.",
    images: ["https://www.aurorasoftwarelabs.io/aurora-seo-docs-og.jpg"],
  },
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io/aurora-seo",
  },
};
