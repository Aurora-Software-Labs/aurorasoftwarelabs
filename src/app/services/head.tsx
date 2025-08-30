import { services } from "@/data";

export default function Head() {
  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Aurora Software Labs",
      url: "https://www.aurorasoftwarelabs.io",
    },
    serviceType: services.map((s) => s.title).join(", "),
    description:
      "Comprehensive digital solutions including web development and software consulting.",
  };

  return (
    <>
      <title>Services — Aurora Software Labs</title>
      <meta
        name="description"
        content="Comprehensive digital solutions from web development to software consulting tailored to help African businesses grow."
      />
      <link rel="canonical" href="https://www.aurorasoftwarelabs.io/services" />

      <meta property="og:title" content="Services — Aurora Software Labs" />
      <meta
        property="og:description"
        content="Comprehensive digital solutions from web development to software consulting tailored to help African businesses grow."
      />
      <meta
        property="og:image"
        content="https://www.aurorasoftwarelabs.io/og-image.png"
      />
      <meta
        property="og:url"
        content="https://www.aurorasoftwarelabs.io/services"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Services — Aurora Software Labs" />
      <meta
        name="twitter:description"
        content="Comprehensive digital solutions from web development to software consulting tailored to help African businesses grow."
      />
      <meta
        name="twitter:image"
        content="https://www.aurorasoftwarelabs.io/og-image.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
    </>
  );
}
