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
        <div className="flex max-w-screen-2xl mx-auto justify-center my-16 lg:rounded-3xl rounded-0 bg-none lg:bg-gray-100">
          <div className="lg:pb-10 pb-0">
            <p className="lg:text-[40px] text-[25px] font-[600] text-center py-10 px-20">
            Frequently Asked Questions
            </p>
        <div className="max-w-screen-lg">
        {accordions.map((PerAccordion, idx) => (
          <div key={idx} className="mb-4 lg:px-10 px-0 mx-6 lg:mx-0 border-b-2 border-[#eeeeee] py-2">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between lg:py-4 py-2 font-medium text-start text-white dark:text-black">
              <span className="sm:text-lg md:text-2xl font-[600]">{PerAccordion.title}</span>
              <span className="rounded-full">
                <svg className="ml-8 shrink-0 fill-[#009999]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid text-start overflow-hidden text-gray-500 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden text-sm lg:text-lg">{PerAccordion.description}</div>
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