import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Aurora Software Labs",
  description:
    "Comprehensive digital solutions from web development to software consulting tailored to help African businesses grow.",
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io/services",
  },
  openGraph: {
    title: "Services — Aurora Software Labs",
    description:
      "Comprehensive digital solutions from web development to software consulting tailored to help African businesses grow.",
    url: "https://www.aurorasoftwarelabs.io/services",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Services — Aurora Software Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Aurora Software Labs",
    description:
      "Comprehensive digital solutions from web development to software consulting tailored to help African businesses grow.",
    images: ["https://www.aurorasoftwarelabs.io/og-image.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
