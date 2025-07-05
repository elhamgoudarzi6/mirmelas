import {
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandWhatsapp,
  TbPhoneCall,
} from "react-icons/tb";

const Footer = () => {
  const icons = [
    {
      icon: <TbBrandInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/mir-melas.ir",
    },
    {
      icon: <TbBrandTelegram className="w-6 h-6" />,
      href: "https://t.me/mir-melas.ir",
    },
    {
      icon: <TbBrandWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/98916161211",
    },
    {
      icon: <TbPhoneCall className="w-6 h-6" />,
      href: "tel:0916161211",
    },
  ];

  return (

 <footer id="footer" className="max-w-7xl mx-auto mb-15 px-4 md:px-0">
  {/* Main Box including Bottom Section */}
  <div className="bg-[#c5b99d] p-10 rounded-2xl">
    {/* Main Grid */}
    <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
      {/* Logo & Description */}
      <div className="space-y-4 md:col-span-3">
        <h2 className="text-xl font-semibold">
          میراث ماندگار میرملاس
        </h2>
        <p className="text-sm text-justify leading-relaxed">
          سایت میرملاس با هدف معرفی، مرمت و احیای بناهای تاریخی، تلاش می‌کند تا با مشارکت سرمایه‌گذاران، پژوهشگران و متخصصان حوزه میراث فرهنگی، گامی مؤثر در حفظ هویت تاریخی ایران بردارد.
        </p>
        <div className="flex gap-3">
          {icons.map((item, idx) => (
            <a
              href={item.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md hover:scale-110 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="md:col-span-1">
        <h3 className="font-semibold mb-3">صفحات سایت</h3>
        <ul className="space-y-2 text-sm">
          <li>درباره پروژه</li>
          <li>تماس با ما</li>
          <li>حمایت از مرمت</li>
        </ul>
      </div>

      {/* Services */}
      <div className="md:col-span-1">
        <h3 className="font-semibold mb-3">بخش‌ها</h3>
        <ul className="space-y-2 text-sm">
          <li>گزارش مرمت</li>
          <li>ثبت آثار تاریخی</li>
          <li>سرمایه‌گذاری فرهنگی</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="md:col-span-2">
        <h3 className="font-semibold mb-3">اطلاعات تماس</h3>
        <ul className="space-y-2 text-sm">
          <li>0916161211</li>
          <li>info@mir-melas.ir</li>
          <li>ایران، لرستان، خرم‌آباد، بنای تاریخی میر ملاس</li>
          <li>ابتدای خیابان حافظ، روبروی خیابان فدائیان اسلام</li>
        </ul>
      </div>
    </div>

    {/* Bottom Section داخل باکس رنگی */}
    <div className="mt-10 pt-6 border-t border-[#a3977b] text-center text-xs text-gray-800">
      <p>
        © کلیه حقوق برای <span className="font-medium">میرملاس</span> محفوظ است.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
