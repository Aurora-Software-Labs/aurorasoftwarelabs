import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aurora Software Labs | Digital Solutions & Web Development",
  description:
    "Aurora Software Labs is a Ghana-based software development agency crafting innovative, reliable, and scalable digital solutions for businesses and communities.",
  keywords:
    "software development, web development, Ghana, digital solutions, software consulting, e-commerce, web design",
  authors: [{ name: "Aurora Software Labs" }],
  creator: "Aurora Software Labs",
  publisher: "Aurora Software Labs",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aurora Software Labs | Digital Solutions & Web Development",
    description:
      "Crafting innovative, reliable, and scalable digital solutions that empower businesses and communities across Africa.",
    url: "https://aurorasoftwarelabs.com",
    siteName: "Aurora Software Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Software Labs | Digital Solutions & Web Development",
    description:
      "Crafting innovative, reliable, and scalable digital solutions that empower businesses and communities across Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
