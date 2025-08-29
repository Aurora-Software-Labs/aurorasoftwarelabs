import { companyInfo } from "@/data";

export default function Head() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://www.aurorasoftwalabs.io",
    logo: "https://www.aurorasoftwalabs.io/auroraLogoLight.png",
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
      <link rel="canonical" href="https://www.aurorasoftwalabs.io/" />

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
        content="https://www.aurorasoftwalabs.io/og-image.png"
      />
      <meta property="og:url" content="https://www.aurorasoftwalabs.io/" />
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
        content="https://www.aurorasoftwalabs.io/og-image.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
    </>
  );
}
