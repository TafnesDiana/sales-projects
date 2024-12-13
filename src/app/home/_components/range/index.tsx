
'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Range = () => {
  const router = useRouter(); 
  const handleNavigation = (category: string) => { router.push(`/shop?category=${category}`); };
  return (
    <div className="m-9 md:m-9">
      <h1 className="font-poppins font-bold text-2xl md:text-3xl text-center">Browse The Range</h1>
      <h2 className="font-poppins text-base md:text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 gap-6 md:gap-4 p-6">
        <div className="flex justify-center flex-col items-center text-center max-w-xs" onClick={() => handleNavigation('Mesas')}>
          <Image
            src="/images/image01.svg"
            alt="Dining"
            width={400}
            height={30}
            className="object-contain rounded-xl cursor-pointer"
          />
          <h1 className="font-poppins font-bold text-center mt-5 text-lg md:text-xl">Mesas</h1>
        </div>
        <div className="flex justify-center flex-col items-center text-center max-w-xs" onClick={() =>handleNavigation('Sofás')}>
          <Image
            src="/images/image02.svg"
            alt="Living"
            width={400}
            height={30}
            className="object-contain rounded-xl cursor-pointer"
          />
          <h1 className="font-poppins font-bold text-center mt-5 text-lg md:text-xl">Sofás</h1>
        </div>
        <div className=" flex justify-center flex-col items-center text-center max-w-xs" onClick={() => handleNavigation('Racks')}>
          <Image
            src="/images/image03.svg"
            alt="Bedroom"
            width={400}
            height={30}
            className="object-contain rounded-xl cursor-pointer"
          />
          <h1 className="font-poppins font-bold text-center mt-5 text-lg md:text-xl">Racks</h1>
        </div>
      </div>
    </div>
  );
};

export default Range;