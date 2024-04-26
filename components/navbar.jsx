'use client'
import { Button } from "@nextui-org/button";
import Image  from "next/image";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("navBar");
      if (window.scrollY > 22) {
        navBar.classList.add("scrolled");
      } else {
        navBar.classList.remove("scrolled");
      }
    };
    import('react').then(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
  
    <div className="sticky top-3 z-50 mx-3 lg:mx-0">
      <div className="lg:p-5 p-1 px-3 flex justify-between items-center max-w-screen-2xl mx-auto bg-white  lg:rounded-2xl rounded-[10px]" id="navBar">
        
        {/* Logo and Links container */}
        <div className="flex items-center gap-5 md:gap-16">
          <Link href="/home">
            <Image
              className="h-[20px] md:h-[35px] w-auto object-contain"
              src="/image/DokaniBhai.png"
              alt="Someekoron Logo"
              width={300}
              height={300}
            />
          </Link>

          {/* Responsive navigation links */}
          <div className="hidden md:flex gap-10">
            <Link href="/home" className={`font-semibold hover:text-[#009999] ${pathname === "/home" ? "text-[#009999]" : "text-gray-600"}`}>Home</Link>
            <Link href="/features" className={`font-semibold hover:text-[#009999] ${pathname === "/features" ? "text-[#009999]" : "text-gray-600"}`}>Features</Link>
            <Link href="/price" className={`font-semibold hover:text-[#009999] ${pathname === "/price" ? "text-[#009999]" : "text-gray-600"}`}>Pricing</Link>
            <Link href="/shop" className={`font-semibold hover:text-[#009999] ${pathname === "/shop" ? "text-[#009999]" : "text-gray-600"}`}>Shop</Link>
          </div>
        </div>

        {/* Right side buttons and links */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/sales" className={`font-semibold hover:text-[#009999] ${pathname === "/sales" ? "text-[#009999]" : "text-gray-600"}`}>Talk to Sales</Link>
          <Button className="w-[120px] h-[35px] rounded-full bg-[#009999] hover:bg-[#00a5a8] text-white text-sm font-semibold leading-[14px]">Sign In</Button>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none focus:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Floating */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center p-5 z-50">
          <button onClick={toggleMenu} className="self-end p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/home"><p className="py-2 font-semibold text-center hover:text-[#009999]">Home</p></Link>
          <Link href="/features"><p className="py-2 font-semibold text-center hover:text-[#009999]">Features</p></Link>
          <Link href="/price"><p className="py-2 font-semibold text-center hover:text-[#009999]">Pricing</p></Link>
          <Link href="/shop"><p className="py-2 font-semibold text-center hover:text-[#009999]">Shop</p></Link>
          <Link href="/sales"><p className="py-2 font-semibold text-center hover:text-[#009999]">Talk to Sales</p></Link>
          <Button className="mt-2 w-full h-[35px] rounded-full bg-[#009999] hover:bg-[#00a5a8] text-white text-sm font-semibold leading-[14px]">Sign In</Button>
        </div>
      )}
    </div>


    </>
  );
};
