'use client'
import { Button } from "@nextui-org/button";
import Image  from "next/image";
import { useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Navbar = () => {

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
      <div className="sticky top-5 z-40">
  <div className="flex justify-between items-center max-w-screen-2xl mx-auto bg-white border border-gray-200 px-5 py-3 md:p-5 no-scroll" id="navBar">
    <div className="flex gap-2 md:gap-16 items-center w-full md:w-auto">
      <Link href="/home">
        <Image
          className="h-[35px] w-full object-contain"
          width={300}
          height={300}
          alt="Someekoron Logo"
          src="/image/DokaniBhai.png"
        />
      </Link>

      {/* Hamburger menu for mobile */}
      <button className="md:hidden flex items-center px-3 py-2 border rounded">
        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Links hidden on mobile, visible on md screens and above */}
      <div className="hidden md:flex gap-16 items-center grow">
        <Link
          href="/home"
          className={`font-[600] hover:text-[#009999] ${
            pathname === "/home" ? "text-[#009999]" : "text-gray-600"
          }`}
        >
          Home
        </Link>

        <Link
          href="/features"
          className={`font-[600] hover:text-[#009999] ${
            pathname === "/features" ? "text-[#009999]" : "text-gray-600"
          }`}
        >
          Features
        </Link>

        <Link
          href="/price"
          className={`font-[600] hover:text-[#009999] ${
            pathname === "/price" ? "text-[#009999]" : "text-gray-600 "
          }`}
        >
          Pricing
        </Link>
      </div>
    </div>

    {/* These links show on desktop and are hidden on mobile */}
    <div className="hidden md:flex gap-10 items-center">
      <Link
        href="/sales"
        className={`font-[600] hover:text-[#009999] ${
          pathname === "/sales" ? "text-[#009999]" : "text-gray-600"
        }`}
      >
        Talk to Sales
      </Link>

      <Button className="w-[120px] h-[35px] rounded-full bg-[#009999] hover:bg-[#00a5a8] text-white text-sm font-semibold leading-[14px]">
        Sign In
      </Button>
    </div>
  </div>
</div>


    </>
  );
};
