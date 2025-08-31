import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Aurora Software Labs",
  description:
    "Discover our featured projects and digital solutions showcasing our expertise in web development and software consulting.",
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io/portfolio",
  },
  openGraph: {
    title: "Portfolio — Aurora Software Labs",
    description:
      "Discover our featured projects and digital solutions showcasing our expertise in web development and software consulting.",
    url: "https://www.aurorasoftwarelabs.io/portfolio",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio — Aurora Software Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Aurora Software Labs",
    description:
      "Discover our featured projects and digital solutions showcasing our expertise in web development and software consulting.",
    images: ["https://www.aurorasoftwarelabs.io/og-image.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
