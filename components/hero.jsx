import { Tooltip, Button } from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'

const hero = () => {

  return (
    <div className="hero-bg">
      <section className="mb-24 pt-10 lg:pt-0" id="Hero">
        <div className="max-w-screen-2xl mx-auto flex justify-center">
          <div className="items-center text-center lg:mt-24 mt-4 lg:py-20 py-0">
          
          <section class="animation">
  <div class="first text-[25px] sm:text-[30px] md:text-[30px] lg:text-[90px] font-semibold leading-[40px] sm:leading-[24px] md:leading-[24.4px] lg:leading-[74.4px] block font-tajwal">
    <div>Making Retail Store POS</div>
  </div>
  <div class="second text-[25px] sm:text-[30px] md:text-[30px] lg:text-[90px] font-semibold leading-[40px] sm:leading-[24px] md:leading-[24.4px] lg:leading-[74.4px] block font-tajwal">
    <div>Making Ecommerce Orders</div>
  </div>
  <div class="third text-[25px] sm:text-[30px] md:text-[30px] lg:text-[90px] font-semibold leading-[40px] sm:leading-[24px] md:leading-[24.4px] lg:leading-[74.4px] block font-tajwal">
    <div>Making Sales Campaign</div>
  </div>
</section>


  <p className="text-[#363636] text-[25px] sm:text-[30px] md:text-[30px] lg:text-[90px] font-semibold leading-[20px] sm:leading-[24px] md:leading-[24.4px] lg:leading-[74.4px] block lg:mt-4 mt-2"> Better For Everyone</p>
                

              <div className="lg:mt-16 mt-4 px-10 lg:px-[300px]">
                <p className="lg:text-[20px] text-xs text-[#777777] lg:leading-[35px] leading-[20px] font-tajwal">
                Experience the future of retail with Dokanibhai POS Inventory Solution 
                including e-commerce integration to start your journey towards efficiency and growth today.
                
                </p>
              </div>

              <div className="lg:mt-[30px] mt-6 flex gap-4 justify-center">
              <Link
              href="/sales"
              >
                <Button className=" lg:w-[200px] lg:h-[50px]  md:w-[140px] md:h-[40px]   w-[120px] h-[30px] rounded-full bg-[#009999] hover:bg-[#00a5a8] border-2 border-[#009999] hover:border-[#00a5a8] text-[#ffffff] lg:text-lg text-xs font-semibold">
                Request for Demo
                </Button>
              </Link>


              <Tooltip
      content={
        <div className="px-1">
         <Link
              href="https://wa.me/+8801521488497?"
              >
                <Image
              className="h-[50px] w-full object-contain"
              width={500}
              height={500}
              alt="Feature"
              src="/image/WhatsAppButtonGreenLarge.png"
            />
                </Link>
        </div>
      }
    >
      <Link
              href="https://wa.me/+8801521488497?" target="_blank"
              >
                 <Button className=" lg:w-[200px] lg:h-[50px]  md:w-[140px] md:h-[40px]   w-[120px] h-[30px] rounded-full bg-[#ffffff] hover:bg-[#eeeeee] border-2 border-[#009999] text-[#009999] lg:text-lg text-xs font-semibold">
              Live Talk
                </Button>
              </Link>
    
    </Tooltip>
                
              

               
              </div>

          
       
          </div>
        </div>
      </section>

    </div>
  );
};

export default hero;
