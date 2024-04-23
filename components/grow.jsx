import { Button } from "@nextui-org/button";
const Grow = () => {
    return(
        <>
         <div className="max-w-screen-2xl py-10 mx-auto">
    <div className="rounded-3xl justify-center shadow-2xl call-now py-16">
      <div className="justify-center">
        <p className="text-[40px] text-center font-[600] text-white">Grow Your Business <br/>with Dokanibhai</p>
        <p className="texl-xl font-[500] text-center text-white mb-5">Whether you want to sell products down the street or around the world, we have all the tools you need.</p>
        </div>
        <div className="justify-center flex">
        <Button className="lg:w-[200px] lg:h-[50px]  md:w-[140px] md:h-[40px]   w-[150px] h-[36px] rounded-full bg-[#ffffff] hover:bg-[#009999] hover:text-white text-[#009999] lg:text-lg font-semibold">
                Start Free Trial
                </Button>
        </div>
       
  
    </div>
   </div>
        </>
    );
};
export default Grow;