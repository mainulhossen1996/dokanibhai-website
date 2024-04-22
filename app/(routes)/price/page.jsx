'use client'
import Image from "next/image";
import { useState } from 'react';
import PosPrice from "@/components/posPrice";
import EcomPrice from "@/components/ecommercePrice";
import Faq from "@/components/faq"

export default function Price() {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex justify-center">
        <div className="text-center mt-[50px] w-[60%]">
          <p className="text-[50px] font-bold">
            <span className="text-[#009999]">Maximize Your Business Growth</span> <br/> Within Your Budget
          </p>

          <p className="text-lg text-gray-400 mt-4">
          Or we give your money back. Hundreds of others have taken advantage of Markopolo.ai and are getting results as we speak. Great things are waiting for you, and we can’t wait to accompany you on this voyage. 
          </p>
        </div>
      </div>

      
      <div className="max-w-screen-2xl justify-center mx-auto my-6">
      <div className="flex mx-auto justify-center">
      <ul className="flex gap-4 bg-sky-50 border-2 border-sky-100 rounded-full p-1">
        <li className="">
          <button
            className={`inline-block rounded-full px-6 py-2 text-[18px] duration-200 font-[600] ${activeTab === 1 ? 'text-[#009999] bg-[#009999] text-white' : 'text-gray-600 hover:text-[#009999]'}`}
            onClick={() => changeTab(1)}
          >
            Retail POS
          </button>
        </li>
        <li className="">
          <button
            className={`inline-block rounded-full px-6 py-2 text-[18px] duration-200  font-[600] ${activeTab === 2 ? 'text-[#009999] bg-[#009999] text-white' : 'text-gray-600 hover:text-[#009999]'}`}
            onClick={() => changeTab(2)}
          >
            Integrated Ecommerce
          </button>
        </li>
      </ul>
      </div>
      
      <div>

      <div className="w-full pt-4">
        {activeTab === 1 ? <div>
          <PosPrice/>
        </div> : null}
        {activeTab === 2 ? <div>
          <EcomPrice/>
        </div> : null}
      </div>
    </div>

</div>

<Faq/>


    </div>
  );
}