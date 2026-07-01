import { Metadata } from 'next';
import { categories } from './data';
import EquipmentsClient from './EquipmentsClient';
import styles from './equipments.module.css';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Our Equipments | GMGCE',
  description: 'Explore our vast fleet of premium equipments, from construction and lifting to logistics and specialized energy solutions.',
  alternates: {
    canonical: "/equipments",
  },
};

export default function EquipmentsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mountainksa.com" },
      { "@type": "ListItem", "position": 2, "name": "Equipments", "item": "https://www.mountainksa.com/equipments" }
    ]
  };

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <JsonLd data={breadcrumbSchema} />
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Equipments Fleet</h1>
        <p className={styles.heroSubtitle}>
          Discover our comprehensive range of high-quality, reliable machinery and vehicles designed to meet your project's every need.
        </p>
      </div>

      <div>
        <EquipmentsClient categories={categories} />
      </div>
    </main>
  );
}
