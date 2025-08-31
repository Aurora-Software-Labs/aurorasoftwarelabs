import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Aurora Software Labs",
  description:
    "Join our team of innovators and help shape the future of software development in Africa. Explore career opportunities at Aurora Software Labs.",
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io/careers",
  },
  openGraph: {
    title: "Careers — Aurora Software Labs",
    description:
      "Join our team of innovators and help shape the future of software development in Africa. Explore career opportunities at Aurora Software Labs.",
    url: "https://www.aurorasoftwarelabs.io/careers",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers — Aurora Software Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Aurora Software Labs",
    description:
      "Join our team of innovators and help shape the future of software development in Africa. Explore career opportunities at Aurora Software Labs.",
    images: ["https://www.aurorasoftwarelabs.io/og-image.png"],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
