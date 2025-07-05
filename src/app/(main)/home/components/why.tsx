'use client';
import Image from 'next/image';

export default function FundCampaign() {
  return (
    <section id="about" className="w-full bg-white py-12 px-4 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        {/* ستون چپ */}
        <div className="flex flex-col justify-between space-y-6 text-right">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-700 leading-tight">
              با ما احیا کن <br className="hidden md:block" />
              میراثی برای آینده
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              ما در میرملاس با همراهی شما، بناهای تاریخی فراموش‌شده را زنده می‌کنیم.
              با مشارکت در این پروژه فرهنگی، در نگهداری از هویت ایرانی سهیم باشید.
            </p>

            {/* آمار */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#e0d2ba] rounded-lg p-6 text-center shadow-sm h-full">
                <p className="text-2xl font-bold text-gray-700">۱.۵ میلیارد تومان</p>
                <p className="text-sm text-gray-700 mt-1">میزان سرمایه جذب‌شده</p>
              </div>
              <div className="bg-[#c5b99d] text-white rounded-lg p-6 text-center shadow-sm h-full">
                <p className="text-2xl font-bold">۵۰+ نفر</p>
                <p className="text-sm mt-1">مشارکت‌کننده در پروژه</p>
              </div>
            </div>
          </div>

          {/* نقل قول */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-sm text-gray-700 leading-relaxed flex items-start gap-4">
            {/* تصویر مصاحبه‌کننده */}
            <div className="shrink-0">
              <Image
                src="/assets/images/profile.jpg"
                alt="مصیب ملکی"
                width={400}
                height={400}
                className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>

            {/* متن نقل قول */}
            <div>
              <p className="text-lg font-extrabold text-gray-800 mb-1">
                مصیب ملکی، سرمایه‌گذار پروژه
              </p>
              <p className="text-justify">
                «احیای بناهای تاریخی، تنها بازسازی یک دیوار نیست؛ بلکه احیای هویت، فرهنگ و خاطره یک ملت است.
                پروژه میرملاس با هدف بازگرداندن شکوه گذشته، با حمایت مردم و سرمایه‌گذاران فرهنگی در حال اجراست.»
              </p>
            </div>
          </div>
        </div>

        {/* ستون راست - تصویر */}
        <div className="flex items-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/3.jpg"
              alt="بنای میر ملاس"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
