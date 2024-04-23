import React from "react";
import { Button } from "@nextui-org/button";
import Image from 'next/image'
import {Card} from "@nextui-org/card"
import { FolderCog, Box, ShoppingBag } from 'lucide-react';



const pos_ecom = () => {

  return (
    <div>
      <section className="my-24 py-10 bg-gray-50"  id="Hero ">

                {/* <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div>
          <p className="text-gray-600 text-xl text-center">Multiple Sell Terminal</p>
        <p className="text-[#363636] lg:text-[40px] text-2xl font-semibold leading-[60px] lg:block hidden font-tajwal">Sell to Everywhere, Everyway
            </p>
            </div>
        </div> */}


        <div className="flex gap-10 items-center max-w-screen-2xl mx-auto">
         <div className="w-1/2 flex justify-center">


         <Image
              className="h-[600px] w-full object-contain"
              width={600}
              height={600}
              alt="Feature"
              src="/image/rpos.png"
            />



         </div>
          
            <div className="w-1/2">
            <p className="font-bold text-[60px]">
            Flexible point of sale <br/>to power your retail store
                </p>
                <p className="font-medium text-md mt-2">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
            </div>
            
        </div>



        <div className="flex gap-10 items-center max-w-screen-2xl mx-auto">
          
            <div className="w-1/2">
            <p className="font-bold text-[60px]">
            Flexible point of sale <br/>to power your retail store
                </p>
                <p className="font-medium text-md mt-2">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
            </div>


         <div className="w-1/2 flex justify-center my-36">
         <Image
              className="h-[600px] w-full object-contain"
              width={600}
              height={600}
              alt="Feature"
              src="/image/ecom.png"
            />
         </div>
            
        </div>


      </section>

    </div>
  );
};

export default pos_ecom;
