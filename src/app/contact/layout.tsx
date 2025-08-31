import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aurora Software Labs",
  description:
    "Get in touch with Aurora Software Labs for your digital transformation needs. We're here to help your business grow with cutting-edge solutions.",
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io/contact",
  },
  openGraph: {
    title: "Contact — Aurora Software Labs",
    description:
      "Get in touch with Aurora Software Labs for your digital transformation needs. We're here to help your business grow with cutting-edge solutions.",
    url: "https://www.aurorasoftwarelabs.io/contact",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact — Aurora Software Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Aurora Software Labs",
    description:
      "Get in touch with Aurora Software Labs for your digital transformation needs. We're here to help your business grow with cutting-edge solutions.",
    images: ["https://www.aurorasoftwarelabs.io/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
