import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Afritour',
  description: 'Travelling app by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-hidden relative">
        <div className="circle-pink h-screen w-screen lg:top-[-40%] lg:left-[-15%] md:left-[-20%] sm:top-[-50%] sm:left-[-25%] xs:top-[-50%] xs:right-[40%]" />
        <div className="circle-yellow h-screen w-screen xl:top-[110%] left-[80%] sm:top-[180%]" />
        <Navbar />
        <main className="relative bg-gray-950 text-white overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
