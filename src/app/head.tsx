import { companyInfo } from "@/data";

export default function Head() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://www.aurorasoftwarelabs.io",
    logo: "https://www.aurorasoftwarelabs.io/auroraLogoLight.png",
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: companyInfo.location,
    },
  };

  return (
    <>
      <title>
        Aurora Software Labs — Crafting Digital Excellence for Africa
      </title>
      <meta
        name="description"
        content="Guiding Africa's tech frontier like the Northern Lights—illuminating innovation, unlocking opportunity, and driving digital transformation."
      />
      <link rel="canonical" href="https://www.aurorasoftwarelabs.io/" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Aurora Software Labs — Crafting Digital Excellence for Africa"
      />
      <meta
        property="og:description"
        content="Guiding Africa's tech frontier like the Northern Lights—illuminating innovation, unlocking opportunity, and driving digital transformation."
      />
      <meta
        property="og:image"
        content="https://www.aurorasoftwarelabs.io/og-image.png"
      />
      <meta property="og:url" content="https://www.aurorasoftwarelabs.io/" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Aurora Software Labs — Crafting Digital Excellence for Africa"
      />
      <meta
        name="twitter:description"
        content="Guiding Africa's tech frontier like the Northern Lights—illuminating innovation, unlocking opportunity, and driving digital transformation."
      />
      <meta
        name="twitter:image"
        content="https://www.aurorasoftwarelabs.io/og-image.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
    </>
  );
}
