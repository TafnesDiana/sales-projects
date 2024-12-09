import Image from "next/image"


interface BannerProps {
    firstTitle: string;
    secondTitle: string;
    thirdTitle: string;
}


export default function BannerFixo({ firstTitle, secondTitle, thirdTitle }: BannerProps) {
    return (
        <div className="pt-16">
            <div className="relative w-screen h-80" >
                <Image
                    src="/images/banner-shop.svg"
                    alt="banner-shop"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    priority
                />
                <div className="absolute flex flex-col items-center justify-center w-full h-full">
                    <Image
                        src="/images/logo.svg"
                        alt="banner-shop"
                        width={55}
                        height={55}
                        className="pb-2"
                    />
                    <p className="font-poppins text-center font-bold sm:text-3xl md:text-4xl lg:text-5xl">{firstTitle}</p>
                    <div className="flex pt-3">
                        <p className="font-poppins text-center font-bold sm:text-xs md:text-sm lg:text-base">{secondTitle}</p>
                        <Image
                            src="/images/siteBanner.svg"
                            alt="banner-shop"
                            width={20}
                            height={20}
                        />
                        <p className="font-poppins text-center sm:text-xs md:text-sm lg:text-base">{thirdTitle}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}