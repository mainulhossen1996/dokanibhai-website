'use client'
import React from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import POS_Ecom from "@/components/pos_ecom";
import BackOffice from "@/components/backOffice";

export default function Home() {
  return (
    <>
   <Hero/>
   <Feature/>
   <POS_Ecom/>
   <BackOffice/>
    </>
  );
}