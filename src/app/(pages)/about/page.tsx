import Container from "@/components/common/Container";
import { Reveal } from "@/components/common/reveal";

// CertificatesSection is temporarily disabled per request
// import CertificatesSection from "@/components/sections/about/Certificate";
import Education from "@/components/sections/about/Education";
import Info from "@/components/sections/about/info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Aman Kushwaha",
  description:
    "Explore more about Aman Kushwaha, including his education, certifications, and skills.",
  openGraph: {
    title: "About - Aman Kushwaha",
    description:
      "Explore more about Aman Kushwaha, including his education, certifications, and skills.",
  // url: "#",
  siteName: "Aman Kushwaha",
    type: "website",
    images: [
      {
        url: "/amime.jpeg",
        width: 1200,
        height: 630,
  alt: "About Aman Kushwaha",
      },
    ],
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <Container>
      <Reveal>
        {" "}
        <Info />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        {" "}
  {/* Certificates section commented out temporarily
  <CertificatesSection />
  */}
      </Reveal>
    </Container>
  );
}
