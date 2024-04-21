import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {Card} from "@nextui-org/card"
import { FolderCog, Box, ShoppingBag } from 'lucide-react';



const backOffice = () => {

  return (
    <div>
      <section className="my-24"  id="Hero ">
        <div className="flex max-w-screen-2xl mx-auto">
          <div className="w-1/2">
            <p className="text-[#363636] lg:text-[40px] text-2xl font-semibold leading-[60px] lg:block hidden font-tajwal">Streamline Your Business Operation
              
            </p>

            <div className="my-10 pe-24">
                <div className="mb-8">
                    <div className="flex gap-3 items-center ">
                    <FolderCog color="black" size={28}/>
                <p className="font-semibold text-xl">
                    Setup Store Dynamically
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                </div>

                <div className="mb-8">
                    <div className="flex gap-3 items-center ">
                    <Box color="black" size={28}/>
                <p className="font-semibold text-xl">
                    Enable POS Terminal
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                </div>

                <div className="mb-8">
                    <div className="flex gap-3 items-center ">
                    <ShoppingBag color="black" size={28}/>
                <p className="font-semibold text-xl">
                    Level Up With Ecommecre
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                </div>
                </div>
          </div>
          <div className="w-1/2 flex justify-center">
          <Image
              className="h-[600px] w-full object-contain"
              width={600}
              height={600}
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
