'use client'
import React from "react";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import POS_Ecom from "@/components/pos_ecom";
import BackOffice from "@/components/backOffice";
import Grow from "@/components/grow";

export default function Home() {
  return (
    <>
   <Hero/>
   <Feature/>
   <POS_Ecom/>
   <BackOffice/>
   <Grow/>
    </>
  );
}