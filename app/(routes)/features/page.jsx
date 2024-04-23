'use client'
import Image from "next/image";
import { useState } from 'react';
import Products from "@/components/products";
import MultiBranch from "@/components/multiBranch";
import StoreSell from "@/components/storeSell";
import Orders from "@/components/orders";
import Campaign from "@/components/campaign";
import Shipping from "@/components/shipping";

import Faq from "@/components/faq"

export default function Features() {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex justify-center">
        <div className="flex items-center my-24">
            <div className="w-1/2">
            <p className="text-[50px] font-bold">
            <span className="text-[#009999]">Maximize Your Business </span> <br/> Growth Within Your Budget
          </p>

          <p className="text-lg text-gray-400 mt-4">
          Or we give your money back. Hundreds of others have taken advantage of Markopolo.ai and are getting results as we speak. Great things are waiting for you, and we can’t wait to accompany you on this voyage. 
          </p>
            </div>

            <div className="w-1/2">
            <Image
              className="h-[500px] w-full object-contain"
              width={500}
              height={500}
              alt="Feature"
              src="/image/rpos.png"
            />
            </div>
          
        </div>
      </div>

      
      <div className="max-w-screen-2xl justify-center mx-auto my-6">
      <div className="flex border-b-2 border-gray-200">
      <ul className="flex items-center  gap-10">
        <li className="">
          <button
            className={`inline-block px-6 py-3 text-[20px] duration-200 font-[550] ${activeTab === 1 ? 'text-[#009999] border-b-4 border-[#009999]' : 'text-gray-600 border-b-4 border-[#ffffff]'}`}
            onClick={() => changeTab(1)}
          >
           <span className="flex gap-3 items-center">
            <Image
              className={`h-[25px] w-[25px] object-contain ${activeTab === 1 ? 'active-svg':'inactive-svg'}`}
              width={20}
              height={20}
              alt="Feature"
              src="image/box-open-full.svg"
              
            />
            Products
            </span> 
          </button>
        </li>
        <li className="">
          <button
            className={`inline-block px-6 py-3 text-[20px] duration-200 font-[550] ${activeTab === 2 ? 'text-[#009999] border-b-4 border-[#009999]' : 'text-gray-600 border-b-4 border-[#ffffff]'}`}
            onClick={() => changeTab(2)}
          >
            <span className="flex gap-3 items-center">
          <Image
            className={`h-[25px] w-[25px] object-contain ${activeTab === 2 ? 'active-svg':'inactive-svg'}`}
            width={20}
            height={20}
            alt="Feature"
            src="image/code-branch.svg"
            
          />
          Multi Branch
          </span> 
          </button>
        </li>

        <li className="">
          <button
            className={`inline-block px-6 py-3 text-[20px] duration-200 font-[550] ${activeTab === 3 ? 'text-[#009999] border-b-4 border-[#009999]' : 'text-gray-600 border-b-4 border-[#ffffff]'}`}
            onClick={() => changeTab(3)}
          >
           <span className="flex gap-3 items-center">
          <Image
            className={`h-[25px] w-[25px] object-contain ${activeTab === 3 ? 'active-svg':'inactive-svg'}`}
            width={20}
            height={20}
            alt="Feature"
            src="image/cart-shopping-fast.svg"
            
          />
          Store Sell
          </span> 
          </button>
        </li>

        <li className="">
          <button
            className={`inline-block px-6 py-3 text-[20px] duration-200 font-[550] ${activeTab === 4 ? 'text-[#009999] border-b-4 border-[#009999]' : 'text-gray-600 border-b-4 border-[#ffffff]'}`}
            onClick={() => changeTab(4)}
          >
            <span className="flex gap-3 items-center">
          <Image
            className={`h-[25px] w-[25px] object-contain ${activeTab === 4 ? 'active-svg':'inactive-svg'}`}
            width={20}
            height={20}
            alt="Feature"
            src="image/shopping-bag.svg"
            
          />
          Orders
          </span> 
          </button>
        </li>

        <li className="">
          <button
            className={`inline-block px-6 py-3 text-[20px] duration-200 font-[550] ${activeTab === 5 ? 'text-[#009999] border-b-4 border-[#009999]' : 'text-gray-600 border-b-4 border-[#ffffff]'}`}
            onClick={() => changeTab(5)}
          >
           <span className="flex gap-3 items-center">
          <Image
            className={`h-[25px] w-[25px] object-contain ${activeTab === 5 ? 'active-svg':'inactive-svg'}`}
            width={20}
            height={20}
            alt="Feature"
            src="image/megaphone.svg"
            
          />
          Campaign
          </span> 
          </button>
        </li>

        <li className="">
          <button
            className={`inline-block px-6 py-3 text-[20px] duration-200 font-[550] ${activeTab === 6 ? 'text-[#009999] border-b-4 border-[#009999]' : 'text-gray-600 border-b-4 border-[#ffffff]'}`}
            onClick={() => changeTab(6)}
          >
           <span className="flex gap-3 items-center">
          <Image
            className={`h-[25px] w-[25px] object-contain ${activeTab === 6 ? 'active-svg':'inactive-svg'}`}
            width={20}
            height={20}
            alt="Feature"
            src="image/shipping-fast.svg"
            
          />
          Shipping
          </span> 
          </button>
        </li>
      </ul>
      </div>
      
      <div>

      <div className="w-full pt-4">
        {activeTab === 1 ? <div>
          <Products/>
        </div> : null}
        {activeTab === 2 ? <div>
          <MultiBranch/>
        </div> : null}
        {activeTab === 3 ? <div>
          <StoreSell/>
        </div> : null}
        {activeTab === 4 ? <div>
          <Orders/>
        </div> : null}
        {activeTab === 5 ? <div>
          <Campaign/>
        </div> : null}
        {activeTab === 6 ? <div>
          <Shipping/>
        </div> : null}
      </div>
    </div>

</div>

<Faq/>


    </div>
  );
}