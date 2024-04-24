import React from "react";
import { Button } from "@nextui-org/button";
import Image from 'next/image'
import {Card} from "@nextui-org/card"
import { FolderCog, Box, ShoppingBag } from 'lucide-react';



const pos_ecom = () => {

  return (
    <div>
      <section className="lg:my-24 my-0 lg:py-20 py-10 bg-gray-50"  id="Hero ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-screen-2xl mx-auto">
  

  <div className="px-6 lg:px-0">
    <p className="font-bold text-3xl md:text-5xl">
      Flexible point of sale <br />to power your retail store
    </p>
    <p className="font-medium text-md mt-4">
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
    </p>
  </div>

  <div className="flex justify-center px-6 lg:px-0">
    <Image
      className="h-[300px] lg:h-[500px] w-full object-contain"
      width={500}
      height={500}
      alt="Feature"
      src="/image/rpos.png"
    />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-screen-2xl mx-auto lg:mt-36 mt-10 mb-20 lg:mb-0">


  <div className="flex justify-center order-2 lg:order-1">
    <Image
      className="h-[300px] lg:h-[500px] w-full object-contain"
      width={500}
      height={500}
      alt="Feature"
      src="/image/ecom.png"
    />
  </div>

  <div className="px-6 lg:px-0 order-1 lg:order-2">
    <p className="font-bold text-3xl md:text-5xl">
      Flexible point of sale <br />to power your retail store
    </p>
    <p className="font-medium text-md mt-4">
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
    </p>
  </div>
</div>



      </section>

    </div>
  );
};

export default pos_ecom;
