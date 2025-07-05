"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import {
  Menu, X,
} from 'lucide-react';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
<header className="w-full fixed top-0 left-0 z-50 py-3">
  <div className="max-w-7xl mx-auto px-4 md:px-0">
    {/* باکس رنگی */}
    <div className="bg-[#c5b99d] rounded-2xl shadow-md px-4 py-2 flex md:justify-center md:items-center">
      <button onClick={() => setMenuOpen(true)} className="md:hidden cursor-pointer text-gray-700">
        <Menu className="w-9 h-9" />
      </button>

      {/* منو دسکتاپ */}
      <nav className="hidden md:flex gap-2 items-center text-sm px-2 py-2">
        <Link href="/" className="px-4 py-1">
          صفحه اصلی
        </Link>
        <Link href="#gallery" className="px-4 py-1">
          گالری
        </Link>
        <Link href="#about" className="px-4 py-1">
          درباره ما
        </Link>
        <Link href="#footer" className="px-4 py-1">
          تماس با ما
        </Link>
      </nav>
    </div>
  </div>

  {/* دراور موبایل */}
  {isMobile && (
    <Drawer
      anchor="right"
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      slotProps={{
        paper: {
          sx: { backgroundColor: "#c5b99d", width: 300 },
        },
      }}
    >
      <div className="flex flex-col gap-5 p-6 text-gray-700 uppercase text-lg">
        <button onClick={() => setMenuOpen(false)} className="self-end">
          <X className="w-6 h-6" />
        </button>
        <Link href="/" onClick={() => setMenuOpen(false)}>صفحه اصلی</Link>
        <Link href="#gallery" prefetch onClick={() => setMenuOpen(false)}>گالری</Link>
        <Link href="#about" prefetch onClick={() => setMenuOpen(false)}>درباره ما</Link>
        <Link href="#footer" prefetch onClick={() => setMenuOpen(false)}>ارتباط با ما</Link>
      </div>
    </Drawer>
  )}
</header>

  );
};

export default Header;
