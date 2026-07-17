import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/fees",
        destination: "/how-to-instruct",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/glossary",
        permanent: true,
      },
      {
        source: "/experts",
        destination: "/qualifications",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
