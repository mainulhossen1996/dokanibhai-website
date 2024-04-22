'use client'
import Image from "next/image";
import Calendar from "@/components/calendar";
import Faq from "@/components/faq"
import { useState } from "react";

const Sales = () => {


  return (
    <div className="text-center">
        {/* <div className="bg-gradient-to-r from-[#009999] to-[#00a599] bg-opacity-60">
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
                      <p className="font-normal text-[14px]">Head of Product Development, Dokanibhai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        <div className="max-w-screen-2xl mx-auto flex justify-center">
        <div className="text-center mt-[50px] w-[60%]">
          <p className="text-[50px] font-bold">
          <span className="text-[#009999]">Book a Time </span><br/>That Works Best For You
          </p>

          <p className="text-lg text-gray-400 mt-4">
          Join the community of advertisers all over the world and learn
                how you can optimize your marketing.</p>
        </div>
      </div>

        <div className="flex w-full mx-auto justify-center">
          <div>
          <Calendar />
          </div>
        </div>

        <Faq/>

      </div>
  
  );
};

export default Sales;
