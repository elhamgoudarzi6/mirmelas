// app/components/MirmelasPage.tsx
'use client';

import Image from 'next/image';

const images = [
  {
    src: '/assets/images/hero2.jpg',
    title: 'احیای بنای تاریخی میر ملاس',
    description:
      'بنای میر ملاس، گنجینه‌ای از معماری قاجاری و پهلوی است که در قلب شهر خرم‌آباد جای گرفته. این پروژه با هدف بازگرداندن شکوه و اصالت معماری ایرانی و با نظارت کارشناسان مرمت در حال اجراست.',
    investment: '۴.۵۰۰.۰۰۰.۰۰۰ تومان',
  },
  {
    src: '/assets/images/6.jpg',
    title: 'هویت معماری بومی',
    registered: 'ثبت ملی در اردیبهشت ۱۳۸۰',
  },
  {
    src: '/assets/images/3.jpg',
    title: 'بازسازی با مصالح سنتی',
    registered: 'بر اساس اصول مرمت اصیل',
  },
  {
    src: '/assets/images/4.jpg',
    title: 'میراثی برای آینده',
    registered: 'با نظارت میراث فرهنگی',
  }
];

export default function MirmelasPage() {
  return (
<section className="max-w-7xl mx-auto px-4 md:px-0 py-15 grid lg:grid-cols-12 gap-5">
  {/* ستون چپ (فقط یک ستون ولی شامل دو بخش بالا و پایین) */}
  <div className="lg:col-span-7 flex flex-col gap-5">
    {/* کارت اصلی بالا */}
    <div className="bg-[#f3f0e4] border border-[#c4b89f] rounded-[30px] p-6 shadow-xl">
      <h2 className="text-2xl font-extrabold text-[#2e2417] mb-4">{images[0].title}</h2>
      <Image
        src={images[0].src}
        alt="بنای تاریخی میرملاس"
        width={800}
        height={500}
        className="rounded-xl mb-4 w-full object-cover"
      />
      <p className="text-sm leading-relaxed text-[#3b3226] text-justify">{images[0].description}</p>
      <div className="mt-6 border-t border-[#c4b89f]  pt-4 flex justify-between text-sm font-bold text-[#2e2417]">
        <span>مبلغ سرمایه‌گذاری</span>
        <span>{images[0].investment}</span>
      </div>
    </div>

    {/* دو کارت پایین‌تر */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {images.slice(1, 3).map((img, index) => (
        <div
          key={index}
          className="bg-[#e0d2ba] rounded-[25px] p-4 shadow-md border border-[#cab28c] h-full"
        >
          <h3 className="font-bold text-[#3a2f1b] mb-2 text-center">{img.title}</h3>
          <Image
            src={img.src}
            alt={img.title}
            width={400}
            height={300}
            className="rounded-xl mb-4 mx-auto h-48 w-full object-cover"
          />
          <div className="border-t border-[#cab28c] pt-3 text-sm font-semibold text-[#3a2f1b] flex justify-between">
            <span>اطلاعات</span>
            <span>{img.registered}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ستون راست با ارتفاع کل محتوا برابر */}
  <div className="lg:col-span-5">
    <div className="bg-[#c5b99d] rounded-[30px] p-4 shadow-lg border border-[#aa9f86] text-center h-full flex flex-col">
      <h3 className="font-bold text-[#2e2417] mb-2">{images[3].title}</h3>
      <Image
        src={images[3].src}
        alt={images[3].title}
        width={900}
        height={900}
        className="rounded-xl mx-auto mb-4 object-cover h-70 md:h-full"
      />
      <div className="border-t border-[#aa9f86] pt-3 flex justify-between text-sm font-semibold text-[#2e2417] mt-auto">
        <span>اطلاعات</span>
        <span>{images[3].registered}</span>
      </div>
    </div>
  </div>
</section>


  );
}
