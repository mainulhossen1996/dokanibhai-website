import { Button } from "@nextui-org/button";
import Image from 'next/image'
import {Card} from "@nextui-org/card"
import { FolderCog, Box, ShoppingBag } from 'lucide-react';



const backOffice = () => {

  return (
    <div>
      <section className="lg:my-24 my-10"  id="Hero ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-2xl mx-auto items-center">


  <div className="px-6 lg:px-0">
    <p className="text-[#363636] lg:text-[40px] text-3xl font-semibold leading-[60px] font-tajwal mb-8">Streamline Your Business Operation</p>

    <div>
      <div className="mt-8 mb-4 flex gap-3 items-center">
        <FolderCog color="black" size={28} />
        <p className="font-semibold text-xl">Setup Store Dynamically</p>
      </div>
      <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
    </div>

    <div>
      <div className="mt-8 mb-4 flex gap-3 items-center">
        <Box color="black" size={28} />
        <p className="font-semibold text-xl">Enable POS Terminal</p>
      </div>
      <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
    </div>

    <div>
      <div className="mt-8 mb-4 flex gap-3 items-center">
        <ShoppingBag color="black" size={28} />
        <p className="font-semibold text-xl">Level Up With Ecommerce</p>
      </div>
      <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
    </div>
  </div>

  <div className="">
    <Image
      className="h-[300px] h-[500px] w-full object-contain"
      width={500}
      height={500}
      alt="Feature"
      src="/image/features.png"
    />
  </div>
</div>

      </section>

    </div>
  );
};

export default backOffice;
