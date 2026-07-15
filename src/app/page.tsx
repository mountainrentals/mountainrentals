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
  title: "Mountain Rentals  | Heavy Equipment Rental, Manpower Supply & Industrial Services in Saudi Arabia",
  description:
    "Great Mountain General Contracting Establishment provides heavy equipment rental, cranes, excavators, forklifts, manpower supply, transportation, material trading, and industrial support services across Saudi Arabia.",
  alternates: {
    canonical: "https://www.mountainksa.com/",
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

