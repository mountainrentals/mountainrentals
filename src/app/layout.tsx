import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Great Mountain General Contracting Establishment | Industrial Services Saudi Arabia",
    template: "%s | GMGCE",
  },
  description:
    "Great Mountain General Contracting Establishment (GMGCE) provides reliable industrial solutions across Saudi Arabia — Equipment Rental, Manpower Supply, Trading, and Material Supply for Oil & Gas, Petrochemical, and Construction sectors.",
  keywords: [
    "industrial services Saudi Arabia",
    "equipment rental KSA",
    "manpower supply",
    "general contracting",
    "Mountain Rentals",
    "oil gas support",
    "industrial contractor",
    "GMGCE",
  ],
  openGraph: {
    title: "Great Mountain General Contracting Establishment",
    description:
      "Enabling Industries, Empowering Businesses, Driving Progress — Industrial solutions you can trust across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
