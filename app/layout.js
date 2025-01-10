import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stacy Anastasiadis | London Real Estae Agent",
  description:
    "Stacy Anastasiadis is a london-based real estate agent with over 20 years of experience specializing in residential sales, commercial investments, and vacant land. Serving London and surrounding areas with expertise and dedication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#000" />
        <Navbar />
        {children}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center px-4 py-3 text-xs font-medium text-white bg-black rounded-full shadow-lg hover:bg-gray-900 transition-all duration-200 hover:scale-105"
          >
            Book an Appointment
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
