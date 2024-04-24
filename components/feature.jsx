import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {Card} from "@nextui-org/card"
import { FolderCog, Box, ShoppingBag, Share2 } from 'lucide-react'



const hero = () => {

  return (
    <div>
    <section className="lg:my-24 my-10 mt-20 lg:mt-24" id="Hero">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-xs lg:text-xl">Manage Store With Dokanibhai</p>
          <p className="text-[#363636] lg:text-[40px] text-[25px] font-semibold lg:leading-[60px] leading-[40px]">Enable Your Store, Your Way</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mt-16 mt-10">
        <div className="mb-8 flex flex-col items-center lg:items-start text-center lg:text-start">
    <FolderCog color="black" size={28} />
    <div className="mt-4">
        <p className="font-semibold text-xl">Setup Store Dynamically</p>
    </div>
    <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
</div>


<div className="mb-8 flex flex-col items-center lg:items-start text-center lg:text-start">
    <Box color="black" size={28} />
    <div className="mt-4">
      <p className="font-semibold text-xl">Enable POS Terminal</p>
    </div>
    <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
  </div>

  <div className="mb-8 flex flex-col items-center lg:items-start text-center lg:text-start">
    <ShoppingBag color="black" size={28} />
    <div className="mt-4">
      <p className="font-semibold text-xl">Level Up With Ecommerce</p>
    </div>
    <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
  </div>
  
  <div className="mb-8 flex flex-col items-center lg:items-start text-center lg:text-start">
    <Share2 color="black" size={28} />
    <div className="mt-4">
      <p className="font-semibold text-xl">Centralized Business Operation</p>
    </div>
    <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
  </div>
</div>
      </div>
    </section>
  </div>
  
  
  );
};

export default hero;
