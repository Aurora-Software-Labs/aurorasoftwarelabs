import type { Metadata } from "next";

// Helper function to generate per-page metadata
export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const baseUrl = "https://www.aurorasoftwarelabs.io";
  return {
    title: `${title} | Aurora Software Labs`,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: `${title} | Aurora Software Labs`,
      description,
      url: `${baseUrl}${path}`,
      images: [
        {
          url: image ?? `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${title} | Aurora Software Labs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Aurora Software Labs`,
      description,
      images: [image ?? `${baseUrl}/opengraph-image.png`],
    },
  };
}
