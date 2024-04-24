import Image from 'next/image'
import { Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {

    return (
      <>
<footer class="mt-auto max-w-screen-2xl py-10 px-4 sm:px-6 lg:px-8 mx-auto footer">
  <div class="text-center">
    <div>
    <Image
              className="h-[40px] w-full object-contain"
              width={40}
              height={40}
              alt="Feature"
              src="/image/icon.png"
            />
    </div>


    <div class="mt-3">
      <p class="text-gray-500 dark:text-neutral-500 text-sm">We're part of the <a class="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://mpairtech.com">mPair</a> family.</p>
      <p class="text-gray-500 dark:text-neutral-500 text-sm">© Dokanibhai. 2024 mPair Tech. All rights reserved.</p>
    </div>


    <div class="mt-3 space-x-2">
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
       <Facebook size={20} />
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
      <Youtube size={20} />
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
      <Instagram size={20} />
      </a>
    </div>

  </div>

</footer>

      </>
    );
};
export default Footer;