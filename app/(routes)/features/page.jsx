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
import Grow from "@/components/grow";

export default function Features() {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

 const tabs = [
    { id: 1, label: 'Products', icon: 'image/box-open-full.svg' },
    { id: 2, label: 'Multi Branch', icon: 'image/code-branch.svg' },
    { id: 3, label: 'Store Sell', icon: 'image/cart-shopping-fast.svg' },
    { id: 4, label: 'Orders', icon: 'image/shopping-bag.svg' },
    { id: 5, label: 'Campaign', icon: 'image/megaphone.svg' },
    { id: 6, label: 'Shipping', icon: 'image/shipping-fast.svg' }
    ,]

  return (
    <div>
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:my-24 my-10">
    <div>
      <p className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-[45px] leading-[50px]">
        <span className="text-[#009999]">Maximize Your Business </span> <br/> Growth Within Your Budget
      </p>

      <p className="lg:text-lg text:md text-gray-400 mt-4">
        Or we give your money back. Hundreds of others have taken advantage of Markopolo.ai and are getting results as we speak. Great things are waiting for you, and we can’t wait to accompany you on this voyage.
      </p>
    </div>

    <div>
      <Image
        className="h-[300px] md:h-[500px] w-full object-contain"
        width={500}
        height={500}
        alt="Feature"
        src="/image/rpos.png"
      />
    </div>
  </div>
</div>


      
      <div className="max-w-screen-2xl justify-center mx-auto my-6">

<div className="flex lg:border-b-2 border-b border-gray-200 overflow-x-auto">
  <ul className="flex items-center gap-3 lg:gap-10 min-w-max">
    {tabs.map((tab, index) => (
      <li key={index}>
        <button
          className={`inline-flex items-center px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[20px] duration-200 font-[550] gap-2 lg:gap-3 ${
            activeTab === tab.id ? 'text-[#009999] lg:border-b-4 border-b-2 border-[#009999]' : 'text-gray-600 border-b-2 lg:border-b-4 border-transparent'
          }`}
          onClick={() => changeTab(tab.id)}
        >
          <Image
            className={`h-[16px] lg:h-[25px] w-[16px] lg:w-[25px] object-contain ${activeTab === tab.id ? 'active-svg' : 'inactive-svg'}`}
            width={20}
            height={20}
            alt={tab.label}
            src={tab.icon}
          />
          {tab.label}
        </button>
      </li>
    ))}
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
<Grow/>


    </div>
  );
}