import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safegot — Secure checkout for African commerce",
    short_name: "Safegot",
    description:
      "Secure checkout and delivery verification for clearer buying and selling across Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: "#12b76a",
    icons: [
      {
        src: "/safegot_logo.png",
        sizes: "1254x1254",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
