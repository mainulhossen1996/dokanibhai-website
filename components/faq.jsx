'use client'
import { useState } from "react";

const faq = () => {

    const [isOpen, setIsOpen] = useState(null);
    const accordions = [
      {
      title: "How do I get my Dokanibhai account?", 
      description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "How do I integrate ecommerce for my business?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
      {
        title: "What is your payment policy?",
        description:"Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
      },
      {
        title: "Can I add another branch later for my business?",
        description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
      },
  
    ];
    const toggle = (idx) => {
      setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };

    return (
      <>
        <div className="flex w-full mx-auto justify-center my-16">
          <div className=" px-10">
            <p className="text-[40px] font-[600] text-center py-10 px-20">
              Learn More About Dokanibhai
            </p>
        <div className="">
        {accordions.map((PerAccordion, idx) => (
          <div key={idx} className="border-b border-gray-300">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between py-4 font-medium text-white dark:text-black">
              <span className="sm:text-lg md:text-xl font-[600]">{PerAccordion.title}</span>
              <span className="rounded-full p-2 ">
                <svg className="ml-8 mr-7 shrink-0 fill-[#009999]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid text-start overflow-hidden text-gray-500 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
</div>
</div>
      </>
    );
  };
  
  export default faq;