// components/MirmelasGallery.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/assets/images/1.jpg',
  '/assets/images/hero.jpg',
  '/assets/images/3.jpg',
  '/assets/images/4.jpg',
  '/assets/images/5.jpg',
  '/assets/images/6.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-0 py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f1b10]">
          گالری تصاویر مرمت بنای تاریخی میر ملاس
        </h2>
        <p className="text-gray-600 mt-3">
          نگاهی به مراحل مرمت، زیبایی‌های معماری و هویت تاریخی این اثر ارزشمند
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt={`میرملاس ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">میرملاس {index + 1}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
