import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import EquipmentsPreview from "@/components/sections/EquipmentsPreview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industrial Solutions You Can Trust | GMGCE",
  description:
    "Great Mountain General Contracting Establishment delivers reliable equipment rental, manpower supply, trading, and material solutions across Saudi Arabia.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ServicesPreview />
      <EquipmentsPreview />
      <IndustriesSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}

