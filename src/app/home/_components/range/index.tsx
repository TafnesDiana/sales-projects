
import Image from "next/image";

const Range = () => {
  return (
    <div className="m-9 md:m-9">
      <h1 className="font-poppins font-bold text-2xl md:text-3xl text-center">Browse The Range</h1>
      <h2 className="font-poppins text-base md:text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 gap-6 md:gap-4 p-6">
        <div className="flex justify-center flex-col items-center text-center max-w-xs">
          <Image
            src="/images/image01.svg"
            alt="Dining"
            width={400}
            height={30}
            className="object-contain rounded-xl cursor-pointer"
          />
          <h1 className="font-poppins font-bold text-center mt-5 text-lg md:text-xl">Dining</h1>
        </div>
        <div className="flex justify-center flex-col items-center text-center max-w-xs">
          <Image
            src="/images/image02.svg"
            alt="Living"
            width={400}
            height={30}
            className="object-contain rounded-xl cursor-pointer"
          />
          <h1 className="font-poppins font-bold text-center mt-5 text-lg md:text-xl">Living</h1>
        </div>
        <div className=" flex justify-center flex-col items-center text-center max-w-xs">
          <Image
            src="/images/image03.svg"
            alt="Bedroom"
            width={400}
            height={30}
            className="object-contain rounded-xl cursor-pointer"
          />
          <h1 className="font-poppins font-bold text-center mt-5 text-lg md:text-xl">Bedroom</h1>
        </div>
      </div>
    </div>
  );
};

export default Range;