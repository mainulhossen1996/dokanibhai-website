import { Tooltip, Button } from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'

const hero = () => {

  return (
    <div className="hero-bg">
      <section className="mb-24 " id="Hero">
        <div className="max-w-screen-2xl mx-auto flex justify-center">
          <div className="items-center text-center mt-24 py-20">
          
  <section class="animation">
    <div class="first  lg:text-[90px] text-3xl font-semibold leading-[74.4px] lg:block hidden font-tajwal"><div>Making Retail Store POS</div></div>
    <div class="second  lg:text-[90px] text-3xl font-semibold leading-[74.4px] lg:block hidden font-tajwal"><div>Making Ecommerce Orders</div></div>
    <div class="third  lg:text-[90px] text-3xl font-semibold leading-[74.4px] lg:block hidden font-tajwal"><div>Making Sales Campaign</div></div>
  </section>

  <p className="text-[#363636] lg:text-[90px] text-3xl font-semibold leading-[74.4px] lg:block hidden font-tajwal mt-4"> Better For Everyone</p>
                

              <div className="mt-16">
                <p className="lg:text-[20px] text-xl text-[#777777] leading-[35px] font-tajwal">
                Experience the future of retail with Dokanibhai POS Inventory Solution <br/>
                including e-commerce integration to start your journey towards efficiency and growth today.
                
                </p>
              </div>

              <div className="lg:mt-[30px] mt-10 flex gap-4 justify-center">
              <Link
              href="/sales"
              >
                <Button className=" lg:w-[200px] lg:h-[50px]  md:w-[140px] md:h-[40px]   w-[150px] h-[36px] rounded-full bg-[#009999] hover:bg-[#00a5a8] border-2 border-[#009999] hover:border-[#00a5a8] text-[#ffffff] lg:text-lg text-base font-semibold">
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
                 <Button className=" lg:w-[200px] lg:h-[50px]  md:w-[140px] md:h-[40px]   w-[150px] h-[36px] rounded-full bg-[#ffffff] hover:bg-[#eeeeee] border-2 border-[#009999] text-[#009999] lg:text-lg text-base font-semibold">
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
