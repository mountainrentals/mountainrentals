"use client";

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './equipments.module.css';

interface EquipmentItem {
  name: string;
  image: StaticImageData;
}

interface CategoryProps {
  id: string;
  title: string;
  description: string;
  items: EquipmentItem[];
}

export default function CategorySection({ category }: { category: CategoryProps }) {
  const [selectedImage, setSelectedImage] = useState<EquipmentItem | null>(null);

  // A small trick to highlight the last word of the title
  const titleWords = category.title.split(' ');
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(' ');

  return (
    <>
      <section id={category.id} className={styles.categorySection}>
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>
            {restOfTitle} <span>{lastWord}</span>
          </h2>
          <p className={styles.categoryDesc}>{category.description}</p>
        </div>

        <div className={styles.grid}>
          {category.items.map((item, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => setSelectedImage(item)}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className={styles.modalOverlay} 
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image 
              src={selectedImage.image} 
              alt={selectedImage.name} 
              className={styles.modalImage}
            />
            <h3 className={styles.modalTitle}>{selectedImage.name}</h3>
          </div>
        </div>
      )}
    </>
  );
}
