import Image from "next/image";


const Mosaic = () => {
    return (
        <div className="relative w-screen h-screen sm:mt-10 md:mt-12 lg:mt-14">
            <Image
                src="/images/mosaic.svg"
                alt="mosaicImage"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="pb-12"
            />
        </div>
    );
};

export default Mosaic;
