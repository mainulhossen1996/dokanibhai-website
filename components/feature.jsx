import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {Card} from "@nextui-org/card"
import { FolderCog, Box, ShoppingBag, Share2 } from 'lucide-react'



const hero = () => {

  return (
    <div>
      <section className="my-24"  id="Hero ">
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div>
          <p className="text-gray-600 text-xl text-center">Manage Store With Dokanibhai</p>
        <p className="text-[#363636] lg:text-[40px] text-2xl font-semibold leading-[60px] lg:block hidden font-tajwal">Enable Your Store, Your Way
            </p>
            </div>
        </div>
        <div className="flex gap-16 max-w-screen-2xl mx-auto mt-16">
                <div className="mb-8 w-1/4">
                <FolderCog color="black" size={28}/>
                    <div className="mt-4">
                    
                <p className="font-semibold text-xl">
                    Setup Store Dynamically
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                </div>

                <div className="mb-8 w-1/4">
                <Box color="black" size={28}/>
                <div className="mt-4"> 
                <p className="font-semibold text-xl">
                    Enable POS Terminal
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                </div>

                <div className="mb-8 w-1/4">
                <ShoppingBag color="black" size={28}/>
                <div className="mt-4">
                    
                <p className="font-semibold text-xl">
                    Level Up With Ecommecre
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                
          </div>

          <div className="mb-8 w-1/4">
                <Share2 color="black" size={28}/>
                <div className="mt-4">
                    
                <p className="font-semibold text-xl">
                    Centralized Business Operation
                </p>
                    </div>
                   
                <p className="text-[#565656] mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            
                
          </div>
         
        </div>
      </section>

    </div>
  );
};

export default hero;
