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
      <div className="sticky top-0 z-40 bg-white py-5" id="navBar">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
          
          <div className="flex gap-16 items-center">
            <Image
              className="h-[35px] w-full object-contain"
              width={300}
              height={300}
              alt="Someekoron Logo"
              src="/image/DokaniBhai.png"
            />

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
              className={`font-[600]  hover:text-[#009999] ${
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

          <div className="flex gap-10 items-center">
          <Link
              href="/sales"
              className={`font-[600]  hover:text-[#009999] ${
                pathname === "/sales" ? "text-[#009999]" : "text-gray-600"
              }`}
            >
              Talk to Sales
            </Link>
            
          {/* <Button className="font-semibold text-[#009999] w-[130px] h-[35px] rounded-full border-2 border-[#009999] leading-[14px]">
              Talk to Sales
            </Button> */}

            <Button className="w-[120px] h-[35px] rounded-full bg-[#009999] hover:bg-[#00a5a8] text-white text-sm font-semibold leading-[14px]">
              Sign In
            </Button>
          </div>
        </div>
      </div>

    </>
  );
};
