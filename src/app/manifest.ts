import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aurora Software Labs",
    short_name: "Aurora Labs",
    description:
      "Ghana-based software development agency crafting innovative digital solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#123524",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
