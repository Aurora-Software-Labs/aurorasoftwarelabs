import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aurora Software Labs",
  description:
    "Learn about Aurora Software Labs: our mission, vision, and the team guiding digital transformation across Africa.",
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io/about",
  },
  openGraph: {
    title: "About — Aurora Software Labs",
    description:
      "Learn about Aurora Software Labs: our mission, vision, and the team guiding digital transformation across Africa.",
    url: "https://www.aurorasoftwarelabs.io/about",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "About — Aurora Software Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Aurora Software Labs",
    description:
      "Learn about Aurora Software Labs: our mission, vision, and the team guiding digital transformation across Africa.",
    images: ["https://www.aurorasoftwarelabs.io/og-image.png"],
  },
};
