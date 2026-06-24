import { Metadata } from 'next';
import { categories } from './data';
import EquipmentsClient from './EquipmentsClient';
import styles from './equipments.module.css';

export const metadata: Metadata = {
  title: 'Our Equipments | GMGCE',
  description: 'Explore our vast fleet of premium equipments, from construction and lifting to logistics and specialized energy solutions.',
};

export default function EquipmentsPage() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
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
