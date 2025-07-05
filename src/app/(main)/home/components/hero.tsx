'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroHistoric() {
  return (
    <section className="max-w-7xl mx-auto relative h-[40vh] md:h-[70vh] mt-20 px-4 md:px-0 md:mt-24 group cursor-pointer">
      {/* تصویر بک‌گراند */}
      <div className="relative min-h-80 md:h-full">
        <Image
          src="/assets/images/hero2.jpg"
          alt="مرمت بنای تاریخی"
          fill
          priority
          className="object-cover object-center rounded-2xl transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />

        {/* تصویر دوم هنگام hover */}
        <Image
          src="/assets/images/hero.jpg"
          alt="مرمت بنای تاریخی"
          fill
          priority
          className="object-cover object-center rounded-2xl opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
        />

        {/* محتوای متن روی تصویر */}
        <div className="relative z-10 h-full flex items-end justify-center p-10 text-center text-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
              مرمت و احیای بنای تاریخی میر ملاس
              {/* احیای میراث باستانی، نجات تاریخ */}
            </h1>
            <p className="text-xl md:text-4xl font-extrabold">
              سرمایه گذار و بهره بردار مصیب ملکی
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
