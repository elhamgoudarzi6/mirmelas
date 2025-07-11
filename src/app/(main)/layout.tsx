import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { Toaster } from "react-hot-toast";
import Header from "../layout/header";
import Footer from "../layout/footer";
import GoToTop from "../layout/gototop";

export const metadata: Metadata = {
 title: 'میرملاس | احیای بنای تاریخی',
  description: ' پروژه مرمت و احیای بنای تاریخی میر ملاس با هدف حفظ هویت فرهنگی ایران | مصیب ملکی',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa">
      <body>
        <Providers>
          <Header />
          <main>
            {children}
            <Toaster position="top-center" />
          </main>
          <GoToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;






