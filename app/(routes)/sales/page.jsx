'use client'
import Image from "next/image";
import Calendar from "@/components/calendar";
import { useState } from "react";

const Sales = () => {

  const [isOpen, setIsOpen] = useState(null);
  const accordions = [
    {
    title: "How do I create an account?", 
    description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
  },
    {
      title: "What is your return policy?",
      description:"Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };

  return (
    <div className="text-center">
        <div className="bg-gradient-to-r from-[#009999] to-[#00a599] bg-opacity-60">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 gap-8 py-20">
            <div className="col-span-1 text-start pe-16">
              <p className="text-5xl font-extrabold text-white tracking-wide leading-relaxed ">
                Talk to sales
              </p>

              <p className="text-xl font-normal text-white">
                Join the community of advertisers all over the world and learn
                how you can optimize your marketing.
              </p>
            </div>
            <div className=" col-span-1 ">
              <div className="flex justify-center items-center">
                <div className="rounded-lg border border-gray-300 border-opacity-30 bg-gradient-to-r from-[#009999] to-[#00a599] to-transparent p-5 bg-transparent text-start">
                  

                  <p className="text-sm pb-5 pt-5 text-white italic font-medium">
                    “What Mark did within the first quarter was amazing! We were
                    looking for a solution that can scale our Amazon business
                    with other paid channels as well and it was a perfect fit!”
                  </p>

                  <div className="flex items-center justify-start text-white">
                    <div className="">
                    <Image
                    className="rounded-full h-[50px] w-[50px] object-cover"
                    width={100}
                    height={100}
                    alt="logo"
                    src="/image/md-mainul.jpg"
                  />
                    </div>
                    <div className="ms-3">
                      <p className="font-bold">Md. Mainul Hossen</p>
                      <p className="font-normal">Head of Product Development, Dokanibhai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 px-32">
          <p className="text-gray-500 text-[18px] font-medium">
            👋 Book a time that works best for you, and our team will discuss
            how we can help improve and support your business.
          </p>

          <Calendar />
        </div>

        <div className="flex justify-center max-w-screen-2xl mx-auto my-16">
          <div>
            <p className="text-[40px] font-[600] py-10">
              Learn More About Dokanibhai
            </p>
        <div className="">
        {accordions.map((PerAccordion, idx) => (
          <div key={idx} className="border-b border-gray-300 last-of-type:border-none">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between py-4 font-medium text-white dark:text-black">
              <span className="sm:text-lg md:text-xl">{PerAccordion.title}</span>
              <span className="rounded-full p-2 ">
                <svg className="ml-8 mr-7 shrink-0 fill-[#fff]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
</div>
</div>

      </div>
  
  );
};

export default Sales;
