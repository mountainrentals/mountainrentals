"use client";

import { useState } from 'react';
import CategorySection from './CategorySection';
import styles from './equipments.module.css';

interface EquipmentItem {
  name: string;
  image: any;
}

interface CategoryProps {
  id: string;
  title: string;
  description: string;
  items: EquipmentItem[];
}

export default function EquipmentsClient({ categories }: { categories: CategoryProps[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory);

  return (
    <>
      <div className={styles.navContainer}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`${styles.navButton} ${activeCategory === cat.id ? styles.active : ''}`}
          >
            <span className={styles.navBullet} />
            {cat.title}
          </button>
        ))}
      </div>

      <div>
        {activeCategoryData && (
          <CategorySection key={activeCategoryData.id} category={activeCategoryData} />
        )}
      </div>
    </>
  );
}
