import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `Aurora Software Labs | The <span class="text-primary">Northern Lights</span> for Africa's Tech Frontier`,
  description: `Aurora Software Labs is the <span class="text-primary">northern lights</span> for Africa's tech frontier—guiding, inspiring, and illuminating the path to digital innovation across the continent.`,
  keywords:
    "software development, web development, Ghana, digital solutions, software consulting, e-commerce, web design",
  authors: [{ name: "Aurora Software Labs" }],
  creator: "Aurora Software Labs",
  publisher: "Aurora Software Labs",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `Aurora Software Labs | The <span class="text-primary">Northern Lights</span> for Africa's Tech Frontier`,
    description: `Aurora Software Labs is the <span class="text-primary">northern lights</span> for Africa's tech frontier—guiding, inspiring, and illuminating the path to digital innovation across the continent.`,
    url: "https://aurorasoftwarelabs.com",
    siteName: "Aurora Software Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Aurora Software Labs | The <span class="text-primary">Northern Lights</span> for Africa's Tech Frontier`,
    description: `Aurora Software Labs is the <span class="text-primary">northern lights</span> for Africa's tech frontier—guiding, inspiring, and illuminating the path to digital innovation across the continent.`,
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
