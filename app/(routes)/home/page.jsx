import Image from "next/image";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Type from "@/components/type";
import BackOffice from "@/components/backOffice";

export default function Home() {
  return (
    <>
   <Hero/>
   <Feature/>
   <Type/>
   <BackOffice/>
    </>
  );
}